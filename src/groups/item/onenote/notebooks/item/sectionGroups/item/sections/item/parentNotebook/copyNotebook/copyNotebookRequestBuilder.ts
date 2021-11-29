import {OnenoteOperation} from '../../../../../../../../../../../models/microsoft/graph/onenoteOperation';
import {CopyNotebookRequestBody} from './copyNotebookRequestBody';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook/microsoft.graph.copyNotebook  */
export class CopyNotebookRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new CopyNotebookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group_id}/onenote/notebooks/{notebook_id}/sectionGroups/{sectionGroup_id}/sections/{onenoteSection_id}/parentNotebook/microsoft.graph.copyNotebook";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke action copyNotebook
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: CopyNotebookRequestBody | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke action copyNotebook
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CopyNotebookResponse
     */
    public post(body: CopyNotebookRequestBody | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenoteOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendAsync<OnenoteOperation>(requestInfo, OnenoteOperation, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
