import {Notebook, NotebookCollectionResponse} from '../../../../models/';
import {createNotebookCollectionResponseFromDiscriminatorValue} from '../../../../models/createNotebookCollectionResponseFromDiscriminatorValue';
import {createNotebookFromDiscriminatorValue} from '../../../../models/createNotebookFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetNotebookFromWebUrlRequestBuilder} from './microsoftGraphGetNotebookFromWebUrl/getNotebookFromWebUrlRequestBuilder';
import {GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder} from './microsoftGraphGetRecentNotebooksWithIncludePersonalNotebooks/getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder';
import {NotebooksRequestBuilderGetRequestConfiguration} from './notebooksRequestBuilderGetRequestConfiguration';
import {NotebooksRequestBuilderPostRequestConfiguration} from './notebooksRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
 */
export class NotebooksRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getNotebookFromWebUrl method. */
    public get microsoftGraphGetNotebookFromWebUrl(): GetNotebookFromWebUrlRequestBuilder {
        return new GetNotebookFromWebUrlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new NotebooksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/onenote/notebooks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of notebook objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of NotebookCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/onenote-list-notebooks?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NotebooksRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<NotebookCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<NotebookCollectionResponse>(requestInfo, createNotebookCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getRecentNotebooks method.
     * @param includePersonalNotebooks Usage: includePersonalNotebooks={includePersonalNotebooks}
     * @returns a getRecentNotebooksWithIncludePersonalNotebooksRequestBuilder
     */
    public microsoftGraphGetRecentNotebooksWithIncludePersonalNotebooks(includePersonalNotebooks: boolean | undefined) : GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder {
        if(!includePersonalNotebooks) throw new Error("includePersonalNotebooks cannot be undefined");
        return new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder(this.pathParameters, this.requestAdapter, includePersonalNotebooks);
    };
    /**
     * Create a new OneNote notebook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Notebook
     * @see {@link https://docs.microsoft.com/graph/api/onenote-post-notebooks?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Notebook | undefined, requestConfiguration?: NotebooksRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Notebook | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Notebook>(requestInfo, createNotebookFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a list of notebook objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NotebooksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create a new OneNote notebook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Notebook | undefined, requestConfiguration?: NotebooksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
