import {User} from '../invitations/invitedUser/user';
import {ActivitiesRequestBuilder} from './activities/activitiesRequestBuilder';
import {UserActivityRequestBuilder} from './activities/item/userActivityRequestBuilder';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/agreementAcceptancesRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentRequestBuilder';
import {AuthenticationRequestBuilder} from './authentication/authenticationRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarGroupsRequestBuilder} from './calendarGroups/calendarGroupsRequestBuilder';
import {CalendarGroupRequestBuilder} from './calendarGroups/item/calendarGroupRequestBuilder';
import {CalendarsRequestBuilder} from './calendars/calendarsRequestBuilder';
import {CalendarRequestBuilder} from './calendars/item/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventRequestBuilder} from './calendarView/item/eventRequestBuilder';
import {ChatsRequestBuilder} from './chats/chatsRequestBuilder';
import {ChatRequestBuilder} from './chats/item/chatRequestBuilder';
import {ContactFoldersRequestBuilder} from './contactFolders/contactFoldersRequestBuilder';
import {ContactFolderRequestBuilder} from './contactFolders/item/contactFolderRequestBuilder';
import {ContactsRequestBuilder} from './contacts/contactsRequestBuilder';
import {ContactRequestBuilder} from './contacts/item/contactRequestBuilder';
import {CreatedObjectsRequestBuilder} from './createdObjects/createdObjectsRequestBuilder';
import {DeviceManagementTroubleshootingEventsRequestBuilder} from './deviceManagementTroubleshootingEvents/deviceManagementTroubleshootingEventsRequestBuilder';
import {DeviceManagementTroubleshootingEventRequestBuilder} from './deviceManagementTroubleshootingEvents/item/deviceManagementTroubleshootingEventRequestBuilder';
import {DirectReportsRequestBuilder} from './directReports/directReportsRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveRequestBuilder} from './drives/item/driveRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventRequestBuilder} from './events/item/eventRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionRequestBuilder} from './extensions/item/extensionRequestBuilder';
import {FollowedSitesRequestBuilder} from './followedSites/followedSitesRequestBuilder';
import {InferenceClassificationRequestBuilder} from './inferenceClassification/inferenceClassificationRequestBuilder';
import {InsightsRequestBuilder} from './insights/insightsRequestBuilder';
import {TeamRequestBuilder} from './joinedTeams/item/teamRequestBuilder';
import {JoinedTeamsRequestBuilder} from './joinedTeams/joinedTeamsRequestBuilder';
import {LicenseDetailsRequestBuilder} from './licenseDetails/licenseDetailsRequestBuilder';
import {MailFolderRequestBuilder} from './mailFolders/item/mailFolderRequestBuilder';
import {MailFoldersRequestBuilder} from './mailFolders/mailFoldersRequestBuilder';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/managedAppRegistrationsRequestBuilder';
import {ManagedDeviceRequestBuilder} from './managedDevices/item/managedDeviceRequestBuilder';
import {ManagedDevicesRequestBuilder} from './managedDevices/managedDevicesRequestBuilder';
import {ManagerRequestBuilder} from './manager/managerRequestBuilder';
import {Me} from './me';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {MessageRequestBuilder} from './messages/item/messageRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {Microsoft.graph.assignLicenseRequestBuilder} from './microsoft/graph/assignLicense/microsoft.graph.assignLicenseRequestBuilder';
import {Microsoft.graph.changePasswordRequestBuilder} from './microsoft/graph/changePassword/microsoft.graph.changePasswordRequestBuilder';
import {Microsoft.graph.checkMemberGroupsRequestBuilder} from './microsoft/graph/checkMemberGroups/microsoft.graph.checkMemberGroupsRequestBuilder';
import {Microsoft.graph.checkMemberObjectsRequestBuilder} from './microsoft/graph/checkMemberObjects/microsoft.graph.checkMemberObjectsRequestBuilder';
import {Microsoft.graph.exportPersonalDataRequestBuilder} from './microsoft/graph/exportPersonalData/microsoft.graph.exportPersonalDataRequestBuilder';
import {Microsoft.graph.findMeetingTimesRequestBuilder} from './microsoft/graph/findMeetingTimes/microsoft.graph.findMeetingTimesRequestBuilder';
import {Microsoft.graph.getMailTipsRequestBuilder} from './microsoft/graph/getMailTips/microsoft.graph.getMailTipsRequestBuilder';
import {Microsoft.graph.getMemberGroupsRequestBuilder} from './microsoft/graph/getMemberGroups/microsoft.graph.getMemberGroupsRequestBuilder';
import {Microsoft.graph.getMemberObjectsRequestBuilder} from './microsoft/graph/getMemberObjects/microsoft.graph.getMemberObjectsRequestBuilder';
import {Microsoft.graph.removeAllDevicesFromManagementRequestBuilder} from './microsoft/graph/removeAllDevicesFromManagement/microsoft.graph.removeAllDevicesFromManagementRequestBuilder';
import {Microsoft.graph.reprocessLicenseAssignmentRequestBuilder} from './microsoft/graph/reprocessLicenseAssignment/microsoft.graph.reprocessLicenseAssignmentRequestBuilder';
import {Microsoft.graph.restoreRequestBuilder} from './microsoft/graph/restore/microsoft.graph.restoreRequestBuilder';
import {Microsoft.graph.revokeSignInSessionsRequestBuilder} from './microsoft/graph/revokeSignInSessions/microsoft.graph.revokeSignInSessionsRequestBuilder';
import {Microsoft.graph.sendMailRequestBuilder} from './microsoft/graph/sendMail/microsoft.graph.sendMailRequestBuilder';
import {Microsoft.graph.translateExchangeIdsRequestBuilder} from './microsoft/graph/translateExchangeIds/microsoft.graph.translateExchangeIdsRequestBuilder';
import {Microsoft.graph.wipeManagedAppRegistrationsByDeviceTagRequestBuilder} from './microsoft/graph/wipeManagedAppRegistrationsByDeviceTag/microsoft.graph.wipeManagedAppRegistrationsByDeviceTagRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {OnlineMeetingRequestBuilder} from './onlineMeetings/item/onlineMeetingRequestBuilder';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/onlineMeetingsRequestBuilder';
import {OutlookRequestBuilder} from './outlook/outlookRequestBuilder';
import {OwnedDevicesRequestBuilder} from './ownedDevices/ownedDevicesRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {PersonRequestBuilder} from './people/item/personRequestBuilder';
import {PeopleRequestBuilder} from './people/peopleRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoRequestBuilder} from './photos/item/profilePhotoRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {PresenceRequestBuilder} from './presence/presenceRequestBuilder';
import {RegisteredDevicesRequestBuilder} from './registeredDevices/registeredDevicesRequestBuilder';
import {ScopedRoleMembershipRequestBuilder} from './scopedRoleMemberOf/item/scopedRoleMembershipRequestBuilder';
import {ScopedRoleMemberOfRequestBuilder} from './scopedRoleMemberOf/scopedRoleMemberOfRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {TeamworkRequestBuilder} from './teamwork/teamworkRequestBuilder';
import {TodoRequestBuilder} from './todo/todoRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me  */
export class MeRequestBuilder {
    public get activities(): ActivitiesRequestBuilder {
        return new ActivitiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get authentication(): AuthenticationRequestBuilder {
        return new AuthenticationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendarGroups(): CalendarGroupsRequestBuilder {
        return new CalendarGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendars(): CalendarsRequestBuilder {
        return new CalendarsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get contactFolders(): ContactFoldersRequestBuilder {
        return new ContactFoldersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deviceManagementTroubleshootingEvents(): DeviceManagementTroubleshootingEventsRequestBuilder {
        return new DeviceManagementTroubleshootingEventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get directReports(): DirectReportsRequestBuilder {
        return new DirectReportsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
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
    public get followedSites(): FollowedSitesRequestBuilder {
        return new FollowedSitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get inferenceClassification(): InferenceClassificationRequestBuilder {
        return new InferenceClassificationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get insights(): InsightsRequestBuilder {
        return new InsightsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get joinedTeams(): JoinedTeamsRequestBuilder {
        return new JoinedTeamsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get licenseDetails(): LicenseDetailsRequestBuilder {
        return new LicenseDetailsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mailFolders(): MailFoldersRequestBuilder {
        return new MailFoldersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get manager(): ManagerRequestBuilder {
        return new ManagerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.assignLicense(): Microsoft.graph.assignLicenseRequestBuilder {
        return new Microsoft.graph.assignLicenseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.changePassword(): Microsoft.graph.changePasswordRequestBuilder {
        return new Microsoft.graph.changePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberGroups(): Microsoft.graph.checkMemberGroupsRequestBuilder {
        return new Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberObjects(): Microsoft.graph.checkMemberObjectsRequestBuilder {
        return new Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.exportPersonalData(): Microsoft.graph.exportPersonalDataRequestBuilder {
        return new Microsoft.graph.exportPersonalDataRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.findMeetingTimes(): Microsoft.graph.findMeetingTimesRequestBuilder {
        return new Microsoft.graph.findMeetingTimesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMailTips(): Microsoft.graph.getMailTipsRequestBuilder {
        return new Microsoft.graph.getMailTipsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberGroups(): Microsoft.graph.getMemberGroupsRequestBuilder {
        return new Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberObjects(): Microsoft.graph.getMemberObjectsRequestBuilder {
        return new Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.removeAllDevicesFromManagement(): Microsoft.graph.removeAllDevicesFromManagementRequestBuilder {
        return new Microsoft.graph.removeAllDevicesFromManagementRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.reprocessLicenseAssignment(): Microsoft.graph.reprocessLicenseAssignmentRequestBuilder {
        return new Microsoft.graph.reprocessLicenseAssignmentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.restore(): Microsoft.graph.restoreRequestBuilder {
        return new Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.revokeSignInSessions(): Microsoft.graph.revokeSignInSessionsRequestBuilder {
        return new Microsoft.graph.revokeSignInSessionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.sendMail(): Microsoft.graph.sendMailRequestBuilder {
        return new Microsoft.graph.sendMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.translateExchangeIds(): Microsoft.graph.translateExchangeIdsRequestBuilder {
        return new Microsoft.graph.translateExchangeIdsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.wipeManagedAppRegistrationsByDeviceTag(): Microsoft.graph.wipeManagedAppRegistrationsByDeviceTagRequestBuilder {
        return new Microsoft.graph.wipeManagedAppRegistrationsByDeviceTagRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get outlook(): OutlookRequestBuilder {
        return new OutlookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get ownedDevices(): OwnedDevicesRequestBuilder {
        return new OwnedDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get people(): PeopleRequestBuilder {
        return new PeopleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get presence(): PresenceRequestBuilder {
        return new PresenceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get registeredDevices(): RegisteredDevicesRequestBuilder {
        return new RegisteredDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get scopedRoleMemberOf(): ScopedRoleMemberOfRequestBuilder {
        return new ScopedRoleMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get todo(): TodoRequestBuilder {
        return new TodoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.me.activities collection
     * @param id Unique identifier of the item
     * @returns a UserActivityRequestBuilder
     */
    public activitiesById(id: String) : UserActivityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new UserActivityRequestBuilder(this.currentPath + this.pathSegment + "/activities/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: String) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups collection
     * @param id Unique identifier of the item
     * @returns a CalendarGroupRequestBuilder
     */
    public calendarGroupsById(id: String) : CalendarGroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CalendarGroupRequestBuilder(this.currentPath + this.pathSegment + "/calendarGroups/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendars collection
     * @param id Unique identifier of the item
     * @returns a CalendarRequestBuilder
     */
    public calendarsById(id: String) : CalendarRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CalendarRequestBuilder(this.currentPath + this.pathSegment + "/calendars/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendarView collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    public calendarViewById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/calendarView/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.chats collection
     * @param id Unique identifier of the item
     * @returns a ChatRequestBuilder
     */
    public chatsById(id: String) : ChatRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ChatRequestBuilder(this.currentPath + this.pathSegment + "/chats/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new MeRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/me";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Gets an item from the MicrosoftGraph.me.contactFolders collection
     * @param id Unique identifier of the item
     * @returns a ContactFolderRequestBuilder
     */
    public contactFoldersById(id: String) : ContactFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ContactFolderRequestBuilder(this.currentPath + this.pathSegment + "/contactFolders/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.contacts collection
     * @param id Unique identifier of the item
     * @returns a ContactRequestBuilder
     */
    public contactsById(id: String) : ContactRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ContactRequestBuilder(this.currentPath + this.pathSegment + "/contacts/" + id, this.httpCore, false);
    };
    /**
     * Get me
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
     * Update me
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Me | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Gets an item from the MicrosoftGraph.me.deviceManagementTroubleshootingEvents collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementTroubleshootingEventRequestBuilder
     */
    public deviceManagementTroubleshootingEventsById(id: String) : DeviceManagementTroubleshootingEventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceManagementTroubleshootingEventRequestBuilder(this.currentPath + this.pathSegment + "/deviceManagementTroubleshootingEvents/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.drives collection
     * @param id Unique identifier of the item
     * @returns a DriveRequestBuilder
     */
    public drivesById(id: String) : DriveRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.events collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    public eventsById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
     */
    public extensionsById(id: String) : ExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    /**
     * Get me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<User | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<User>(requestInfo, User, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.joinedTeams collection
     * @param id Unique identifier of the item
     * @returns a TeamRequestBuilder
     */
    public joinedTeamsById(id: String) : TeamRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamRequestBuilder(this.currentPath + this.pathSegment + "/joinedTeams/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.licenseDetails collection
     * @param id Unique identifier of the item
     * @returns a LicenseDetailsRequestBuilder
     */
    public licenseDetailsById(id: String) : LicenseDetailsRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new LicenseDetailsRequestBuilder(this.currentPath + this.pathSegment + "/licenseDetails/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.mailFolders collection
     * @param id Unique identifier of the item
     * @returns a MailFolderRequestBuilder
     */
    public mailFoldersById(id: String) : MailFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MailFolderRequestBuilder(this.currentPath + this.pathSegment + "/mailFolders/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.managedDevices collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceRequestBuilder
     */
    public managedDevicesById(id: String) : ManagedDeviceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceRequestBuilder(this.currentPath + this.pathSegment + "/managedDevices/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.messages collection
     * @param id Unique identifier of the item
     * @returns a MessageRequestBuilder
     */
    public messagesById(id: String) : MessageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MessageRequestBuilder(this.currentPath + this.pathSegment + "/messages/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.onlineMeetings collection
     * @param id Unique identifier of the item
     * @returns a OnlineMeetingRequestBuilder
     */
    public onlineMeetingsById(id: String) : OnlineMeetingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new OnlineMeetingRequestBuilder(this.currentPath + this.pathSegment + "/onlineMeetings/" + id, this.httpCore, false);
    };
    /**
     * Update me
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Me | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.people collection
     * @param id Unique identifier of the item
     * @returns a PersonRequestBuilder
     */
    public peopleById(id: String) : PersonRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PersonRequestBuilder(this.currentPath + this.pathSegment + "/people/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.photos collection
     * @param id Unique identifier of the item
     * @returns a ProfilePhotoRequestBuilder
     */
    public photosById(id: String) : ProfilePhotoRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ProfilePhotoRequestBuilder(this.currentPath + this.pathSegment + "/photos/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.scopedRoleMemberOf collection
     * @param id Unique identifier of the item
     * @returns a ScopedRoleMembershipRequestBuilder
     */
    public scopedRoleMemberOfById(id: String) : ScopedRoleMembershipRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ScopedRoleMembershipRequestBuilder(this.currentPath + this.pathSegment + "/scopedRoleMemberOf/" + id, this.httpCore, false);
    };
}
