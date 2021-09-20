import {Drive} from '../../models/microsoft/graph/drive';
import {FollowingRequestBuilder} from './following/followingRequestBuilder';
import {DriveItemRequestBuilder as i7b5bacbbb7c3a594953534214f981fc114746a9c49bd5d6ae644ee9afb326939} from './following/item/driveItemRequestBuilder';
import {DriveItemRequestBuilder as ie1d28bac1742d51e3dc991f730681aa972751bd9882e990b96f2a4259f8b10f0} from './items/item/driveItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListRequestBuilder} from './list/listRequestBuilder';
import {RecentRequestBuilder} from './recent/recentRequestBuilder';
import {RootRequestBuilder} from './root/rootRequestBuilder';
import {SearchWithQRequestBuilder} from './searchWithQ/searchWithQRequestBuilder';
import {SharedWithMeRequestBuilder} from './sharedWithMe/sharedWithMeRequestBuilder';
import {DriveItemRequestBuilder as i82a1a43c452190997674bebdb4615c14870a3812fd5464949744e86a5bf674c5} from './special/item/driveItemRequestBuilder';
import {SpecialRequestBuilder} from './special/specialRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /drives/{drive-id}  */
export class DriveRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get following(): FollowingRequestBuilder {
        return new FollowingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get list(): ListRequestBuilder {
        return new ListRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get root(): RootRequestBuilder {
        return new RootRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get special(): SpecialRequestBuilder {
        return new SpecialRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new DriveRequestBuilder and sets the default values.
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
     * Delete entity from drives
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
     * Get entity from drives by key
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
     * Update entity in drives
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Drive | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Delete entity from drives
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
     * Gets an item from the graphtypescriptv4.utilities.drives.item.following.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public followingById(id: String) : i7b5bacbbb7c3a594953534214f981fc114746a9c49bd5d6ae644ee9afb326939 {
        if(!id) throw new Error("id cannot be undefined");
        return new i7b5bacbbb7c3a594953534214f981fc114746a9c49bd5d6ae644ee9afb326939(this.currentPath + this.pathSegment + "/following/" + id, this.httpCore, false);
    };
    /**
     * Get entity from drives by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Drive>(requestInfo, Drive, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item.items.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public itemsById(id: String) : ie1d28bac1742d51e3dc991f730681aa972751bd9882e990b96f2a4259f8b10f0 {
        if(!id) throw new Error("id cannot be undefined");
        return new ie1d28bac1742d51e3dc991f730681aa972751bd9882e990b96f2a4259f8b10f0(this.currentPath + this.pathSegment + "/items/" + id, this.httpCore, false);
    };
    /**
     * Update entity in drives
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Drive | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /drives/{drive-id}/microsoft.graph.recent()
     * @returns a recentRequestBuilder
     */
    public recent() : RecentRequestBuilder {
        return new RecentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /drives/{drive-id}/microsoft.graph.search(q='{q}')
     * @param q Usage: q={q}
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, q, false);
    };
    /**
     * Builds and executes requests for operations under /drives/{drive-id}/microsoft.graph.sharedWithMe()
     * @returns a sharedWithMeRequestBuilder
     */
    public sharedWithMe() : SharedWithMeRequestBuilder {
        return new SharedWithMeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drives.item.special.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public specialById(id: String) : i82a1a43c452190997674bebdb4615c14870a3812fd5464949744e86a5bf674c5 {
        if(!id) throw new Error("id cannot be undefined");
        return new i82a1a43c452190997674bebdb4615c14870a3812fd5464949744e86a5bf674c5(this.currentPath + this.pathSegment + "/special/" + id, this.httpCore, false);
    };
}
