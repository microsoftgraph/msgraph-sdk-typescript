import {GetRecentNotebooksWithIncludePersonalNotebooks} from './getRecentNotebooksWithIncludePersonalNotebooks';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks})  */
export class GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetRecentNotebooksWithIncludePersonalNotebooksRequestBuilder and sets the default values.
     * @param includePersonalNotebooks Usage: includePersonalNotebooks={includePersonalNotebooks}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter, includePersonalNotebooks?: boolean | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group_id}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks})";
        const urlTplParams = getPathParameters(pathParameters);
        includePersonalNotebooks && urlTplParams.set("includePersonalNotebooks", includePersonalNotebooks);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getRecentNotebooks
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function getRecentNotebooks
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetRecentNotebooksWithIncludePersonalNotebooks
     */
    public get(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetRecentNotebooksWithIncludePersonalNotebooks[] | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendCollectionAsync<GetRecentNotebooksWithIncludePersonalNotebooks>(requestInfo, GetRecentNotebooksWithIncludePersonalNotebooks, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
