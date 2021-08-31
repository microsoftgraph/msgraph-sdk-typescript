import {AdministrativeUnitsRequestBuilder} from './administrativeUnits/administrativeUnitsRequestBuilder';
import {AdministrativeUnitRequestBuilder} from './administrativeUnits/item/administrativeUnitRequestBuilder';
import {DeletedItemsRequestBuilder} from './deletedItems/deletedItemsRequestBuilder';
import {DirectoryObjectRequestBuilder} from './deletedItems/item/directoryObjectRequestBuilder';
import {Directory} from './directory';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /directory  */
export class DirectoryRequestBuilder {
    public get administrativeUnits(): AdministrativeUnitsRequestBuilder {
        return new AdministrativeUnitsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deletedItems(): DeletedItemsRequestBuilder {
        return new DeletedItemsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Gets an item from the graphtypescriptv4.utilities.directory.administrativeUnits collection
     * @param id Unique identifier of the item
     * @returns a AdministrativeUnitRequestBuilder
     */
    public administrativeUnitsById(id: String) : AdministrativeUnitRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AdministrativeUnitRequestBuilder(this.currentPath + this.pathSegment + "/administrativeUnits/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new DirectoryRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/directory";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get directory
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
     * Update directory
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Directory | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Gets an item from the graphtypescriptv4.utilities.directory.deletedItems collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectRequestBuilder
     */
    public deletedItemsById(id: String) : DirectoryObjectRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DirectoryObjectRequestBuilder(this.currentPath + this.pathSegment + "/deletedItems/" + id, this.httpCore, false);
    };
    /**
     * Get directory
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Directory
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Directory | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Directory>(requestInfo, Directory, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update directory
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Directory | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
