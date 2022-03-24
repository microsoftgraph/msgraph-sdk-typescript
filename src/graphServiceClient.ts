import { FetchRequestAdapter, HttpClient } from "@microsoft/kiota-http-fetchlibrary";
import { GraphBaseServiceClient } from "./graphBaseServiceClient";
import {ClientOptions, getDefaultMiddlewareChain, GraphBaseClient, GraphClientError, GraphRequest, GRAPH_API_VERSION, GRAPH_BASE_URL, updateAndReturnAllAllowedHosts} from "@microsoft/microsoft-graph-client"

/**
 * @public
 * @class GraphServiceClient
 * 
 */
export class GraphServiceClient extends GraphBaseServiceClient implements GraphBaseClient{
    private constructor(clientOptions: ClientOptions) {
     
		let httpClient: HttpClient;
		if (clientOptions.authProvider === undefined) {
			const error = new GraphClientError();
			error.name = "Graph Service client Initialization Failed";
			error.message = "Unable to Create Client, Please provide an authentication provider";
			throw error;
		}
        const allowedHosts = updateAndReturnAllAllowedHosts(clientOptions.authProvider, clientOptions.customHosts);

		if (!clientOptions.middleware) {
			httpClient = new HttpClient(undefined, ...[].concat(getDefaultMiddlewareChain(clientOptions, allowedHosts)));
		} else {
			httpClient = new HttpClient(clientOptions.customFetch, ...[].concat(clientOptions.middleware));
		}

        const fetchRequestAdapter = new FetchRequestAdapter(clientOptions.authProvider, undefined, undefined,httpClient);

        super(fetchRequestAdapter);
      
        for (const key in clientOptions) {
			if (Object.prototype.hasOwnProperty.call(clientOptions, key)) {
				this.config[key] = clientOptions[key];
			}
		}
		this.httpClient = httpClient;
       
    }

    private httpClient: HttpClient;
    private config: ClientOptions = {
		baseUrl: GRAPH_BASE_URL,
		debugLogging: false,
		defaultVersion: GRAPH_API_VERSION,
	};

    /**
	 * @public
	 * @static
	 * Factory to configures a client instance with authProvider, initializes the middleware chain
	 * @param {clientOptions} ClientOptions - The options for client instance
	 * @returns The GraphServiceClient instance
	 */

    public static init(clientOptions: ClientOptions): GraphServiceClient {
        return new GraphServiceClient(clientOptions);
   
    }

    /**
	 * @public
	 * Api to make a request using a Graph URL
	 * @param {url} path - The Graph API URL
	 * @returns The graph request instance
	 */
    public api(path: string): GraphRequest {
        return new GraphRequest(this.httpClient, this.config, path);
    }

}