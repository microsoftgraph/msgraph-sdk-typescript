import {DriveItem} from '../../driveItem';
import {AnalyticsRequestBuilder} from '../analytics/analyticsRequestBuilder';
import {CheckinRequestBuilder} from '../checkin/checkinRequestBuilder';
import {CheckoutRequestBuilder} from '../checkout/checkoutRequestBuilder';
import {ChildrenRequestBuilder} from '../children/childrenRequestBuilder';
import {ContentRequestBuilder} from '../content/contentRequestBuilder';
import {CopyRequestBuilder} from '../copy/copyRequestBuilder';
import {CreateLinkRequestBuilder} from '../createLink/createLinkRequestBuilder';
import {CreateUploadSessionRequestBuilder} from '../createUploadSession/createUploadSessionRequestBuilder';
import {FollowRequestBuilder} from '../follow/followRequestBuilder';
import {InviteRequestBuilder} from '../invite/inviteRequestBuilder';
import {ListItemRequestBuilder} from '../listItem/listItemRequestBuilder';
import {PermissionRequestBuilder} from '../permissions/item/permissionRequestBuilder';
import {PermissionsRequestBuilder} from '../permissions/permissionsRequestBuilder';
import {PreviewRequestBuilder} from '../preview/previewRequestBuilder';
import {RestoreRequestBuilder} from '../restore/restoreRequestBuilder';
import {SubscriptionRequestBuilder} from '../subscriptions/item/subscriptionRequestBuilder';
import {SubscriptionsRequestBuilder} from '../subscriptions/subscriptionsRequestBuilder';
import {ThumbnailSetRequestBuilder} from '../thumbnails/item/thumbnailSetRequestBuilder';
import {ThumbnailsRequestBuilder} from '../thumbnails/thumbnailsRequestBuilder';
import {UnfollowRequestBuilder} from '../unfollow/unfollowRequestBuilder';
import {ValidatePermissionRequestBuilder} from '../validatePermission/validatePermissionRequestBuilder';
import {DriveItemVersionRequestBuilder} from '../versions/item/driveItemVersionRequestBuilder';
import {VersionsRequestBuilder} from '../versions/versionsRequestBuilder';
import {WorkbookRequestBuilder} from '../workbook/workbookRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}  */
export class DriveItemRequestBuilder {
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkin(): CheckinRequestBuilder {
        return new CheckinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkout(): CheckoutRequestBuilder {
        return new CheckoutRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get copy(): CopyRequestBuilder {
        return new CopyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get createLink(): CreateLinkRequestBuilder {
        return new CreateLinkRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get createUploadSession(): CreateUploadSessionRequestBuilder {
        return new CreateUploadSessionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get follow(): FollowRequestBuilder {
        return new FollowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get invite(): InviteRequestBuilder {
        return new InviteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get listItem(): ListItemRequestBuilder {
        return new ListItemRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get preview(): PreviewRequestBuilder {
        return new PreviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get thumbnails(): ThumbnailsRequestBuilder {
        return new ThumbnailsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get unfollow(): UnfollowRequestBuilder {
        return new UnfollowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get validatePermission(): ValidatePermissionRequestBuilder {
        return new ValidatePermissionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get versions(): VersionsRequestBuilder {
        return new VersionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbook(): WorkbookRequestBuilder {
        return new WorkbookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.children collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
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
     * Get entity from workbooks by key
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
     * Update entity in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DriveItem | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Delete entity from workbooks
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
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.delta()
     * @returns a deltaRequestBuilder
     */
    public delta() : DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<DriveItem>(requestInfo, DriveItem, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.getActivitiesByInterval()
     * @returns a getActivitiesByIntervalRequestBuilder
     */
    public getActivitiesByInterval() : GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.permissions collection
     * @param id Unique identifier of the item
     * @returns a permissionRequestBuilder
     */
    public permissionsById(id: String) : PermissionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PermissionRequestBuilder(this.currentPath + this.pathSegment + "/permissions/" + id, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.search(q='{q}')
     * @param q Usage: q={q}
     * @returns a searchRequestBuilder
     */
    public search(q: string | undefined) : SearchRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, q);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.subscriptions collection
     * @param id Unique identifier of the item
     * @returns a subscriptionRequestBuilder
     */
    public subscriptionsById(id: String) : SubscriptionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SubscriptionRequestBuilder(this.currentPath + this.pathSegment + "/subscriptions/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.thumbnails collection
     * @param id Unique identifier of the item
     * @returns a thumbnailSetRequestBuilder
     */
    public thumbnailsById(id: String) : ThumbnailSetRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ThumbnailSetRequestBuilder(this.currentPath + this.pathSegment + "/thumbnails/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.workbooks.versions collection
     * @param id Unique identifier of the item
     * @returns a driveItemVersionRequestBuilder
     */
    public versionsById(id: String) : DriveItemVersionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveItemVersionRequestBuilder(this.currentPath + this.pathSegment + "/versions/" + id, this.httpCore, false);
    };
}
