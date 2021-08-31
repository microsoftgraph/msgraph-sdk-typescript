import {Onenote} from '../../groups/onenote/onenote';
import {NotebookRequestBuilder} from './notebooks/item/notebookRequestBuilder';
import {NotebooksRequestBuilder} from './notebooks/notebooksRequestBuilder';
import {OnenoteOperationRequestBuilder} from './operations/item/onenoteOperationRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {OnenotePageRequestBuilder} from './pages/item/onenotePageRequestBuilder';
import {PagesRequestBuilder} from './pages/pagesRequestBuilder';
import {OnenoteResourceRequestBuilder} from './resources/item/onenoteResourceRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {SectionGroupRequestBuilder} from './sectionGroups/item/sectionGroupRequestBuilder';
import {SectionGroupsRequestBuilder} from './sectionGroups/sectionGroupsRequestBuilder';
import {OnenoteSectionRequestBuilder} from './sections/item/onenoteSectionRequestBuilder';
import {SectionsRequestBuilder} from './sections/sectionsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/onenote  */
export class OnenoteRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get notebooks(): NotebooksRequestBuilder {
        return new NotebooksRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get pages(): PagesRequestBuilder {
        return new PagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sectionGroups(): SectionGroupsRequestBuilder {
        return new SectionGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sections(): SectionsRequestBuilder {
        return new SectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new OnenoteRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/onenote";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Read-only.
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
     * Read-only.
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
     * Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Onenote | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Read-only.
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
     * Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Onenote
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Onenote | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Onenote>(requestInfo, Onenote, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.onenote.notebooks collection
     * @param id Unique identifier of the item
     * @returns a NotebookRequestBuilder
     */
    public notebooksById(id: String) : NotebookRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new NotebookRequestBuilder(this.currentPath + this.pathSegment + "/notebooks/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.onenote.operations collection
     * @param id Unique identifier of the item
     * @returns a OnenoteOperationRequestBuilder
     */
    public operationsById(id: String) : OnenoteOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnenoteOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.onenote.pages collection
     * @param id Unique identifier of the item
     * @returns a OnenotePageRequestBuilder
     */
    public pagesById(id: String) : OnenotePageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnenotePageRequestBuilder(this.currentPath + this.pathSegment + "/pages/" + id, this.httpCore, false);
    };
    /**
     * Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Onenote | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.onenote.resources collection
     * @param id Unique identifier of the item
     * @returns a OnenoteResourceRequestBuilder
     */
    public resourcesById(id: String) : OnenoteResourceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnenoteResourceRequestBuilder(this.currentPath + this.pathSegment + "/resources/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.onenote.sectionGroups collection
     * @param id Unique identifier of the item
     * @returns a SectionGroupRequestBuilder
     */
    public sectionGroupsById(id: String) : SectionGroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SectionGroupRequestBuilder(this.currentPath + this.pathSegment + "/sectionGroups/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.onenote.sections collection
     * @param id Unique identifier of the item
     * @returns a OnenoteSectionRequestBuilder
     */
    public sectionsById(id: String) : OnenoteSectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnenoteSectionRequestBuilder(this.currentPath + this.pathSegment + "/sections/" + id, this.httpCore, false);
    };
}
