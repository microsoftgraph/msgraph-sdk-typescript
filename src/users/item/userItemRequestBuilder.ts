import {User} from '../../models/';
import {createUserFromDiscriminatorValue} from '../../models/createUserFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ActivitiesRequestBuilder} from './activities/activitiesRequestBuilder';
import {UserActivityItemRequestBuilder} from './activities/item/userActivityItemRequestBuilder';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/agreementAcceptancesRequestBuilder';
import {AgreementAcceptanceItemRequestBuilder} from './agreementAcceptances/item/agreementAcceptanceItemRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {AssignLicenseRequestBuilder} from './assignLicense/assignLicenseRequestBuilder';
import {AuthenticationRequestBuilder} from './authentication/authenticationRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarGroupsRequestBuilder} from './calendarGroups/calendarGroupsRequestBuilder';
import {CalendarGroupItemRequestBuilder} from './calendarGroups/item/calendarGroupItemRequestBuilder';
import {CalendarsRequestBuilder} from './calendars/calendarsRequestBuilder';
import {CalendarItemRequestBuilder} from './calendars/item/calendarItemRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventItemRequestBuilder as I9889f7042ea0c7baeef72c5c5c39ef038b559e5469ac1eedcabb5fe36eb4fe1e} from './calendarView/item/eventItemRequestBuilder';
import {ChangePasswordRequestBuilder} from './changePassword/changePasswordRequestBuilder';
import {ChatsRequestBuilder} from './chats/chatsRequestBuilder';
import {ChatItemRequestBuilder} from './chats/item/chatItemRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ContactFoldersRequestBuilder} from './contactFolders/contactFoldersRequestBuilder';
import {ContactFolderItemRequestBuilder} from './contactFolders/item/contactFolderItemRequestBuilder';
import {ContactsRequestBuilder} from './contacts/contactsRequestBuilder';
import {ContactItemRequestBuilder} from './contacts/item/contactItemRequestBuilder';
import {CreatedObjectsRequestBuilder} from './createdObjects/createdObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I13a05fb66a37b5dfa3567df795d847fae976eccdda038bff5df5faeeb34b1c53} from './createdObjects/item/directoryObjectItemRequestBuilder';
import {DeviceManagementTroubleshootingEventsRequestBuilder} from './deviceManagementTroubleshootingEvents/deviceManagementTroubleshootingEventsRequestBuilder';
import {DeviceManagementTroubleshootingEventItemRequestBuilder} from './deviceManagementTroubleshootingEvents/item/deviceManagementTroubleshootingEventItemRequestBuilder';
import {DirectReportsRequestBuilder} from './directReports/directReportsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I4ab1790d36cffc75d13c6872e157e304fb0d57c8dc80ac0eca7835d8089803b5} from './directReports/item/directoryObjectItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as I1875dbe2e0edb9aeff76c4d549b423834624b170a2f600d67c18f55eb6de64c6} from './events/item/eventItemRequestBuilder';
import {ExportDeviceAndAppManagementDataRequestBuilder} from './exportDeviceAndAppManagementData/exportDeviceAndAppManagementDataRequestBuilder';
import {ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder} from './exportDeviceAndAppManagementDataWithSkipWithTop/exportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder';
import {ExportPersonalDataRequestBuilder} from './exportPersonalData/exportPersonalDataRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {FindMeetingTimesRequestBuilder} from './findMeetingTimes/findMeetingTimesRequestBuilder';
import {FollowedSitesRequestBuilder} from './followedSites/followedSitesRequestBuilder';
import {SiteItemRequestBuilder} from './followedSites/item/siteItemRequestBuilder';
import {GetMailTipsRequestBuilder} from './getMailTips/getMailTipsRequestBuilder';
import {GetManagedAppDiagnosticStatusesRequestBuilder} from './getManagedAppDiagnosticStatuses/getManagedAppDiagnosticStatusesRequestBuilder';
import {GetManagedAppPoliciesRequestBuilder} from './getManagedAppPolicies/getManagedAppPoliciesRequestBuilder';
import {GetManagedDevicesWithAppFailuresRequestBuilder} from './getManagedDevicesWithAppFailures/getManagedDevicesWithAppFailuresRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {InferenceClassificationRequestBuilder} from './inferenceClassification/inferenceClassificationRequestBuilder';
import {InsightsRequestBuilder} from './insights/insightsRequestBuilder';
import {TeamItemRequestBuilder} from './joinedTeams/item/teamItemRequestBuilder';
import {JoinedTeamsRequestBuilder} from './joinedTeams/joinedTeamsRequestBuilder';
import {LicenseDetailsItemRequestBuilder} from './licenseDetails/item/licenseDetailsItemRequestBuilder';
import {LicenseDetailsRequestBuilder} from './licenseDetails/licenseDetailsRequestBuilder';
import {MailFolderItemRequestBuilder} from './mailFolders/item/mailFolderItemRequestBuilder';
import {MailFoldersRequestBuilder} from './mailFolders/mailFoldersRequestBuilder';
import {ManagedAppRegistrationItemRequestBuilder} from './managedAppRegistrations/item/managedAppRegistrationItemRequestBuilder';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/managedAppRegistrationsRequestBuilder';
import {ManagedDeviceItemRequestBuilder} from './managedDevices/item/managedDeviceItemRequestBuilder';
import {ManagedDevicesRequestBuilder} from './managedDevices/managedDevicesRequestBuilder';
import {ManagerRequestBuilder} from './manager/managerRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I720843e239c1ed20e17df69dac6a352aeb0f129a6d3f3195c06030b3d94b6dfe} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {MessageItemRequestBuilder} from './messages/item/messageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {OnlineMeetingItemRequestBuilder} from './onlineMeetings/item/onlineMeetingItemRequestBuilder';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/onlineMeetingsRequestBuilder';
import {OutlookRequestBuilder} from './outlook/outlookRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I4c79e3611486b034b39c2f58da356887eb83a4f200ad4a1f4511507140055f9c} from './ownedDevices/item/directoryObjectItemRequestBuilder';
import {OwnedDevicesRequestBuilder} from './ownedDevices/ownedDevicesRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I69173b5067053acdcf55feed84283a5de87d54596557a815cd24597de28fcfe2} from './ownedObjects/item/directoryObjectItemRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {PersonItemRequestBuilder} from './people/item/personItemRequestBuilder';
import {PeopleRequestBuilder} from './people/peopleRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './photos/item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {PresenceRequestBuilder} from './presence/presenceRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I7689ff8bd62424f33e7f671948c9da2ff4fcdb4f9c3be5b02fba87d981ac0696} from './registeredDevices/item/directoryObjectItemRequestBuilder';
import {RegisteredDevicesRequestBuilder} from './registeredDevices/registeredDevicesRequestBuilder';
import {ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder} from './reminderViewWithStartDateTimeWithEndDateTime/reminderViewWithStartDateTimeWithEndDateTimeRequestBuilder';
import {RemoveAllDevicesFromManagementRequestBuilder} from './removeAllDevicesFromManagement/removeAllDevicesFromManagementRequestBuilder';
import {ReprocessLicenseAssignmentRequestBuilder} from './reprocessLicenseAssignment/reprocessLicenseAssignmentRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {RevokeSignInSessionsRequestBuilder} from './revokeSignInSessions/revokeSignInSessionsRequestBuilder';
import {ScopedRoleMembershipItemRequestBuilder} from './scopedRoleMemberOf/item/scopedRoleMembershipItemRequestBuilder';
import {ScopedRoleMemberOfRequestBuilder} from './scopedRoleMemberOf/scopedRoleMemberOfRequestBuilder';
import {SendMailRequestBuilder} from './sendMail/sendMailRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {TeamworkRequestBuilder} from './teamwork/teamworkRequestBuilder';
import {TodoRequestBuilder} from './todo/todoRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I01e9baa1e8bb574e0d26abbb063c7ffdbf71a41941b07ff3da88eb8ef717aec3} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {TranslateExchangeIdsRequestBuilder} from './translateExchangeIds/translateExchangeIdsRequestBuilder';
import {UserItemRequestBuilderDeleteRequestConfiguration} from './userItemRequestBuilderDeleteRequestConfiguration';
import {UserItemRequestBuilderGetRequestConfiguration} from './userItemRequestBuilderGetRequestConfiguration';
import {UserItemRequestBuilderPatchRequestConfiguration} from './userItemRequestBuilderPatchRequestConfiguration';
import {WipeManagedAppRegistrationsByDeviceTagRequestBuilder} from './wipeManagedAppRegistrationsByDeviceTag/wipeManagedAppRegistrationsByDeviceTagRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of user entities.
 */
