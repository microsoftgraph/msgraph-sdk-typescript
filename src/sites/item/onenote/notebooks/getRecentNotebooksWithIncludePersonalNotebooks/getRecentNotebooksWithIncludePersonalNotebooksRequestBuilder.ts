import {createGetRecentNotebooksWithIncludePersonalNotebooksResponseFromDiscriminatorValue} from './createGetRecentNotebooksWithIncludePersonalNotebooksResponseFromDiscriminatorValue';
import {GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration} from './getRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponseImpl} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getRecentNotebooks method. */
export class GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder and sets the default values.
     * @param includePersonalNotebooks Usage: includePersonalNotebooks={includePersonalNotebooks}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, includePersonalNotebooks?: boolean | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/sites/{site%2Did}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks})";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams[""] = includePersonalNotebooks
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getRecentNotebooks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Invoke function getRecentNotebooks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetRecentNotebooksWithIncludePersonalNotebooksResponse
     */
    public get(requestConfiguration?: GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetRecentNotebooksWithIncludePersonalNotebooksResponseImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetRecentNotebooksWithIncludePersonalNotebooksResponseImpl>(requestInfo, createGetRecentNotebooksWithIncludePersonalNotebooksResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
