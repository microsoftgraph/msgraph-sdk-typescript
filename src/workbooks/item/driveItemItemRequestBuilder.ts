import {DriveItem} from '../../models/microsoft/graph/driveItem';
import {AnalyticsRequestBuilder} from './analytics/analyticsRequestBuilder';
import {CheckinRequestBuilder} from './checkin/checkinRequestBuilder';
import {CheckoutRequestBuilder} from './checkout/checkoutRequestBuilder';
import {ChildrenRequestBuilder} from './children/childrenRequestBuilder';
import {ContentRequestBuilder} from './content/contentRequestBuilder';
import {CopyRequestBuilder} from './copy/copyRequestBuilder';
import {CreateLinkRequestBuilder} from './createLink/createLinkRequestBuilder';
import {CreateUploadSessionRequestBuilder} from './createUploadSession/createUploadSessionRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {DeltaWithTokenRequestBuilder} from './deltaWithToken/deltaWithTokenRequestBuilder';
import {FollowRequestBuilder} from './follow/followRequestBuilder';
import {GetActivitiesByIntervalRequestBuilder} from './getActivitiesByInterval/getActivitiesByIntervalRequestBuilder';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval/getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder';
import {InviteRequestBuilder} from './invite/inviteRequestBuilder';
import {ListItemRequestBuilder} from './listItem/listItemRequestBuilder';
import {PermissionItemRequestBuilder} from './permissions/item/permissionItemRequestBuilder';
import {PermissionsRequestBuilder} from './permissions/permissionsRequestBuilder';
import {PreviewRequestBuilder} from './preview/previewRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {SearchWithQRequestBuilder} from './searchWithQ/searchWithQRequestBuilder';
import {SubscriptionItemRequestBuilder} from './subscriptions/item/subscriptionItemRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {ThumbnailSetItemRequestBuilder} from './thumbnails/item/thumbnailSetItemRequestBuilder';
import {ThumbnailsRequestBuilder} from './thumbnails/thumbnailsRequestBuilder';
import {UnfollowRequestBuilder} from './unfollow/unfollowRequestBuilder';
import {ValidatePermissionRequestBuilder} from './validatePermission/validatePermissionRequestBuilder';
import {DriveItemVersionItemRequestBuilder} from './versions/item/driveItemVersionItemRequestBuilder';
import {VersionsRequestBuilder} from './versions/versionsRequestBuilder';
import {WorkbookRequestBuilder} from './workbook/workbookRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}  */
export class DriveItemItemRequestBuilder {
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkin(): CheckinRequestBuilder {
        return new CheckinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkout(): CheckoutRequestBuilder {
        return new CheckoutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get copy(): CopyRequestBuilder {
        return new CopyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createLink(): CreateLinkRequestBuilder {
        return new CreateLinkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createUploadSession(): CreateUploadSessionRequestBuilder {
        return new CreateUploadSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get follow(): FollowRequestBuilder {
        return new FollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get invite(): InviteRequestBuilder {
        return new InviteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get listItem(): ListItemRequestBuilder {
        return new ListItemRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get preview(): PreviewRequestBuilder {
        return new PreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get thumbnails(): ThumbnailsRequestBuilder {
        return new ThumbnailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unfollow(): UnfollowRequestBuilder {
        return new UnfollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get validatePermission(): ValidatePermissionRequestBuilder {
        return new ValidatePermissionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get versions(): VersionsRequestBuilder {
        return new VersionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbook(): WorkbookRequestBuilder {
        return new WorkbookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DriveItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from workbooks
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get entity from workbooks by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update entity in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DriveItem | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete entity from workbooks
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.delta()
     * @returns a deltaRequestBuilder
     */
    public delta() : DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.delta(token='{token}')
     * @param token Usage: token={token}
     * @returns a deltaWithTokenRequestBuilder
     */
    public deltaWithToken(token: string | undefined) : DeltaWithTokenRequestBuilder {
        if(!token) throw new Error("token cannot be undefined");
        return new DeltaWithTokenRequestBuilder(this.pathParameters, this.requestAdapter, token);
    };
    /**
     * Get entity from workbooks by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DriveItem
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DriveItem | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<DriveItem>(requestInfo, DriveItem, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.getActivitiesByInterval()
     * @returns a getActivitiesByIntervalRequestBuilder
     */
    public getActivitiesByInterval() : GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param interval Usage: interval={interval}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
    public getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(startDateTime: string | undefined, endDateTime: string | undefined, interval: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!interval) throw new Error("interval cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder(this.pathParameters, this.requestAdapter, startDateTime, endDateTime, interval);
    };
    /**
     * Update entity in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DriveItem | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.permissions.item collection
     * @param id Unique identifier of the item
     * @returns a permissionItemRequestBuilder
     */
    public permissionsById(id: string) : PermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission_id"] = id
        return new PermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/microsoft.graph.search(q='{q}')
     * @param q Usage: q={q}
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.pathParameters, this.requestAdapter, q);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a subscriptionItemRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription_id"] = id
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.thumbnails.item collection
     * @param id Unique identifier of the item
     * @returns a thumbnailSetItemRequestBuilder
     */
    public thumbnailsById(id: string) : ThumbnailSetItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["thumbnailSet_id"] = id
        return new ThumbnailSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.versions.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemVersionItemRequestBuilder
     */
    public versionsById(id: string) : DriveItemVersionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItemVersion_id"] = id
        return new DriveItemVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
