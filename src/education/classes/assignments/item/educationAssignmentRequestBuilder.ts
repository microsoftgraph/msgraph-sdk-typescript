import {EducationAssignment} from '../../../educationAssignment';
import {CategoriesRequestBuilder} from '../categories/categoriesRequestBuilder';
import {EducationCategoryRequestBuilder} from '../categories/item/educationCategoryRequestBuilder';
import {Microsoft.graph.publishRequestBuilder} from '../microsoft/graph/publish/microsoft.graph.publishRequestBuilder';
import {EducationAssignmentResourceRequestBuilder} from '../resources/item/educationAssignmentResourceRequestBuilder';
import {ResourcesRequestBuilder} from '../resources/resourcesRequestBuilder';
import {RubricRequestBuilder} from '../rubric/rubricRequestBuilder';
import {EducationSubmissionRequestBuilder} from '../submissions/item/educationSubmissionRequestBuilder';
import {SubmissionsRequestBuilder} from '../submissions/submissionsRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /education/classes/{educationClass-id}/assignments/{educationAssignment-id}  */
export class EducationAssignmentRequestBuilder {
    public get categories(): CategoriesRequestBuilder {
        return new CategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.publish(): Microsoft.graph.publishRequestBuilder {
        return new Microsoft.graph.publishRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get rubric(): RubricRequestBuilder {
        return new RubricRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get submissions(): SubmissionsRequestBuilder {
        return new SubmissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.categories collection
     * @param id Unique identifier of the item
     * @returns a EducationCategoryRequestBuilder
     */
    public categoriesById(id: String) : EducationCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationCategoryRequestBuilder(this.currentPath + this.pathSegment + "/categories/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new EducationAssignmentRequestBuilder and sets the default values.
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
     * All assignments associated with this class. Nullable.
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
     * All assignments associated with this class. Nullable.
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
     * All assignments associated with this class. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: EducationAssignment | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * All assignments associated with this class. Nullable.
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
     * All assignments associated with this class. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationAssignment
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationAssignment | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<EducationAssignment>(requestInfo, EducationAssignment, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * All assignments associated with this class. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationAssignment | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.resources collection
     * @param id Unique identifier of the item
     * @returns a EducationAssignmentResourceRequestBuilder
     */
    public resourcesById(id: String) : EducationAssignmentResourceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationAssignmentResourceRequestBuilder(this.currentPath + this.pathSegment + "/resources/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.assignments.submissions collection
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionRequestBuilder
     */
    public submissionsById(id: String) : EducationSubmissionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationSubmissionRequestBuilder(this.currentPath + this.pathSegment + "/submissions/" + id, this.httpCore, false);
    };
}
