import {Group} from '../../models/';
import {createGroupFromDiscriminatorValue} from '../../models/createGroupFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AcceptedSendersRequestBuilder} from './acceptedSenders/acceptedSendersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i7078dd311b5262a56d3c5e7479b4134b70aa9ffeb3de1030a0917132e0be6ef1} from './acceptedSenders/item/directoryObjectItemRequestBuilder';
import {AddFavoriteRequestBuilder} from './addFavorite/addFavoriteRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {AssignLicenseRequestBuilder} from './assignLicense/assignLicenseRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventItemRequestBuilder as i2b1e0585fb04d85a776edc6c5efe4fe6d3c6110e43bc0f11f69aa25de9608306} from './calendarView/item/eventItemRequestBuilder';
import {CheckGrantedPermissionsForAppRequestBuilder} from './checkGrantedPermissionsForApp/checkGrantedPermissionsForAppRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ConversationsRequestBuilder} from './conversations/conversationsRequestBuilder';
import {ConversationItemRequestBuilder} from './conversations/item/conversationItemRequestBuilder';
import {CreatedOnBehalfOfRequestBuilder} from './createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as ie5d0b561fb23af8afd1816548753fadc6e57552e08b76fc25adbf65d2dbc0529} from './events/item/eventItemRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {GroupItemRequestBuilderDeleteRequestConfiguration} from './groupItemRequestBuilderDeleteRequestConfiguration';
import {GroupItemRequestBuilderGetRequestConfiguration} from './groupItemRequestBuilderGetRequestConfiguration';
import {GroupItemRequestBuilderPatchRequestConfiguration} from './groupItemRequestBuilderPatchRequestConfiguration';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyItemRequestBuilder} from './groupLifecyclePolicies/item/groupLifecyclePolicyItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i50b1d2e7d272dfc74d906e7df71cb641fbaf073faec9b3737cc7963d0b1d1ff6} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as if711933078171881a5a7c3013697ba27e8464b53ef5092fe5cc79fab84112e58} from './members/item/directoryObjectItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as iea01dc6c9d30cc8fe331f232004da183eff62bda12d7ddc2db73acc438f4bf11} from './membersWithLicenseErrors/item/directoryObjectItemRequestBuilder';
import {MembersWithLicenseErrorsRequestBuilder} from './membersWithLicenseErrors/membersWithLicenseErrorsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i00e2f6af68b759b048247b53eb0db77f110c5e4b6819d79f3dbca0bb17d3a9b4} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {ResourceSpecificPermissionGrantItemRequestBuilder} from './permissionGrants/item/resourceSpecificPermissionGrantItemRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './photos/item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i2445613ee9357f9bdf7f816fa1c4dba543e3738d8dfaa1d6c00833aa5c2f2ac2} from './rejectedSenders/item/directoryObjectItemRequestBuilder';
import {RejectedSendersRequestBuilder} from './rejectedSenders/rejectedSendersRequestBuilder';
import {RemoveFavoriteRequestBuilder} from './removeFavorite/removeFavoriteRequestBuilder';
import {RenewRequestBuilder} from './renew/renewRequestBuilder';
import {ResetUnseenCountRequestBuilder} from './resetUnseenCount/resetUnseenCountRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {GroupSettingItemRequestBuilder} from './settings/item/groupSettingItemRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {SiteItemRequestBuilder} from './sites/item/siteItemRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {SubscribeByMailRequestBuilder} from './subscribeByMail/subscribeByMailRequestBuilder';
import {TeamRequestBuilder} from './team/teamRequestBuilder';
import {ConversationThreadItemRequestBuilder} from './threads/item/conversationThreadItemRequestBuilder';
import {ThreadsRequestBuilder} from './threads/threadsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i484a42b65977280664fc7b52ebc191c4fb0a673e25e83d03173a540c9485ddf2} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i69d4124d58845297b36757fd2ca82a87d8b0f6cd7afe1f1f52275124523dd1af} from './transitiveMembers/item/directoryObjectItemRequestBuilder';
import {TransitiveMembersRequestBuilder} from './transitiveMembers/transitiveMembersRequestBuilder';
import {UnsubscribeByMailRequestBuilder} from './unsubscribeByMail/unsubscribeByMailRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of group entities. */
export class GroupItemRequestBuilder {
    /** The acceptedSenders property */
    public get acceptedSenders(): AcceptedSendersRequestBuilder {
        return new AcceptedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The addFavorite property */
    public get addFavorite(): AddFavoriteRequestBuilder {
        return new AddFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The appRoleAssignments property */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The assignLicense property */
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendar property */
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendarView property */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkGrantedPermissionsForApp property */
    public get checkGrantedPermissionsForApp(): CheckGrantedPermissionsForAppRequestBuilder {
        return new CheckGrantedPermissionsForAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberGroups property */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberObjects property */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The conversations property */
    public get conversations(): ConversationsRequestBuilder {
        return new ConversationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The createdOnBehalfOf property */
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The drive property */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The drives property */
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The events property */
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The extensions property */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberGroups property */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberObjects property */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The groupLifecyclePolicies property */
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The memberOf property */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The members property */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The membersWithLicenseErrors property */
    public get membersWithLicenseErrors(): MembersWithLicenseErrorsRequestBuilder {
        return new MembersWithLicenseErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The onenote property */
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The owners property */
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The permissionGrants property */
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The photo property */
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The photos property */
    public get photos(): PhotosRequestBuilder {
        return new PhotosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The planner property */
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The rejectedSenders property */
    public get rejectedSenders(): RejectedSendersRequestBuilder {
        return new RejectedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The removeFavorite property */
    public get removeFavorite(): RemoveFavoriteRequestBuilder {
        return new RemoveFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The renew property */
    public get renew(): RenewRequestBuilder {
        return new RenewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The resetUnseenCount property */
    public get resetUnseenCount(): ResetUnseenCountRequestBuilder {
        return new ResetUnseenCountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The restore property */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The settings property */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sites property */
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The subscribeByMail property */
    public get subscribeByMail(): SubscribeByMailRequestBuilder {
        return new SubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The team property */
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The threads property */
    public get threads(): ThreadsRequestBuilder {
        return new ThreadsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transitiveMemberOf property */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transitiveMembers property */
    public get transitiveMembers(): TransitiveMembersRequestBuilder {
        return new TransitiveMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unsubscribeByMail property */
    public get unsubscribeByMail(): UnsubscribeByMailRequestBuilder {
        return new UnsubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The validateProperties property */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.acceptedSenders.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public acceptedSendersById(id: string) : i7078dd311b5262a56d3c5e7479b4134b70aa9ffeb3de1030a0917132e0be6ef1 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i7078dd311b5262a56d3c5e7479b4134b70aa9ffeb3de1030a0917132e0be6ef1(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : AppRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new AppRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public calendarViewById(id: string) : i2b1e0585fb04d85a776edc6c5efe4fe6d3c6110e43bc0f11f69aa25de9608306 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new i2b1e0585fb04d85a776edc6c5efe4fe6d3c6110e43bc0f11f69aa25de9608306(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.conversations.item collection
     * @param id Unique identifier of the item
     * @returns a ConversationItemRequestBuilder
     */
    public conversationsById(id: string) : ConversationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversation%2Did"] = id
        return new ConversationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they're permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: GroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that are _not_ returned by default, specify them in a `$select` OData query option. The **hasMembersWithLicenseErrors** and **isArchived** properties are an exception and are not returned in the `$select` query.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add a member to a security or Microsoft 365 group through the **members** navigation property. The following table shows the types of members that can be added to either security groups or Microsoft 365 groups.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Group | undefined, requestConfiguration?: GroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Delete group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they're permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: GroupItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.events.item collection
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public eventsById(id: string) : ie5d0b561fb23af8afd1816548753fadc6e57552e08b76fc25adbf65d2dbc0529 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new ie5d0b561fb23af8afd1816548753fadc6e57552e08b76fc25adbf65d2dbc0529(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a ExtensionItemRequestBuilder
     */
    public extensionsById(id: string) : ExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension%2Did"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that are _not_ returned by default, specify them in a `$select` OData query option. The **hasMembersWithLicenseErrors** and **isArchived** properties are an exception and are not returned in the `$select` query.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public get(requestConfiguration?: GroupItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Group>(requestInfo, createGroupFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.groupLifecyclePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a GroupLifecyclePolicyItemRequestBuilder
     */
    public groupLifecyclePoliciesById(id: string) : GroupLifecyclePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy%2Did"] = id
        return new GroupLifecyclePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : i50b1d2e7d272dfc74d906e7df71cb641fbaf073faec9b3737cc7963d0b1d1ff6 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i50b1d2e7d272dfc74d906e7df71cb641fbaf073faec9b3737cc7963d0b1d1ff6(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public membersById(id: string) : if711933078171881a5a7c3013697ba27e8464b53ef5092fe5cc79fab84112e58 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new if711933078171881a5a7c3013697ba27e8464b53ef5092fe5cc79fab84112e58(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.membersWithLicenseErrors.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public membersWithLicenseErrorsById(id: string) : iea01dc6c9d30cc8fe331f232004da183eff62bda12d7ddc2db73acc438f4bf11 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new iea01dc6c9d30cc8fe331f232004da183eff62bda12d7ddc2db73acc438f4bf11(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : i00e2f6af68b759b048247b53eb0db77f110c5e4b6819d79f3dbca0bb17d3a9b4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i00e2f6af68b759b048247b53eb0db77f110c5e4b6819d79f3dbca0bb17d3a9b4(urlTplParams, this.requestAdapter);
    };
    /**
     * Add a member to a security or Microsoft 365 group through the **members** navigation property. The following table shows the types of members that can be added to either security groups or Microsoft 365 groups.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public patch(body: Group | undefined, requestConfiguration?: GroupItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Group>(requestInfo, createGroupFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.permissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a ResourceSpecificPermissionGrantItemRequestBuilder
     */
    public permissionGrantsById(id: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant%2Did"] = id
        return new ResourceSpecificPermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.photos.item collection
     * @param id Unique identifier of the item
     * @returns a ProfilePhotoItemRequestBuilder
     */
    public photosById(id: string) : ProfilePhotoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["profilePhoto%2Did"] = id
        return new ProfilePhotoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.rejectedSenders.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public rejectedSendersById(id: string) : i2445613ee9357f9bdf7f816fa1c4dba543e3738d8dfaa1d6c00833aa5c2f2ac2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i2445613ee9357f9bdf7f816fa1c4dba543e3738d8dfaa1d6c00833aa5c2f2ac2(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.settings.item collection
     * @param id Unique identifier of the item
     * @returns a GroupSettingItemRequestBuilder
     */
    public settingsById(id: string) : GroupSettingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting%2Did"] = id
        return new GroupSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a SiteItemRequestBuilder
     */
    public sitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.threads.item collection
     * @param id Unique identifier of the item
     * @returns a ConversationThreadItemRequestBuilder
     */
    public threadsById(id: string) : ConversationThreadItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationThread%2Did"] = id
        return new ConversationThreadItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : i484a42b65977280664fc7b52ebc191c4fb0a673e25e83d03173a540c9485ddf2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i484a42b65977280664fc7b52ebc191c4fb0a673e25e83d03173a540c9485ddf2(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.transitiveMembers.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMembersById(id: string) : i69d4124d58845297b36757fd2ca82a87d8b0f6cd7afe1f1f52275124523dd1af {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i69d4124d58845297b36757fd2ca82a87d8b0f6cd7afe1f1f52275124523dd1af(urlTplParams, this.requestAdapter);
    };
}
