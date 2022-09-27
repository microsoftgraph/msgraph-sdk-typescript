import {DriveItem} from '../../models/';
import {createDriveItemFromDiscriminatorValue} from '../../models/createDriveItemFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AnalyticsRequestBuilder} from './analytics/analyticsRequestBuilder';
import {CheckinRequestBuilder} from './checkin/checkinRequestBuilder';
import {CheckoutRequestBuilder} from './checkout/checkoutRequestBuilder';
import {ChildrenRequestBuilder} from './children/childrenRequestBuilder';
import {DriveItemItemRequestBuilder as i308720e4fdf76a1096def7d8b2e91da8ac89d52550ba1f1b9b3f131357fb3f9a} from './children/item/driveItemItemRequestBuilder';
import {ContentRequestBuilder} from './content/contentRequestBuilder';
import {CopyRequestBuilder} from './copy/copyRequestBuilder';
import {CreateLinkRequestBuilder} from './createLink/createLinkRequestBuilder';
import {CreateUploadSessionRequestBuilder} from './createUploadSession/createUploadSessionRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {DeltaWithTokenRequestBuilder} from './deltaWithToken/deltaWithTokenRequestBuilder';
import {DriveItemItemRequestBuilderDeleteRequestConfiguration} from './driveItemItemRequestBuilderDeleteRequestConfiguration';
import {DriveItemItemRequestBuilderGetRequestConfiguration} from './driveItemItemRequestBuilderGetRequestConfiguration';
import {DriveItemItemRequestBuilderPatchRequestConfiguration} from './driveItemItemRequestBuilderPatchRequestConfiguration';
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
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of driveItem entities. */
export class DriveItemItemRequestBuilder {
    /** The analytics property */
    public get analytics(): AnalyticsRequestBuilder {
        return new AnalyticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkin property */
    public get checkin(): CheckinRequestBuilder {
        return new CheckinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkout property */
    public get checkout(): CheckoutRequestBuilder {
        return new CheckoutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The children property */
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The content property */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The copy property */
    public get copy(): CopyRequestBuilder {
        return new CopyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The createLink property */
    public get createLink(): CreateLinkRequestBuilder {
        return new CreateLinkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The createUploadSession property */
    public get createUploadSession(): CreateUploadSessionRequestBuilder {
        return new CreateUploadSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The follow property */
    public get follow(): FollowRequestBuilder {
        return new FollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The invite property */
    public get invite(): InviteRequestBuilder {
        return new InviteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The listItem property */
    public get listItem(): ListItemRequestBuilder {
        return new ListItemRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The permissions property */
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The preview property */
    public get preview(): PreviewRequestBuilder {
        return new PreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The restore property */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The subscriptions property */
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The thumbnails property */
    public get thumbnails(): ThumbnailsRequestBuilder {
        return new ThumbnailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unfollow property */
    public get unfollow(): UnfollowRequestBuilder {
        return new UnfollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The validatePermission property */
    public get validatePermission(): ValidatePermissionRequestBuilder {
        return new ValidatePermissionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The versions property */
    public get versions(): VersionsRequestBuilder {
        return new VersionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.children.item collection
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public childrenById(id: string) : i308720e4fdf76a1096def7d8b2e91da8ac89d52550ba1f1b9b3f131357fb3f9a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did1"] = id
        return new i308720e4fdf76a1096def7d8b2e91da8ac89d52550ba1f1b9b3f131357fb3f9a(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DriveItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from workbooks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DriveItemItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get entity from workbooks by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DriveItemItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update entity in workbooks
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DriveItem | undefined, requestConfiguration?: DriveItemItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete entity from workbooks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DriveItemItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the delta method.
     * @returns a deltaRequestBuilder
     */
    public delta() : DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the delta method.
     * @param token Usage: token='{token}'
     * @returns a deltaWithTokenRequestBuilder
     */
    public deltaWithToken(token: string | undefined) : DeltaWithTokenRequestBuilder {
        if(!token) throw new Error("token cannot be undefined");
        return new DeltaWithTokenRequestBuilder(this.pathParameters, this.requestAdapter, token);
    };
    /**
     * Get entity from workbooks by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DriveItem
     */
    public get(requestConfiguration?: DriveItemItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DriveItem | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DriveItem>(requestInfo, createDriveItemFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @returns a getActivitiesByIntervalRequestBuilder
     */
    public getActivitiesByInterval() : GetActivitiesByIntervalRequestBuilder {
        return new GetActivitiesByIntervalRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the getActivitiesByInterval method.
     * @param endDateTime Usage: endDateTime='{endDateTime}'
     * @param interval Usage: interval='{interval}'
     * @param startDateTime Usage: startDateTime='{startDateTime}'
     * @returns a getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder
     */
    public getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithInterval(endDateTime: string | undefined, interval: string | undefined, startDateTime: string | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!interval) throw new Error("interval cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, interval, startDateTime);
    };
    /**
     * Update entity in workbooks
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DriveItem
     */
    public patch(body: DriveItem | undefined, requestConfiguration?: DriveItemItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DriveItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DriveItem>(requestInfo, createDriveItemFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.permissions.item collection
     * @param id Unique identifier of the item
     * @returns a PermissionItemRequestBuilder
     */
    public permissionsById(id: string) : PermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission%2Did"] = id
        return new PermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to call the search method.
     * @param q Usage: q='{q}'
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.pathParameters, this.requestAdapter, q);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a SubscriptionItemRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription%2Did"] = id
        return new SubscriptionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.thumbnails.item collection
     * @param id Unique identifier of the item
     * @returns a ThumbnailSetItemRequestBuilder
     */
    public thumbnailsById(id: string) : ThumbnailSetItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["thumbnailSet%2Did"] = id
        return new ThumbnailSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.workbooks.item.versions.item collection
     * @param id Unique identifier of the item
     * @returns a DriveItemVersionItemRequestBuilder
     */
    public versionsById(id: string) : DriveItemVersionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItemVersion%2Did"] = id
        return new DriveItemVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