export class UserItemRequestBuilder {
    /** Provides operations to manage the activities property of the microsoft.graph.user entity. */
    public get activities(): ActivitiesRequestBuilder {
        return new ActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the agreementAcceptances property of the microsoft.graph.user entity. */
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appRoleAssignments property of the microsoft.graph.user entity. */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the assignLicense method. */
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the authentication property of the microsoft.graph.user entity. */
    public get authentication(): AuthenticationRequestBuilder {
        return new AuthenticationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendar property of the microsoft.graph.user entity. */
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendarGroups property of the microsoft.graph.user entity. */
    public get calendarGroups(): CalendarGroupsRequestBuilder {
        return new CalendarGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendars property of the microsoft.graph.user entity. */
    public get calendars(): CalendarsRequestBuilder {
        return new CalendarsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendarView property of the microsoft.graph.user entity. */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the changePassword method. */
    public get changePassword(): ChangePasswordRequestBuilder {
        return new ChangePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the chats property of the microsoft.graph.user entity. */
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberGroups method. */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberObjects method. */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contactFolders property of the microsoft.graph.user entity. */
    public get contactFolders(): ContactFoldersRequestBuilder {
        return new ContactFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the contacts property of the microsoft.graph.user entity. */
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the createdObjects property of the microsoft.graph.user entity. */
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceManagementTroubleshootingEvents property of the microsoft.graph.user entity. */
    public get deviceManagementTroubleshootingEvents(): DeviceManagementTroubleshootingEventsRequestBuilder {
        return new DeviceManagementTroubleshootingEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the directReports property of the microsoft.graph.user entity. */
    public get directReports(): DirectReportsRequestBuilder {
        return new DirectReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drive property of the microsoft.graph.user entity. */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drives property of the microsoft.graph.user entity. */
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the events property of the microsoft.graph.user entity. */
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the exportDeviceAndAppManagementData method. */
    public get exportDeviceAndAppManagementData(): ExportDeviceAndAppManagementDataRequestBuilder {
        return new ExportDeviceAndAppManagementDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the exportPersonalData method. */
    public get exportPersonalData(): ExportPersonalDataRequestBuilder {
        return new ExportPersonalDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the extensions property of the microsoft.graph.user entity. */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the findMeetingTimes method. */
    public get findMeetingTimes(): FindMeetingTimesRequestBuilder {
        return new FindMeetingTimesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the followedSites property of the microsoft.graph.user entity. */
    public get followedSites(): FollowedSitesRequestBuilder {
        return new FollowedSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMailTips method. */
    public get getMailTips(): GetMailTipsRequestBuilder {
        return new GetMailTipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getManagedAppDiagnosticStatuses method. */
    public get getManagedAppDiagnosticStatuses(): GetManagedAppDiagnosticStatusesRequestBuilder {
        return new GetManagedAppDiagnosticStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getManagedAppPolicies method. */
    public get getManagedAppPolicies(): GetManagedAppPoliciesRequestBuilder {
        return new GetManagedAppPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getManagedDevicesWithAppFailures method. */
    public get getManagedDevicesWithAppFailures(): GetManagedDevicesWithAppFailuresRequestBuilder {
        return new GetManagedDevicesWithAppFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberGroups method. */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberObjects method. */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the inferenceClassification property of the microsoft.graph.user entity. */
    public get inferenceClassification(): InferenceClassificationRequestBuilder {
        return new InferenceClassificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the insights property of the microsoft.graph.user entity. */
    public get insights(): InsightsRequestBuilder {
        return new InsightsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the joinedTeams property of the microsoft.graph.user entity. */
    public get joinedTeams(): JoinedTeamsRequestBuilder {
        return new JoinedTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the licenseDetails property of the microsoft.graph.user entity. */
    public get licenseDetails(): LicenseDetailsRequestBuilder {
        return new LicenseDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the mailFolders property of the microsoft.graph.user entity. */
    public get mailFolders(): MailFoldersRequestBuilder {
        return new MailFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedAppRegistrations property of the microsoft.graph.user entity. */
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the managedDevices property of the microsoft.graph.user entity. */
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the manager property of the microsoft.graph.user entity. */
    public get manager(): ManagerRequestBuilder {
        return new ManagerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the memberOf property of the microsoft.graph.user entity. */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messages property of the microsoft.graph.user entity. */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.user entity. */
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the onenote property of the microsoft.graph.user entity. */
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the onlineMeetings property of the microsoft.graph.user entity. */
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the outlook property of the microsoft.graph.user entity. */
    public get outlook(): OutlookRequestBuilder {
        return new OutlookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the ownedDevices property of the microsoft.graph.user entity. */
    public get ownedDevices(): OwnedDevicesRequestBuilder {
        return new OwnedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the ownedObjects property of the microsoft.graph.user entity. */
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the people property of the microsoft.graph.user entity. */
    public get people(): PeopleRequestBuilder {
        return new PeopleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the photo property of the microsoft.graph.user entity. */
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the photos property of the microsoft.graph.user entity. */
    public get photos(): PhotosRequestBuilder {
        return new PhotosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the planner property of the microsoft.graph.user entity. */
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the presence property of the microsoft.graph.user entity. */
    public get presence(): PresenceRequestBuilder {
        return new PresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the registeredDevices property of the microsoft.graph.user entity. */
    public get registeredDevices(): RegisteredDevicesRequestBuilder {
        return new RegisteredDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeAllDevicesFromManagement method. */
    public get removeAllDevicesFromManagement(): RemoveAllDevicesFromManagementRequestBuilder {
        return new RemoveAllDevicesFromManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the reprocessLicenseAssignment method. */
    public get reprocessLicenseAssignment(): ReprocessLicenseAssignmentRequestBuilder {
        return new ReprocessLicenseAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to call the restore method. */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the revokeSignInSessions method. */
    public get revokeSignInSessions(): RevokeSignInSessionsRequestBuilder {
        return new RevokeSignInSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the scopedRoleMemberOf property of the microsoft.graph.user entity. */
    public get scopedRoleMemberOf(): ScopedRoleMemberOfRequestBuilder {
        return new ScopedRoleMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sendMail method. */
    public get sendMail(): SendMailRequestBuilder {
        return new SendMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the settings property of the microsoft.graph.user entity. */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the teamwork property of the microsoft.graph.user entity. */
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the todo property of the microsoft.graph.user entity. */
    public get todo(): TodoRequestBuilder {
        return new TodoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the transitiveMemberOf property of the microsoft.graph.user entity. */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the translateExchangeIds method. */
    public get translateExchangeIds(): TranslateExchangeIdsRequestBuilder {
        return new TranslateExchangeIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to call the wipeManagedAppRegistrationsByDeviceTag method. */
    public get wipeManagedAppRegistrationsByDeviceTag(): WipeManagedAppRegistrationsByDeviceTagRequestBuilder {
        return new WipeManagedAppRegistrationsByDeviceTagRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the activities property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a UserActivityItemRequestBuilder
     */
    public activitiesById(id: string) : UserActivityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userActivity%2Did"] = id
        return new UserActivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the agreementAcceptances property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a AgreementAcceptanceItemRequestBuilder
     */
    public agreementAcceptancesById(id: string) : AgreementAcceptanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance%2Did"] = id
        return new AgreementAcceptanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the appRoleAssignments property of the microsoft.graph.user entity.
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
     * Provides operations to manage the calendarGroups property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a CalendarGroupItemRequestBuilder
     */
    public calendarGroupsById(id: string) : CalendarGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarGroup%2Did"] = id
        return new CalendarGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calendars property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a CalendarItemRequestBuilder
     */
    public calendarsById(id: string) : CalendarItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendar%2Did"] = id
        return new CalendarItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public calendarViewById(id: string) : I9889f7042ea0c7baeef72c5c5c39ef038b559e5469ac1eedcabb5fe36eb4fe1e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new I9889f7042ea0c7baeef72c5c5c39ef038b559e5469ac1eedcabb5fe36eb4fe1e(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the chats property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a ChatItemRequestBuilder
     */
    public chatsById(id: string) : ChatItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chat%2Did"] = id
        return new ChatItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the contactFolders property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a ContactFolderItemRequestBuilder
     */
    public contactFoldersById(id: string) : ContactFolderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contactFolder%2Did"] = id
        return new ContactFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the contacts property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a ContactItemRequestBuilder
     */
    public contactsById(id: string) : ContactItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contact%2Did"] = id
        return new ContactItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the createdObjects property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public createdObjectsById(id: string) : I13a05fb66a37b5dfa3567df795d847fae976eccdda038bff5df5faeeb34b1c53 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I13a05fb66a37b5dfa3567df795d847fae976eccdda038bff5df5faeeb34b1c53(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete user.   When deleted, user resources are moved to a temporary container and can be restored within 30 days.  After that time, they are permanently deleted.  To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/user-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: UserItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the deviceManagementTroubleshootingEvents property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DeviceManagementTroubleshootingEventItemRequestBuilder
     */
    public deviceManagementTroubleshootingEventsById(id: string) : DeviceManagementTroubleshootingEventItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent%2Did"] = id
        return new DeviceManagementTroubleshootingEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the directReports property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public directReportsById(id: string) : I4ab1790d36cffc75d13c6872e157e304fb0d57c8dc80ac0eca7835d8089803b5 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I4ab1790d36cffc75d13c6872e157e304fb0d57c8dc80ac0eca7835d8089803b5(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the drives property of the microsoft.graph.user entity.
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
     * Provides operations to manage the events property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public eventsById(id: string) : I1875dbe2e0edb9aeff76c4d549b423834624b170a2f600d67c18f55eb6de64c6 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new I1875dbe2e0edb9aeff76c4d549b423834624b170a2f600d67c18f55eb6de64c6(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to call the exportDeviceAndAppManagementData method.
     * @param skip Usage: skip={skip}
     * @param top Usage: top={top}
     * @returns a exportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder
     */
    public exportDeviceAndAppManagementDataWithSkipWithTop(skip: number | undefined, top: number | undefined) : ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder {
        if(!skip) throw new Error("skip cannot be undefined");
        if(!top) throw new Error("top cannot be undefined");
        return new ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder(this.pathParameters, this.requestAdapter, skip, top);
    };
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.user entity.
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
     * Provides operations to manage the followedSites property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a SiteItemRequestBuilder
     */
    public followedSitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of user object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     * @see {@link https://docs.microsoft.com/graph/api/user-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<User | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a TeamItemRequestBuilder
     */
    public joinedTeamsById(id: string) : TeamItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team%2Did"] = id
        return new TeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the licenseDetails property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a LicenseDetailsItemRequestBuilder
     */
    public licenseDetailsById(id: string) : LicenseDetailsItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["licenseDetails%2Did"] = id
        return new LicenseDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the mailFolders property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a MailFolderItemRequestBuilder
     */
    public mailFoldersById(id: string) : MailFolderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailFolder%2Did"] = id
        return new MailFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppRegistrationItemRequestBuilder
     */
    public managedAppRegistrationsById(id: string) : ManagedAppRegistrationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppRegistration%2Did"] = id
        return new ManagedAppRegistrationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the managedDevices property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceItemRequestBuilder
     */
    public managedDevicesById(id: string) : ManagedDeviceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDevice%2Did"] = id
        return new ManagedDeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the memberOf property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : I720843e239c1ed20e17df69dac6a352aeb0f129a6d3f3195c06030b3d94b6dfe {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I720843e239c1ed20e17df69dac6a352aeb0f129a6d3f3195c06030b3d94b6dfe(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the messages property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a MessageItemRequestBuilder
     */
    public messagesById(id: string) : MessageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["message%2Did"] = id
        return new MessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a OAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the onlineMeetings property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a OnlineMeetingItemRequestBuilder
     */
    public onlineMeetingsById(id: string) : OnlineMeetingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onlineMeeting%2Did"] = id
        return new OnlineMeetingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the ownedDevices property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownedDevicesById(id: string) : I4c79e3611486b034b39c2f58da356887eb83a4f200ad4a1f4511507140055f9c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I4c79e3611486b034b39c2f58da356887eb83a4f200ad4a1f4511507140055f9c(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the ownedObjects property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownedObjectsById(id: string) : I69173b5067053acdcf55feed84283a5de87d54596557a815cd24597de28fcfe2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I69173b5067053acdcf55feed84283a5de87d54596557a815cd24597de28fcfe2(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     * @see {@link https://docs.microsoft.com/graph/api/user-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: User | undefined, requestConfiguration?: UserItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<User | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the people property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a PersonItemRequestBuilder
     */
    public peopleById(id: string) : PersonItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["person%2Did"] = id
        return new PersonItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the photos property of the microsoft.graph.user entity.
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
     * Provides operations to manage the registeredDevices property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public registeredDevicesById(id: string) : I7689ff8bd62424f33e7f671948c9da2ff4fcdb4f9c3be5b02fba87d981ac0696 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I7689ff8bd62424f33e7f671948c9da2ff4fcdb4f9c3be5b02fba87d981ac0696(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to call the reminderView method.
     * @param EndDateTime Usage: EndDateTime='{EndDateTime}'
     * @param StartDateTime Usage: StartDateTime='{StartDateTime}'
     * @returns a reminderViewWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public reminderViewWithStartDateTimeWithEndDateTime(endDateTime: string | undefined, startDateTime: string | undefined) : ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, startDateTime);
    };
    /**
     * Provides operations to manage the scopedRoleMemberOf property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a ScopedRoleMembershipItemRequestBuilder
     */
    public scopedRoleMemberOfById(id: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = id
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete user.   When deleted, user resources are moved to a temporary container and can be restored within 30 days.  After that time, they are permanently deleted.  To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of user object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: User | undefined, requestConfiguration?: UserItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.user entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : I01e9baa1e8bb574e0d26abbb063c7ffdbf71a41941b07ff3da88eb8ef717aec3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I01e9baa1e8bb574e0d26abbb063c7ffdbf71a41941b07ff3da88eb8ef717aec3(urlTplParams, this.requestAdapter);
    };
}
