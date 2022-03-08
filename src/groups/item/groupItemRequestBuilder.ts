import {createGroupFromDiscriminatorValue} from '../../models/microsoft/graph/createGroupFromDiscriminatorValue';
import {Group} from '../../models/microsoft/graph/group';
import {createODataErrorFromDiscriminatorValue} from '../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ODataError} from '../../models/microsoft/graph/oDataErrors/oDataError';
import {AcceptedSendersRequestBuilder} from './acceptedSenders/acceptedSendersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i2d2291fa1472e06653091837ff4c99f773a20578529c8484145f25f3f99fa62d} from './acceptedSenders/item/directoryObjectItemRequestBuilder';
import {AddFavoriteRequestBuilder} from './addFavorite/addFavoriteRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {AssignLicenseRequestBuilder} from './assignLicense/assignLicenseRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventItemRequestBuilder as ic81e3fb81c60b007708708dc63032c19cab3ea8bcb0c173d143f627e74d5f795} from './calendarView/item/eventItemRequestBuilder';
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
import {EventItemRequestBuilder as ic332bea5dacfbb195207b8d9df65c9c72465a00d316daf7f09d4ce7f76366ef3} from './events/item/eventItemRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyItemRequestBuilder} from './groupLifecyclePolicies/item/groupLifecyclePolicyItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i9e38ae949436d072a9f7fc1785bf9bf05fccf7dfa8c73ee8ac79966c36d19510} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as id89adff530affa64ac89efb08fe2c868731227b159b4f8e655232b913b619492} from './members/item/directoryObjectItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i6a898678a095191d7fdc99dbbc4e703f571fca1f8153fbc048f3356542279b97} from './membersWithLicenseErrors/item/directoryObjectItemRequestBuilder';
import {MembersWithLicenseErrorsRequestBuilder} from './membersWithLicenseErrors/membersWithLicenseErrorsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i068a4645e53dd8ebc8e7025a71b39fe15b815ee1dd7818eba367d792e25da077} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {ResourceSpecificPermissionGrantItemRequestBuilder} from './permissionGrants/item/resourceSpecificPermissionGrantItemRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './photos/item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i1d520d329beb2bfb2a59aef316e596a4c38c1f35e2e9a6ec4b8238f25888e6bd} from './rejectedSenders/item/directoryObjectItemRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as ia91115a5c48764d661fd5932145079299501a963f3810454d90fe7d9fdb7cc40} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i00c0dcaf5f0aa8b9700ceaeecc2864c2d2a9f2acec7295833c9ae0304082b438} from './transitiveMembers/item/directoryObjectItemRequestBuilder';
import {TransitiveMembersRequestBuilder} from './transitiveMembers/transitiveMembersRequestBuilder';
import {UnsubscribeByMailRequestBuilder} from './unsubscribeByMail/unsubscribeByMailRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of group entities.  */
export class GroupItemRequestBuilder {
    public get acceptedSenders(): AcceptedSendersRequestBuilder {
        return new AcceptedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get addFavorite(): AddFavoriteRequestBuilder {
        return new AddFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkGrantedPermissionsForApp(): CheckGrantedPermissionsForAppRequestBuilder {
        return new CheckGrantedPermissionsForAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get conversations(): ConversationsRequestBuilder {
        return new ConversationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get membersWithLicenseErrors(): MembersWithLicenseErrorsRequestBuilder {
        return new MembersWithLicenseErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get photos(): PhotosRequestBuilder {
        return new PhotosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rejectedSenders(): RejectedSendersRequestBuilder {
        return new RejectedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get removeFavorite(): RemoveFavoriteRequestBuilder {
        return new RemoveFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get renew(): RenewRequestBuilder {
        return new RenewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get resetUnseenCount(): ResetUnseenCountRequestBuilder {
        return new ResetUnseenCountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscribeByMail(): SubscribeByMailRequestBuilder {
        return new SubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get threads(): ThreadsRequestBuilder {
        return new ThreadsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transitiveMembers(): TransitiveMembersRequestBuilder {
        return new TransitiveMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unsubscribeByMail(): UnsubscribeByMailRequestBuilder {
        return new UnsubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.acceptedSenders.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public acceptedSendersById(id: string) : i2d2291fa1472e06653091837ff4c99f773a20578529c8484145f25f3f99fa62d {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new i2d2291fa1472e06653091837ff4c99f773a20578529c8484145f25f3f99fa62d(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : AppRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment_id"] = id
        return new AppRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a eventItemRequestBuilder
     */
    public calendarViewById(id: string) : ic81e3fb81c60b007708708dc63032c19cab3ea8bcb0c173d143f627e74d5f795 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new ic81e3fb81c60b007708708dc63032c19cab3ea8bcb0c173d143f627e74d5f795(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.conversations.item collection
     * @param id Unique identifier of the item
     * @returns a conversationItemRequestBuilder
     */
    public conversationsById(id: string) : ConversationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversation_id"] = id
        return new ConversationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete entity from groups
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
     * Get entity from groups by key
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
     * Update entity in groups
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Group | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
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
     * Delete entity from groups
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
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
     * @returns a driveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive_id"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.events.item collection
     * @param id Unique identifier of the item
     * @returns a eventItemRequestBuilder
     */
    public eventsById(id: string) : ic332bea5dacfbb195207b8d9df65c9c72465a00d316daf7f09d4ce7f76366ef3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new ic332bea5dacfbb195207b8d9df65c9c72465a00d316daf7f09d4ce7f76366ef3(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionItemRequestBuilder
     */
    public extensionsById(id: string) : ExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension_id"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from groups by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
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
     * @returns a groupLifecyclePolicyItemRequestBuilder
     */
    public groupLifecyclePoliciesById(id: string) : GroupLifecyclePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy_id"] = id
        return new GroupLifecyclePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : i9e38ae949436d072a9f7fc1785bf9bf05fccf7dfa8c73ee8ac79966c36d19510 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new i9e38ae949436d072a9f7fc1785bf9bf05fccf7dfa8c73ee8ac79966c36d19510(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public membersById(id: string) : id89adff530affa64ac89efb08fe2c868731227b159b4f8e655232b913b619492 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new id89adff530affa64ac89efb08fe2c868731227b159b4f8e655232b913b619492(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.membersWithLicenseErrors.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public membersWithLicenseErrorsById(id: string) : i6a898678a095191d7fdc99dbbc4e703f571fca1f8153fbc048f3356542279b97 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new i6a898678a095191d7fdc99dbbc4e703f571fca1f8153fbc048f3356542279b97(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : i068a4645e53dd8ebc8e7025a71b39fe15b815ee1dd7818eba367d792e25da077 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new i068a4645e53dd8ebc8e7025a71b39fe15b815ee1dd7818eba367d792e25da077(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in groups
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Group | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.permissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a resourceSpecificPermissionGrantItemRequestBuilder
     */
    public permissionGrantsById(id: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant_id"] = id
        return new ResourceSpecificPermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.photos.item collection
     * @param id Unique identifier of the item
     * @returns a profilePhotoItemRequestBuilder
     */
    public photosById(id: string) : ProfilePhotoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["profilePhoto_id"] = id
        return new ProfilePhotoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.rejectedSenders.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public rejectedSendersById(id: string) : i1d520d329beb2bfb2a59aef316e596a4c38c1f35e2e9a6ec4b8238f25888e6bd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new i1d520d329beb2bfb2a59aef316e596a4c38c1f35e2e9a6ec4b8238f25888e6bd(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.settings.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingItemRequestBuilder
     */
    public settingsById(id: string) : GroupSettingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting_id"] = id
        return new GroupSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteItemRequestBuilder
     */
    public sitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site_id"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.threads.item collection
     * @param id Unique identifier of the item
     * @returns a conversationThreadItemRequestBuilder
     */
    public threadsById(id: string) : ConversationThreadItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationThread_id"] = id
        return new ConversationThreadItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : ia91115a5c48764d661fd5932145079299501a963f3810454d90fe7d9fdb7cc40 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new ia91115a5c48764d661fd5932145079299501a963f3810454d90fe7d9fdb7cc40(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.groups.item.transitiveMembers.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public transitiveMembersById(id: string) : i00c0dcaf5f0aa8b9700ceaeecc2864c2d2a9f2acec7295833c9ae0304082b438 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new i00c0dcaf5f0aa8b9700ceaeecc2864c2d2a9f2acec7295833c9ae0304082b438(urlTplParams, this.requestAdapter);
    };
}
