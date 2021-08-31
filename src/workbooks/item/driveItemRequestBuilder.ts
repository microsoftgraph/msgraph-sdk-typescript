import {DriveItem} from '../../driveItem';
import {AnalyticsRequestBuilder} from '../analytics/analyticsRequestBuilder';
import {ChildrenRequestBuilder} from '../children/childrenRequestBuilder';
import {ContentRequestBuilder} from '../content/contentRequestBuilder';
import {ListItemRequestBuilder} from '../listItem/listItemRequestBuilder';
import {Microsoft.graph.checkinRequestBuilder} from '../microsoft/graph/checkin/microsoft.graph.checkinRequestBuilder';
import {Microsoft.graph.checkoutRequestBuilder} from '../microsoft/graph/checkout/microsoft.graph.checkoutRequestBuilder';
import {Microsoft.graph.copyRequestBuilder} from '../microsoft/graph/copy/microsoft.graph.copyRequestBuilder';
import {Microsoft.graph.createLinkRequestBuilder} from '../microsoft/graph/createLink/microsoft.graph.createLinkRequestBuilder';
import {Microsoft.graph.createUploadSessionRequestBuilder} from '../microsoft/graph/createUploadSession/microsoft.graph.createUploadSessionRequestBuilder';
import {Microsoft.graph.followRequestBuilder} from '../microsoft/graph/follow/microsoft.graph.followRequestBuilder';
import {Microsoft.graph.inviteRequestBuilder} from '../microsoft/graph/invite/microsoft.graph.inviteRequestBuilder';
import {Microsoft.graph.previewRequestBuilder} from '../microsoft/graph/preview/microsoft.graph.previewRequestBuilder';
import {Microsoft.graph.restoreRequestBuilder} from '../microsoft/graph/restore/microsoft.graph.restoreRequestBuilder';
import {Microsoft.graph.unfollowRequestBuilder} from '../microsoft/graph/unfollow/microsoft.graph.unfollowRequestBuilder';
import {Microsoft.graph.validatePermissionRequestBuilder} from '../microsoft/graph/validatePermission/microsoft.graph.validatePermissionRequestBuilder';
import {PermissionRequestBuilder} from '../permissions/item/permissionRequestBuilder';
import {PermissionsRequestBuilder} from '../permissions/permissionsRequestBuilder';
import {SubscriptionRequestBuilder} from '../subscriptions/item/subscriptionRequestBuilder';
import {SubscriptionsRequestBuilder} from '../subscriptions/subscriptionsRequestBuilder';
import {ThumbnailSetRequestBuilder} from '../thumbnails/item/thumbnailSetRequestBuilder';
import {ThumbnailsRequestBuilder} from '../thumbnails/thumbnailsRequestBuilder';
import {DriveItemVersionRequestBuilder} from '../versions/item/driveItemVersionRequestBuilder';
import {VersionsRequestBuilder} from '../versions/versionsRequestBuilder';
import {WorkbookRequestBuilder} from '../workbook/workbookRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}  */
export class DriveItemRequestBuilder {
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get listItem(): ListItemRequestBuilder {
        return new ListItemRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkin(): Microsoft.graph.checkinRequestBuilder {
        return new Microsoft.graph.checkinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkout(): Microsoft.graph.checkoutRequestBuilder {
        return new Microsoft.graph.checkoutRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.copy(): Microsoft.graph.copyRequestBuilder {
        return new Microsoft.graph.copyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.createLink(): Microsoft.graph.createLinkRequestBuilder {
        return new Microsoft.graph.createLinkRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.createUploadSession(): Microsoft.graph.createUploadSessionRequestBuilder {
        return new Microsoft.graph.createUploadSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.follow(): Microsoft.graph.followRequestBuilder {
        return new Microsoft.graph.followRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.invite(): Microsoft.graph.inviteRequestBuilder {
        return new Microsoft.graph.inviteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.preview(): Microsoft.graph.previewRequestBuilder {
        return new Microsoft.graph.previewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.restore(): Microsoft.graph.restoreRequestBuilder {
        return new Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.unfollow(): Microsoft.graph.unfollowRequestBuilder {
        return new Microsoft.graph.unfollowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.validatePermission(): Microsoft.graph.validatePermissionRequestBuilder {
        return new Microsoft.graph.validatePermissionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get thumbnails(): ThumbnailsRequestBuilder {
        return new ThumbnailsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get versions(): VersionsRequestBuilder {
        return new VersionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbook(): WorkbookRequestBuilder {
        return new WorkbookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.workbooks.children collection
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    public childrenById(id: String) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemRequestBuilder(this.currentPath + this.pathSegment + "/children/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new DriveItemRequestBuilder and sets the default values.
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
     * Delete entity from workbooks
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
     * Get entity from workbooks by key
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
     * Update entity in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: DriveItem | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Delete entity from workbooks
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
     * Get entity from workbooks by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DriveItem
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DriveItem | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<DriveItem>(requestInfo, DriveItem, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update entity in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DriveItem | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.permissions collection
     * @param id Unique identifier of the item
     * @returns a PermissionRequestBuilder
     */
    public permissionsById(id: String) : PermissionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PermissionRequestBuilder(this.currentPath + this.pathSegment + "/permissions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.subscriptions collection
     * @param id Unique identifier of the item
     * @returns a SubscriptionRequestBuilder
     */
    public subscriptionsById(id: String) : SubscriptionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SubscriptionRequestBuilder(this.currentPath + this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.thumbnails collection
     * @param id Unique identifier of the item
     * @returns a ThumbnailSetRequestBuilder
     */
    public thumbnailsById(id: String) : ThumbnailSetRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ThumbnailSetRequestBuilder(this.currentPath + this.pathSegment + "/thumbnails/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.versions collection
     * @param id Unique identifier of the item
     * @returns a DriveItemVersionRequestBuilder
     */
    public versionsById(id: String) : DriveItemVersionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemVersionRequestBuilder(this.currentPath + this.pathSegment + "/versions/" + id, this.httpCore, false);
    };
}
