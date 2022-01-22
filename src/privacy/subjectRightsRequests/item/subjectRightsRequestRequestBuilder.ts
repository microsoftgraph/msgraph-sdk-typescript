import {SubjectRightsRequest} from '../../../models/microsoft/graph/subjectRightsRequest';
import {GetFinalAttachmentRequestBuilder} from './getFinalAttachment/getFinalAttachmentRequestBuilder';
import {GetFinalReportRequestBuilder} from './getFinalReport/getFinalReportRequestBuilder';
import {AuthoredNoteRequestBuilder} from './notes/item/authoredNoteRequestBuilder';
import {NotesRequestBuilder} from './notes/notesRequestBuilder';
import {TeamRequestBuilder} from './team/teamRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /privacy/subjectRightsRequests/{subjectRightsRequest-id}  */
export class SubjectRightsRequestRequestBuilder {
    public get notes(): NotesRequestBuilder {
        return new NotesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SubjectRightsRequestRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/privacy/subjectRightsRequests/{subjectRightsRequest_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property subjectRightsRequests for privacy
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get subjectRightsRequests from privacy
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property subjectRightsRequests in privacy
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: SubjectRightsRequest | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property subjectRightsRequests for privacy
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get subjectRightsRequests from privacy
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SubjectRightsRequest
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SubjectRightsRequest | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<SubjectRightsRequest>(requestInfo, SubjectRightsRequest, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /privacy/subjectRightsRequests/{subjectRightsRequest-id}/microsoft.graph.getFinalAttachment()
     * @returns a getFinalAttachmentRequestBuilder
     */
    public getFinalAttachment() : GetFinalAttachmentRequestBuilder {
        return new GetFinalAttachmentRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /privacy/subjectRightsRequests/{subjectRightsRequest-id}/microsoft.graph.getFinalReport()
     * @returns a getFinalReportRequestBuilder
     */
    public getFinalReport() : GetFinalReportRequestBuilder {
        return new GetFinalReportRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.privacy.subjectRightsRequests.item.notes.item collection
     * @param id Unique identifier of the item
     * @returns a authoredNoteRequestBuilder
     */
    public notesById(id: string) : AuthoredNoteRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("authoredNote_id", id);
        return new AuthoredNoteRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property subjectRightsRequests in privacy
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: SubjectRightsRequest | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
