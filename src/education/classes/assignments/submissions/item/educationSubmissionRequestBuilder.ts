import {EducationSubmission} from '../../../educationSubmission';
import {Microsoft.graph.returnRequestBuilder} from '../microsoft/graph/return/microsoft.graph.returnRequestBuilder';
import {Microsoft.graph.submitRequestBuilder} from '../microsoft/graph/submit/microsoft.graph.submitRequestBuilder';
import {Microsoft.graph.unsubmitRequestBuilder} from '../microsoft/graph/unsubmit/microsoft.graph.unsubmitRequestBuilder';
import {EducationOutcomeRequestBuilder} from '../outcomes/item/educationOutcomeRequestBuilder';
import {OutcomesRequestBuilder} from '../outcomes/outcomesRequestBuilder';
import {EducationSubmissionResourceRequestBuilder} from '../resources/item/educationSubmissionResourceRequestBuilder';
import {ResourcesRequestBuilder} from '../resources/resourcesRequestBuilder';
import {EducationSubmissionResourceRequestBuilder} from '../submittedResources/item/educationSubmissionResourceRequestBuilder';
import {SubmittedResourcesRequestBuilder} from '../submittedResources/submittedResourcesRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}  */
export class EducationSubmissionRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.return(): Microsoft.graph.returnRequestBuilder {
        return new Microsoft.graph.returnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.submit(): Microsoft.graph.submitRequestBuilder {
        return new Microsoft.graph.submitRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.unsubmit(): Microsoft.graph.unsubmitRequestBuilder {
        return new Microsoft.graph.unsubmitRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get outcomes(): OutcomesRequestBuilder {
        return new OutcomesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get submittedResources(): SubmittedResourcesRequestBuilder {
        return new SubmittedResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new EducationSubmissionRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: EducationSubmission | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationSubmission
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationSubmission | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<EducationSubmission>(requestInfo, EducationSubmission, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.submissions.outcomes collection
     * @param id Unique identifier of the item
     * @returns a EducationOutcomeRequestBuilder
     */
    public outcomesById(id: String) : EducationOutcomeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationOutcomeRequestBuilder(this.currentPath + this.pathSegment + "/outcomes/" + id, this.httpCore, false);
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationSubmission | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.submissions.resources collection
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionResourceRequestBuilder
     */
    public resourcesById(id: String) : EducationSubmissionResourceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationSubmissionResourceRequestBuilder(this.currentPath + this.pathSegment + "/resources/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.submissions.submittedResources collection
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionResourceRequestBuilder
     */
    public submittedResourcesById(id: String) : EducationSubmissionResourceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationSubmissionResourceRequestBuilder(this.currentPath + this.pathSegment + "/submittedResources/" + id, this.httpCore, false);
    };
}
