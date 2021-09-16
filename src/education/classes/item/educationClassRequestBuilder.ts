import {EducationClass} from '../../../educationClass';
import {AssignmentCategoriesRequestBuilder} from '../assignmentCategories/assignmentCategoriesRequestBuilder';
import {EducationCategoryRequestBuilder} from '../assignmentCategories/item/item/educationCategoryRequestBuilder';
import {AssignmentDefaultsRequestBuilder} from '../assignmentDefaults/assignmentDefaultsRequestBuilder';
import {AssignmentsRequestBuilder} from '../assignments/assignmentsRequestBuilder';
import {EducationAssignmentRequestBuilder} from '../assignments/item/item/educationAssignmentRequestBuilder';
import {AssignmentSettingsRequestBuilder} from '../assignmentSettings/assignmentSettingsRequestBuilder';
import {GroupRequestBuilder} from '../group/groupRequestBuilder';
import {MembersRequestBuilder} from '../members/membersRequestBuilder';
import {SchoolsRequestBuilder} from '../schools/schoolsRequestBuilder';
import {TeachersRequestBuilder} from '../teachers/teachersRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /education/classes/{educationClass-id}  */
export class EducationClassRequestBuilder {
    public get assignmentCategories(): AssignmentCategoriesRequestBuilder {
        return new AssignmentCategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignmentDefaults(): AssignmentDefaultsRequestBuilder {
        return new AssignmentDefaultsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignmentSettings(): AssignmentSettingsRequestBuilder {
        return new AssignmentSettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get teachers(): TeachersRequestBuilder {
        return new TeachersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.classes.item.assignmentCategories.item collection
     * @param id Unique identifier of the item
     * @returns a educationCategoryRequestBuilder
     */
    public assignmentCategoriesById(id: String) : EducationCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationCategoryRequestBuilder(this.currentPath + this.pathSegment + "/assignmentCategories/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.classes.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a educationAssignmentRequestBuilder
     */
    public assignmentsById(id: String) : EducationAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new EducationClassRequestBuilder and sets the default values.
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
     * Delete navigation property classes for education
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
     * Get classes from education
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
     * Update the navigation property classes in education
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationClass | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Delete navigation property classes for education
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
     * Get classes from education
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationClass
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationClass | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<EducationClass>(requestInfo, EducationClass, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property classes in education
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationClass | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
