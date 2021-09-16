import {OnenoteSection} from '../../../../onenoteSection';
import {CopyToNotebookRequestBuilder} from './copyToNotebook/copyToNotebookRequestBuilder';
import {CopyToSectionGroupRequestBuilder} from './copyToSectionGroup/copyToSectionGroupRequestBuilder';
import {OnenotePageRequestBuilder} from './pages/item/onenotePageRequestBuilder';
import {PagesRequestBuilder} from './pages/pagesRequestBuilder';
import {ParentNotebookRequestBuilder} from './parentNotebook/parentNotebookRequestBuilder';
import {ParentSectionGroupRequestBuilder} from './parentSectionGroup/parentSectionGroupRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection  */
export class ParentSectionRequestBuilder {
    public get copyToNotebook(): CopyToNotebookRequestBuilder {
        return new CopyToNotebookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get copyToSectionGroup(): CopyToSectionGroupRequestBuilder {
        return new CopyToSectionGroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get pages(): PagesRequestBuilder {
        return new PagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get parentNotebook(): ParentNotebookRequestBuilder {
        return new ParentNotebookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get parentSectionGroup(): ParentSectionGroupRequestBuilder {
        return new ParentSectionGroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new ParentSectionRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/parentSection";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * The section that contains the page. Read-only.
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
     * The section that contains the page. Read-only.
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
     * The section that contains the page. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OnenoteSection | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The section that contains the page. Read-only.
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
     * The section that contains the page. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenoteSection
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenoteSection | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<OnenoteSection>(requestInfo, OnenoteSection, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.onenote.pages.parentSection.pages collection
     * @param id Unique identifier of the item
     * @returns a onenotePageRequestBuilder
     */
    public pagesById(id: String) : OnenotePageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnenotePageRequestBuilder(this.currentPath + this.pathSegment + "/pages/" + id, this.httpCore, false);
    };
    /**
     * The section that contains the page. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: OnenoteSection | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
