import {User} from '../user';
import {ActivitiesRequestBuilder} from './activities/activitiesRequestBuilder';
import {UserActivityRequestBuilder} from './activities/item/userActivityRequestBuilder';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/agreementAcceptancesRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentRequestBuilder';
import {AssignLicenseRequestBuilder} from './assignLicense/assignLicenseRequestBuilder';
import {AuthenticationRequestBuilder} from './authentication/authenticationRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarGroupsRequestBuilder} from './calendarGroups/calendarGroupsRequestBuilder';
import {CalendarGroupRequestBuilder} from './calendarGroups/item/calendarGroupRequestBuilder';
import {CalendarsRequestBuilder} from './calendars/calendarsRequestBuilder';
import {CalendarRequestBuilder} from './calendars/item/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventRequestBuilder} from './calendarView/item/eventRequestBuilder';
import {ChangePasswordRequestBuilder} from './changePassword/changePasswordRequestBuilder';
import {ChatsRequestBuilder} from './chats/chatsRequestBuilder';
import {ChatRequestBuilder} from './chats/item/chatRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
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
import {ExportPersonalDataRequestBuilder} from './exportPersonalData/exportPersonalDataRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionRequestBuilder} from './extensions/item/extensionRequestBuilder';
import {FindMeetingTimesRequestBuilder} from './findMeetingTimes/findMeetingTimesRequestBuilder';
import {FollowedSitesRequestBuilder} from './followedSites/followedSitesRequestBuilder';
import {GetMailTipsRequestBuilder} from './getMailTips/getMailTipsRequestBuilder';
import {GetManagedAppDiagnosticStatusesRequestBuilder} from './getManagedAppDiagnosticStatuses/getManagedAppDiagnosticStatusesRequestBuilder';
import {GetManagedAppPoliciesRequestBuilder} from './getManagedAppPolicies/getManagedAppPoliciesRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
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
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {MessageRequestBuilder} from './messages/item/messageRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
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
import {ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder} from './reminderViewWithStartDateTimeWithEndDateTime/reminderViewWithStartDateTimeWithEndDateTimeRequestBuilder';
import {RemoveAllDevicesFromManagementRequestBuilder} from './removeAllDevicesFromManagement/removeAllDevicesFromManagementRequestBuilder';
import {ReprocessLicenseAssignmentRequestBuilder} from './reprocessLicenseAssignment/reprocessLicenseAssignmentRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {RevokeSignInSessionsRequestBuilder} from './revokeSignInSessions/revokeSignInSessionsRequestBuilder';
import {ScopedRoleMembershipRequestBuilder} from './scopedRoleMemberOf/item/scopedRoleMembershipRequestBuilder';
import {ScopedRoleMemberOfRequestBuilder} from './scopedRoleMemberOf/scopedRoleMemberOfRequestBuilder';
import {SendMailRequestBuilder} from './sendMail/sendMailRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {TeamworkRequestBuilder} from './teamwork/teamworkRequestBuilder';
import {TodoRequestBuilder} from './todo/todoRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {TranslateExchangeIdsRequestBuilder} from './translateExchangeIds/translateExchangeIdsRequestBuilder';
import {WipeManagedAppRegistrationsByDeviceTagRequestBuilder} from './wipeManagedAppRegistrationsByDeviceTag/wipeManagedAppRegistrationsByDeviceTagRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

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
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get changePassword(): ChangePasswordRequestBuilder {
        return new ChangePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get exportPersonalData(): ExportPersonalDataRequestBuilder {
        return new ExportPersonalDataRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get findMeetingTimes(): FindMeetingTimesRequestBuilder {
        return new FindMeetingTimesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get followedSites(): FollowedSitesRequestBuilder {
        return new FollowedSitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMailTips(): GetMailTipsRequestBuilder {
        return new GetMailTipsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get removeAllDevicesFromManagement(): RemoveAllDevicesFromManagementRequestBuilder {
        return new RemoveAllDevicesFromManagementRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get reprocessLicenseAssignment(): ReprocessLicenseAssignmentRequestBuilder {
        return new ReprocessLicenseAssignmentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get revokeSignInSessions(): RevokeSignInSessionsRequestBuilder {
        return new RevokeSignInSessionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get scopedRoleMemberOf(): ScopedRoleMemberOfRequestBuilder {
        return new ScopedRoleMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get sendMail(): SendMailRequestBuilder {
        return new SendMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get translateExchangeIds(): TranslateExchangeIdsRequestBuilder {
        return new TranslateExchangeIdsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get wipeManagedAppRegistrationsByDeviceTag(): WipeManagedAppRegistrationsByDeviceTagRequestBuilder {
        return new WipeManagedAppRegistrationsByDeviceTagRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.activities collection
     * @param id Unique identifier of the item
     * @returns a userActivityRequestBuilder
     */
    public activitiesById(id: String) : UserActivityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new UserActivityRequestBuilder(this.currentPath + this.pathSegment + "/activities/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: String) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.calendarGroups collection
     * @param id Unique identifier of the item
     * @returns a calendarGroupRequestBuilder
     */
    public calendarGroupsById(id: String) : CalendarGroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CalendarGroupRequestBuilder(this.currentPath + this.pathSegment + "/calendarGroups/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.calendars collection
     * @param id Unique identifier of the item
     * @returns a calendarRequestBuilder
     */
    public calendarsById(id: String) : CalendarRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new CalendarRequestBuilder(this.currentPath + this.pathSegment + "/calendars/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.calendarView collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public calendarViewById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/calendarView/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.chats collection
     * @param id Unique identifier of the item
     * @returns a chatRequestBuilder
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
     * Gets an item from the graphtypescriptv4.utilities.me.contactFolders collection
     * @param id Unique identifier of the item
     * @returns a contactFolderRequestBuilder
     */
    public contactFoldersById(id: String) : ContactFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ContactFolderRequestBuilder(this.currentPath + this.pathSegment + "/contactFolders/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.contacts collection
     * @param id Unique identifier of the item
     * @returns a contactRequestBuilder
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
     * Update me
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: User | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Gets an item from the graphtypescriptv4.utilities.me.deviceManagementTroubleshootingEvents collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementTroubleshootingEventRequestBuilder
     */
    public deviceManagementTroubleshootingEventsById(id: String) : DeviceManagementTroubleshootingEventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceManagementTroubleshootingEventRequestBuilder(this.currentPath + this.pathSegment + "/deviceManagementTroubleshootingEvents/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.drives collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: String) : DriveRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.events collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public eventsById(id: String) : EventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.extensions collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
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
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<User>(requestInfo, User, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /me/microsoft.graph.getManagedAppDiagnosticStatuses()
     * @returns a getManagedAppDiagnosticStatusesRequestBuilder
     */
    public getManagedAppDiagnosticStatuses() : GetManagedAppDiagnosticStatusesRequestBuilder {
        return new GetManagedAppDiagnosticStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/microsoft.graph.getManagedAppPolicies()
     * @returns a getManagedAppPoliciesRequestBuilder
     */
    public getManagedAppPolicies() : GetManagedAppPoliciesRequestBuilder {
        return new GetManagedAppPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.joinedTeams collection
     * @param id Unique identifier of the item
     * @returns a teamRequestBuilder
     */
    public joinedTeamsById(id: String) : TeamRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TeamRequestBuilder(this.currentPath + this.pathSegment + "/joinedTeams/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.licenseDetails collection
     * @param id Unique identifier of the item
     * @returns a licenseDetailsRequestBuilder
     */
    public licenseDetailsById(id: String) : LicenseDetailsRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new LicenseDetailsRequestBuilder(this.currentPath + this.pathSegment + "/licenseDetails/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.mailFolders collection
     * @param id Unique identifier of the item
     * @returns a mailFolderRequestBuilder
     */
    public mailFoldersById(id: String) : MailFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MailFolderRequestBuilder(this.currentPath + this.pathSegment + "/mailFolders/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.managedDevices collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceRequestBuilder
     */
    public managedDevicesById(id: String) : ManagedDeviceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceRequestBuilder(this.currentPath + this.pathSegment + "/managedDevices/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.messages collection
     * @param id Unique identifier of the item
     * @returns a messageRequestBuilder
     */
    public messagesById(id: String) : MessageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new MessageRequestBuilder(this.currentPath + this.pathSegment + "/messages/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.onlineMeetings collection
     * @param id Unique identifier of the item
     * @returns a onlineMeetingRequestBuilder
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
    public patch(body: User | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.people collection
     * @param id Unique identifier of the item
     * @returns a personRequestBuilder
     */
    public peopleById(id: String) : PersonRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PersonRequestBuilder(this.currentPath + this.pathSegment + "/people/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.photos collection
     * @param id Unique identifier of the item
     * @returns a profilePhotoRequestBuilder
     */
    public photosById(id: String) : ProfilePhotoRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ProfilePhotoRequestBuilder(this.currentPath + this.pathSegment + "/photos/" + id, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/microsoft.graph.reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}')
     * @param EndDateTime Usage: EndDateTime={EndDateTime}
     * @param StartDateTime Usage: StartDateTime={StartDateTime}
     * @returns a reminderViewWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public reminderViewWithStartDateTimeWithEndDateTime(StartDateTime: string | undefined, EndDateTime: string | undefined) : ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!EndDateTime) throw new Error("EndDateTime cannot be undefined");
        if(!StartDateTime) throw new Error("StartDateTime cannot be undefined");
        return new ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, StartDateTime, EndDateTime, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.scopedRoleMemberOf collection
     * @param id Unique identifier of the item
     * @returns a scopedRoleMembershipRequestBuilder
     */
    public scopedRoleMemberOfById(id: String) : ScopedRoleMembershipRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ScopedRoleMembershipRequestBuilder(this.currentPath + this.pathSegment + "/scopedRoleMemberOf/" + id, this.httpCore, false);
    };
}
