import {Education} from '../models/microsoft/graph/education';
import {EducationRoot} from '../models/microsoft/graph/educationRoot';
import {ClassesRequestBuilder} from './classes/classesRequestBuilder';
import {EducationClassRequestBuilder} from './classes/item/educationClassRequestBuilder';
import {MeRequestBuilder} from './me/meRequestBuilder';
import {EducationSchoolRequestBuilder} from './schools/item/educationSchoolRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {EducationUserRequestBuilder} from './users/item/educationUserRequestBuilder';
import {UsersRequestBuilder} from './users/usersRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /education  */
export class EducationRequestBuilder {
    public get classes(): ClassesRequestBuilder {
        return new ClassesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get me(): MeRequestBuilder {
        return new MeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.classes.item collection
     * @param id Unique identifier of the item
     * @returns a educationClassRequestBuilder
     */
    public classesById(id: String) : EducationClassRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationClassRequestBuilder(this.currentPath + this.pathSegment + "/classes/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new EducationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/education";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get education
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
     * Update education
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Education | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Get education
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<EducationRoot>(requestInfo, EducationRoot, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update education
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Education | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.schools.item collection
     * @param id Unique identifier of the item
     * @returns a educationSchoolRequestBuilder
     */
    public schoolsById(id: String) : EducationSchoolRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationSchoolRequestBuilder(this.currentPath + this.pathSegment + "/schools/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.education.users.item collection
     * @param id Unique identifier of the item
     * @returns a educationUserRequestBuilder
     */
    public usersById(id: String) : EducationUserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EducationUserRequestBuilder(this.currentPath + this.pathSegment + "/users/" + id, this.httpCore, false);
    };
}
