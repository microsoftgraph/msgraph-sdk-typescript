import {Drive} from '../drive';
import {FollowingRequestBuilder} from './following/followingRequestBuilder';
import {DriveItemRequestBuilder} from './following/item/driveItemRequestBuilder';
import {DriveItemRequestBuilder} from './items/item/driveItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListRequestBuilder} from './list/listRequestBuilder';
import {RecentRequestBuilder} from './recent/recentRequestBuilder';
import {RootRequestBuilder} from './root/rootRequestBuilder';
import {SearchWithQRequestBuilder} from './searchWithQ/searchWithQRequestBuilder';
import {SharedWithMeRequestBuilder} from './sharedWithMe/sharedWithMeRequestBuilder';
import {DriveItemRequestBuilder} from './special/item/driveItemRequestBuilder';
import {SpecialRequestBuilder} from './special/specialRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /drive  */
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
        this.pathSegment = "/drive";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get drive
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
     * Update drive
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
     * Gets an item from the graphtypescriptv4.utilities.drive.following collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public followingById(id: String) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemRequestBuilder(this.currentPath + this.pathSegment + "/following/" + id, this.httpCore, false);
    };
    /**
     * Get drive
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
     * Gets an item from the graphtypescriptv4.utilities.drive.items collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public itemsById(id: String) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemRequestBuilder(this.currentPath + this.pathSegment + "/items/" + id, this.httpCore, false);
    };
    /**
     * Update drive
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
     * Builds and executes requests for operations under /drive/microsoft.graph.recent()
     * @returns a recentRequestBuilder
     */
    public recent() : RecentRequestBuilder {
        return new RecentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /drive/microsoft.graph.search(q='{q}')
     * @param q Usage: q={q}
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, q, false);
    };
    /**
     * Builds and executes requests for operations under /drive/microsoft.graph.sharedWithMe()
     * @returns a sharedWithMeRequestBuilder
     */
    public sharedWithMe() : SharedWithMeRequestBuilder {
        return new SharedWithMeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.drive.special collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public specialById(id: String) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemRequestBuilder(this.currentPath + this.pathSegment + "/special/" + id, this.httpCore, false);
    };
}
