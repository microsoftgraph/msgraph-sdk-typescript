import {Group} from '../../models/microsoft/graph/group';
import {AcceptedSendersRequestBuilder} from './acceptedSenders/acceptedSendersRequestBuilder';
import {AddFavoriteRequestBuilder} from './addFavorite/addFavoriteRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentRequestBuilder';
import {AssignLicenseRequestBuilder} from './assignLicense/assignLicenseRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventRequestBuilder} from './calendarView/item/eventRequestBuilder';
import {CheckGrantedPermissionsForAppRequestBuilder} from './checkGrantedPermissionsForApp/checkGrantedPermissionsForAppRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ConversationsRequestBuilder} from './conversations/conversationsRequestBuilder';
import {ConversationRequestBuilder} from './conversations/item/conversationRequestBuilder';
import {CreatedOnBehalfOfRequestBuilder} from './createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveRequestBuilder} from './drives/item/driveRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventRequestBuilder} from './events/item/eventRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionRequestBuilder} from './extensions/item/extensionRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyRequestBuilder} from './groupLifecyclePolicies/item/groupLifecyclePolicyRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {MembersWithLicenseErrorsRequestBuilder} from './membersWithLicenseErrors/membersWithLicenseErrorsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {ResourceSpecificPermissionGrantRequestBuilder} from './permissionGrants/item/resourceSpecificPermissionGrantRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoRequestBuilder} from './photos/item/profilePhotoRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {RejectedSendersRequestBuilder} from './rejectedSenders/rejectedSendersRequestBuilder';
import {RemoveFavoriteRequestBuilder} from './removeFavorite/removeFavoriteRequestBuilder';
import {RenewRequestBuilder} from './renew/renewRequestBuilder';
import {ResetUnseenCountRequestBuilder} from './resetUnseenCount/resetUnseenCountRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {GroupSettingRequestBuilder} from './settings/item/groupSettingRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {SiteRequestBuilder} from './sites/item/siteRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {SubscribeByMailRequestBuilder} from './subscribeByMail/subscribeByMailRequestBuilder';
import {TeamRequestBuilder} from './team/teamRequestBuilder';
import {ConversationThreadRequestBuilder} from './threads/item/conversationThreadRequestBuilder';
import {ThreadsRequestBuilder} from './threads/threadsRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {TransitiveMembersRequestBuilder} from './transitiveMembers/transitiveMembersRequestBuilder';
import {UnsubscribeByMailRequestBuilder} from './unsubscribeByMail/unsubscribeByMailRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}  */
export class GroupRequestBuilder {
    public get acceptedSenders(): AcceptedSendersRequestBuilder {
        return new AcceptedSendersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get addFavorite(): AddFavoriteRequestBuilder {
        return new AddFavoriteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkGrantedPermissionsForApp(): CheckGrantedPermissionsForAppRequestBuilder {
        return new CheckGrantedPermissionsForAppRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get conversations(): ConversationsRequestBuilder {
        return new ConversationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get membersWithLicenseErrors(): MembersWithLicenseErrorsRequestBuilder {
        return new MembersWithLicenseErrorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get photos(): PhotosRequestBuilder {
        return new PhotosRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get rejectedSenders(): RejectedSendersRequestBuilder {
        return new RejectedSendersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get removeFavorite(): RemoveFavoriteRequestBuilder {
        return new RemoveFavoriteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get renew(): RenewRequestBuilder {
        return new RenewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get resetUnseenCount(): ResetUnseenCountRequestBuilder {
        return new ResetUnseenCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get subscribeByMail(): SubscribeByMailRequestBuilder {
        return new SubscribeByMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get threads(): ThreadsRequestBuilder {
        return new ThreadsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get transitiveMembers(): TransitiveMembersRequestBuilder {
        return new TransitiveMembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get unsubscribeByMail(): UnsubscribeByMailRequestBuilder {
        return new UnsubscribeByMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: String) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public calendarViewById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/calendarView/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new GroupRequestBuilder and sets the default values.
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
     * Gets an item from the graphtypescriptv4.utilities.groups.item.conversations.item collection
     * @param id Unique identifier of the item
     * @returns a conversationRequestBuilder
     */
    public conversationsById(id: String) : ConversationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConversationRequestBuilder(this.currentPath + this.pathSegment + "/conversations/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Group | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Gets an item from the graphtypescriptv4.utilities.groups.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: String) : DriveRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.events.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public eventsById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
     */
    public extensionsById(id: String) : ExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Group>(requestInfo, Group, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.groupLifecyclePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a groupLifecyclePolicyRequestBuilder
     */
    public groupLifecyclePoliciesById(id: String) : GroupLifecyclePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupLifecyclePolicyRequestBuilder(this.currentPath + this.pathSegment + "/groupLifecyclePolicies/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Group | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.permissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a resourceSpecificPermissionGrantRequestBuilder
     */
    public permissionGrantsById(id: String) : ResourceSpecificPermissionGrantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ResourceSpecificPermissionGrantRequestBuilder(this.currentPath + this.pathSegment + "/permissionGrants/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.photos.item collection
     * @param id Unique identifier of the item
     * @returns a profilePhotoRequestBuilder
     */
    public photosById(id: String) : ProfilePhotoRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ProfilePhotoRequestBuilder(this.currentPath + this.pathSegment + "/photos/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.settings.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingRequestBuilder
     */
    public settingsById(id: String) : GroupSettingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupSettingRequestBuilder(this.currentPath + this.pathSegment + "/settings/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteRequestBuilder
     */
    public sitesById(id: String) : SiteRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SiteRequestBuilder(this.currentPath + this.pathSegment + "/sites/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.groups.item.threads.item collection
     * @param id Unique identifier of the item
     * @returns a conversationThreadRequestBuilder
     */
    public threadsById(id: String) : ConversationThreadRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConversationThreadRequestBuilder(this.currentPath + this.pathSegment + "/threads/" + id, this.httpCore, false);
    };
}
