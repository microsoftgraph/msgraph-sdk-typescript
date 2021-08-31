import {Group} from '../../group';
import {AcceptedSendersRequestBuilder} from '../acceptedSenders/acceptedSendersRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from '../appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentRequestBuilder} from '../appRoleAssignments/item/appRoleAssignmentRequestBuilder';
import {CalendarRequestBuilder} from '../calendar/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from '../calendarView/calendarViewRequestBuilder';
import {EventRequestBuilder} from '../calendarView/item/eventRequestBuilder';
import {ConversationsRequestBuilder} from '../conversations/conversationsRequestBuilder';
import {ConversationRequestBuilder} from '../conversations/item/conversationRequestBuilder';
import {CreatedOnBehalfOfRequestBuilder} from '../createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {DriveRequestBuilder} from '../drive/driveRequestBuilder';
import {DrivesRequestBuilder} from '../drives/drivesRequestBuilder';
import {DriveRequestBuilder} from '../drives/item/driveRequestBuilder';
import {EventsRequestBuilder} from '../events/eventsRequestBuilder';
import {EventRequestBuilder} from '../events/item/eventRequestBuilder';
import {ExtensionsRequestBuilder} from '../extensions/extensionsRequestBuilder';
import {ExtensionRequestBuilder} from '../extensions/item/extensionRequestBuilder';
import {GroupLifecyclePoliciesRequestBuilder} from '../groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyRequestBuilder} from '../groupLifecyclePolicies/item/groupLifecyclePolicyRequestBuilder';
import {MemberOfRequestBuilder} from '../memberOf/memberOfRequestBuilder';
import {MembersRequestBuilder} from '../members/membersRequestBuilder';
import {MembersWithLicenseErrorsRequestBuilder} from '../membersWithLicenseErrors/membersWithLicenseErrorsRequestBuilder';
import {Microsoft.graph.addFavoriteRequestBuilder} from '../microsoft/graph/addFavorite/microsoft.graph.addFavoriteRequestBuilder';
import {Microsoft.graph.assignLicenseRequestBuilder} from '../microsoft/graph/assignLicense/microsoft.graph.assignLicenseRequestBuilder';
import {Microsoft.graph.checkGrantedPermissionsForAppRequestBuilder} from '../microsoft/graph/checkGrantedPermissionsForApp/microsoft.graph.checkGrantedPermissionsForAppRequestBuilder';
import {Microsoft.graph.checkMemberGroupsRequestBuilder} from '../microsoft/graph/checkMemberGroups/microsoft.graph.checkMemberGroupsRequestBuilder';
import {Microsoft.graph.checkMemberObjectsRequestBuilder} from '../microsoft/graph/checkMemberObjects/microsoft.graph.checkMemberObjectsRequestBuilder';
import {Microsoft.graph.getMemberGroupsRequestBuilder} from '../microsoft/graph/getMemberGroups/microsoft.graph.getMemberGroupsRequestBuilder';
import {Microsoft.graph.getMemberObjectsRequestBuilder} from '../microsoft/graph/getMemberObjects/microsoft.graph.getMemberObjectsRequestBuilder';
import {Microsoft.graph.removeFavoriteRequestBuilder} from '../microsoft/graph/removeFavorite/microsoft.graph.removeFavoriteRequestBuilder';
import {Microsoft.graph.renewRequestBuilder} from '../microsoft/graph/renew/microsoft.graph.renewRequestBuilder';
import {Microsoft.graph.resetUnseenCountRequestBuilder} from '../microsoft/graph/resetUnseenCount/microsoft.graph.resetUnseenCountRequestBuilder';
import {Microsoft.graph.restoreRequestBuilder} from '../microsoft/graph/restore/microsoft.graph.restoreRequestBuilder';
import {Microsoft.graph.subscribeByMailRequestBuilder} from '../microsoft/graph/subscribeByMail/microsoft.graph.subscribeByMailRequestBuilder';
import {Microsoft.graph.unsubscribeByMailRequestBuilder} from '../microsoft/graph/unsubscribeByMail/microsoft.graph.unsubscribeByMailRequestBuilder';
import {Microsoft.graph.validatePropertiesRequestBuilder} from '../microsoft/graph/validateProperties/microsoft.graph.validatePropertiesRequestBuilder';
import {OnenoteRequestBuilder} from '../onenote/onenoteRequestBuilder';
import {OwnersRequestBuilder} from '../owners/ownersRequestBuilder';
import {ResourceSpecificPermissionGrantRequestBuilder} from '../permissionGrants/item/resourceSpecificPermissionGrantRequestBuilder';
import {PermissionGrantsRequestBuilder} from '../permissionGrants/permissionGrantsRequestBuilder';
import {PhotoRequestBuilder} from '../photo/photoRequestBuilder';
import {ProfilePhotoRequestBuilder} from '../photos/item/profilePhotoRequestBuilder';
import {PhotosRequestBuilder} from '../photos/photosRequestBuilder';
import {PlannerRequestBuilder} from '../planner/plannerRequestBuilder';
import {RejectedSendersRequestBuilder} from '../rejectedSenders/rejectedSendersRequestBuilder';
import {GroupSettingRequestBuilder} from '../settings/item/groupSettingRequestBuilder';
import {SettingsRequestBuilder} from '../settings/settingsRequestBuilder';
import {SiteRequestBuilder} from '../sites/item/siteRequestBuilder';
import {SitesRequestBuilder} from '../sites/sitesRequestBuilder';
import {TeamRequestBuilder} from '../team/teamRequestBuilder';
import {ConversationThreadRequestBuilder} from '../threads/item/conversationThreadRequestBuilder';
import {ThreadsRequestBuilder} from '../threads/threadsRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from '../transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {TransitiveMembersRequestBuilder} from '../transitiveMembers/transitiveMembersRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}  */
export class GroupRequestBuilder {
    public get acceptedSenders(): AcceptedSendersRequestBuilder {
        return new AcceptedSendersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get microsoft.graph.addFavorite(): Microsoft.graph.addFavoriteRequestBuilder {
        return new Microsoft.graph.addFavoriteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.assignLicense(): Microsoft.graph.assignLicenseRequestBuilder {
        return new Microsoft.graph.assignLicenseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkGrantedPermissionsForApp(): Microsoft.graph.checkGrantedPermissionsForAppRequestBuilder {
        return new Microsoft.graph.checkGrantedPermissionsForAppRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberGroups(): Microsoft.graph.checkMemberGroupsRequestBuilder {
        return new Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberObjects(): Microsoft.graph.checkMemberObjectsRequestBuilder {
        return new Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberGroups(): Microsoft.graph.getMemberGroupsRequestBuilder {
        return new Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberObjects(): Microsoft.graph.getMemberObjectsRequestBuilder {
        return new Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.removeFavorite(): Microsoft.graph.removeFavoriteRequestBuilder {
        return new Microsoft.graph.removeFavoriteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.renew(): Microsoft.graph.renewRequestBuilder {
        return new Microsoft.graph.renewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.resetUnseenCount(): Microsoft.graph.resetUnseenCountRequestBuilder {
        return new Microsoft.graph.resetUnseenCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.restore(): Microsoft.graph.restoreRequestBuilder {
        return new Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.subscribeByMail(): Microsoft.graph.subscribeByMailRequestBuilder {
        return new Microsoft.graph.subscribeByMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.unsubscribeByMail(): Microsoft.graph.unsubscribeByMailRequestBuilder {
        return new Microsoft.graph.unsubscribeByMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.validateProperties(): Microsoft.graph.validatePropertiesRequestBuilder {
        return new Microsoft.graph.validatePropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    /**
     * Gets an item from the MicrosoftGraph.groups.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: String) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
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
     * Gets an item from the MicrosoftGraph.groups.conversations collection
     * @param id Unique identifier of the item
     * @returns a ConversationRequestBuilder
     */
    public conversationsById(id: String) : ConversationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConversationRequestBuilder(this.currentPath + this.pathSegment + "/conversations/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Group | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Gets an item from the MicrosoftGraph.groups.drives collection
     * @param id Unique identifier of the item
     * @returns a DriveRequestBuilder
     */
    public drivesById(id: String) : DriveRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.events collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    public eventsById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
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
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Group>(requestInfo, Group, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.groupLifecyclePolicies collection
     * @param id Unique identifier of the item
     * @returns a GroupLifecyclePolicyRequestBuilder
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
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.permissionGrants collection
     * @param id Unique identifier of the item
     * @returns a ResourceSpecificPermissionGrantRequestBuilder
     */
    public permissionGrantsById(id: String) : ResourceSpecificPermissionGrantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ResourceSpecificPermissionGrantRequestBuilder(this.currentPath + this.pathSegment + "/permissionGrants/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.photos collection
     * @param id Unique identifier of the item
     * @returns a ProfilePhotoRequestBuilder
     */
    public photosById(id: String) : ProfilePhotoRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ProfilePhotoRequestBuilder(this.currentPath + this.pathSegment + "/photos/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.settings collection
     * @param id Unique identifier of the item
     * @returns a GroupSettingRequestBuilder
     */
    public settingsById(id: String) : GroupSettingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new GroupSettingRequestBuilder(this.currentPath + this.pathSegment + "/settings/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.sites collection
     * @param id Unique identifier of the item
     * @returns a SiteRequestBuilder
     */
    public sitesById(id: String) : SiteRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SiteRequestBuilder(this.currentPath + this.pathSegment + "/sites/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.threads collection
     * @param id Unique identifier of the item
     * @returns a ConversationThreadRequestBuilder
     */
    public threadsById(id: String) : ConversationThreadRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConversationThreadRequestBuilder(this.currentPath + this.pathSegment + "/threads/" + id, this.httpCore, false);
    };
}
