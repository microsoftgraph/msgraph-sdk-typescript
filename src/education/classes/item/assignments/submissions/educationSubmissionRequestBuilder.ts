import {EducationSubmission} from '../../../../../../../educationSubmission';
import {EducationOutcomeRequestBuilder} from '../outcomes/item/item/educationOutcomeRequestBuilder';
import {OutcomesRequestBuilder} from '../outcomes/outcomesRequestBuilder';
import {EducationSubmissionResourceRequestBuilder} from '../resources/item/item/educationSubmissionResourceRequestBuilder';
import {ResourcesRequestBuilder} from '../resources/resourcesRequestBuilder';
import {ReturnRequestBuilder} from '../return/returnRequestBuilder';
import {SetUpResourcesFolderRequestBuilder} from '../setUpResourcesFolder/setUpResourcesFolderRequestBuilder';
import {SubmitRequestBuilder} from '../submit/submitRequestBuilder';
import {EducationSubmissionResourceRequestBuilder} from '../submittedResources/item/item/educationSubmissionResourceRequestBuilder';
import {SubmittedResourcesRequestBuilder} from '../submittedResources/submittedResourcesRequestBuilder';
import {UnsubmitRequestBuilder} from '../unsubmit/unsubmitRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}  */
export class EducationSubmissionRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get outcomes(): OutcomesRequestBuilder {
        return new OutcomesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get return_escaped(): ReturnRequestBuilder {
        return new ReturnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get submit(): SubmitRequestBuilder {
        return new SubmitRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get submittedResources(): SubmittedResourcesRequestBuilder {
        return new SubmittedResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get unsubmit(): UnsubmitRequestBuilder {
        return new UnsubmitRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
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
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
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
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationSubmission | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
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
        const requestInfo = this.createDeleteRequestInformation(
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
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<EducationSubmission>(requestInfo, EducationSubmission, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.classes.item.assignments.item.submissions.item.outcomes.item collection
     * @param id Unique identifier of the item
     * @returns a educationOutcomeRequestBuilder
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
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.classes.item.assignments.item.submissions.item.resources.item collection
     * @param id Unique identifier of the item
     * @returns a educationSubmissionResourceRequestBuilder
     */
    public resourcesById(id: String) : EducationSubmissionResourceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationSubmissionResourceRequestBuilder(this.currentPath + this.pathSegment + "/resources/" + id, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.setUpResourcesFolder()
     * @returns a setUpResourcesFolderRequestBuilder
     */
    public setUpResourcesFolder() : SetUpResourcesFolderRequestBuilder {
        return new SetUpResourcesFolderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.classes.item.assignments.item.submissions.item.submittedResources.item collection
     * @param id Unique identifier of the item
     * @returns a educationSubmissionResourceRequestBuilder
     */
    public submittedResourcesById(id: String) : EducationSubmissionResourceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationSubmissionResourceRequestBuilder(this.currentPath + this.pathSegment + "/submittedResources/" + id, this.httpCore, false);
    };
}
