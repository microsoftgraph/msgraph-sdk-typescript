import {User} from '../models/';
import {createUserFromDiscriminatorValue} from '../models/createUserFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
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
import {EventItemRequestBuilder as ic0012b44e83dbd54f9a85dde6d61ab21bc695dc55c3a599e4d5357af115bb944} from './calendarView/item/eventItemRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as i4dbc01d8051d709f97c06b2f82221a24c4d11b54c682680bc45c1c907c74058d} from './createdObjects/item/directoryObjectItemRequestBuilder';
import {DeviceManagementTroubleshootingEventsRequestBuilder} from './deviceManagementTroubleshootingEvents/deviceManagementTroubleshootingEventsRequestBuilder';
import {DeviceManagementTroubleshootingEventItemRequestBuilder} from './deviceManagementTroubleshootingEvents/item/deviceManagementTroubleshootingEventItemRequestBuilder';
import {DirectReportsRequestBuilder} from './directReports/directReportsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ifcf15c01e639484987e654575aab697ba7d64ceef6b1b6ca8f69a252d645cfbd} from './directReports/item/directoryObjectItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as iae02e6049890a306e0da37d8ea3286086c0c6a3750c636f16fb94b8f099458b4} from './events/item/eventItemRequestBuilder';
import {ExportPersonalDataRequestBuilder} from './exportPersonalData/exportPersonalDataRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {FindMeetingTimesRequestBuilder} from './findMeetingTimes/findMeetingTimesRequestBuilder';
import {FollowedSitesRequestBuilder} from './followedSites/followedSitesRequestBuilder';
import {SiteItemRequestBuilder} from './followedSites/item/siteItemRequestBuilder';
import {GetMailTipsRequestBuilder} from './getMailTips/getMailTipsRequestBuilder';
import {GetManagedAppDiagnosticStatusesRequestBuilder} from './getManagedAppDiagnosticStatuses/getManagedAppDiagnosticStatusesRequestBuilder';
import {GetManagedAppPoliciesRequestBuilder} from './getManagedAppPolicies/getManagedAppPoliciesRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as i1afe3dd8375f860d20edb9901bac84c9a600b26d2205f620eacadbe6904bdb8f} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {MeRequestBuilderGetRequestConfiguration} from './meRequestBuilderGetRequestConfiguration';
import {MeRequestBuilderPatchRequestConfiguration} from './meRequestBuilderPatchRequestConfiguration';
import {MessageItemRequestBuilder} from './messages/item/messageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {OnlineMeetingItemRequestBuilder} from './onlineMeetings/item/onlineMeetingItemRequestBuilder';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/onlineMeetingsRequestBuilder';
import {OutlookRequestBuilder} from './outlook/outlookRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i8e2e5adf873d4771df88bfdad6558877fbdd00c60ec44554c1c5c1879e4b095d} from './ownedDevices/item/directoryObjectItemRequestBuilder';
import {OwnedDevicesRequestBuilder} from './ownedDevices/ownedDevicesRequestBuilder';
import {DirectoryObjectItemRequestBuilder as iaa5f0cd94bb55a2d59f65a68e44b3c82f71eda72811c2182ffe255b5cfc146a5} from './ownedObjects/item/directoryObjectItemRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {PersonItemRequestBuilder} from './people/item/personItemRequestBuilder';
import {PeopleRequestBuilder} from './people/peopleRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './photos/item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {PresenceRequestBuilder} from './presence/presenceRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i0023e0ed37f7c34111ba15d8368632614c1196b1169f66678176dca31de74ac7} from './registeredDevices/item/directoryObjectItemRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as if0cd9385b2b0e89a82e916808c7cb33b5b4a89044783321b6c1cff3257bee48e} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {TranslateExchangeIdsRequestBuilder} from './translateExchangeIds/translateExchangeIdsRequestBuilder';
import {WipeManagedAppRegistrationsByDeviceTagRequestBuilder} from './wipeManagedAppRegistrationsByDeviceTag/wipeManagedAppRegistrationsByDeviceTagRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the user singleton. */
export class MeRequestBuilder {
    /** The activities property */
    public get activities(): ActivitiesRequestBuilder {
        return new ActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The agreementAcceptances property */
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The appRoleAssignments property */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The assignLicense property */
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The authentication property */
    public get authentication(): AuthenticationRequestBuilder {
        return new AuthenticationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendar property */
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendarGroups property */
    public get calendarGroups(): CalendarGroupsRequestBuilder {
        return new CalendarGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendars property */
    public get calendars(): CalendarsRequestBuilder {
        return new CalendarsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The calendarView property */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The changePassword property */
    public get changePassword(): ChangePasswordRequestBuilder {
        return new ChangePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The chats property */
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberGroups property */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberObjects property */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The contactFolders property */
    public get contactFolders(): ContactFoldersRequestBuilder {
        return new ContactFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The contacts property */
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The createdObjects property */
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceManagementTroubleshootingEvents property */
    public get deviceManagementTroubleshootingEvents(): DeviceManagementTroubleshootingEventsRequestBuilder {
        return new DeviceManagementTroubleshootingEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The directReports property */
    public get directReports(): DirectReportsRequestBuilder {
        return new DirectReportsRequestBuilder(this.pathParameters, this.requestAdapter);
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
    /** The exportPersonalData property */
    public get exportPersonalData(): ExportPersonalDataRequestBuilder {
        return new ExportPersonalDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The extensions property */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The findMeetingTimes property */
    public get findMeetingTimes(): FindMeetingTimesRequestBuilder {
        return new FindMeetingTimesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The followedSites property */
    public get followedSites(): FollowedSitesRequestBuilder {
        return new FollowedSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMailTips property */
    public get getMailTips(): GetMailTipsRequestBuilder {
        return new GetMailTipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberGroups property */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberObjects property */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The inferenceClassification property */
    public get inferenceClassification(): InferenceClassificationRequestBuilder {
        return new InferenceClassificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The insights property */
    public get insights(): InsightsRequestBuilder {
        return new InsightsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The joinedTeams property */
    public get joinedTeams(): JoinedTeamsRequestBuilder {
        return new JoinedTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The licenseDetails property */
    public get licenseDetails(): LicenseDetailsRequestBuilder {
        return new LicenseDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mailFolders property */
    public get mailFolders(): MailFoldersRequestBuilder {
        return new MailFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The managedAppRegistrations property */
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The managedDevices property */
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The manager property */
    public get manager(): ManagerRequestBuilder {
        return new ManagerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The memberOf property */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The messages property */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The oauth2PermissionGrants property */
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The onenote property */
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The onlineMeetings property */
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The outlook property */
    public get outlook(): OutlookRequestBuilder {
        return new OutlookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The ownedDevices property */
    public get ownedDevices(): OwnedDevicesRequestBuilder {
        return new OwnedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The ownedObjects property */
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The people property */
    public get people(): PeopleRequestBuilder {
        return new PeopleRequestBuilder(this.pathParameters, this.requestAdapter);
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
    /** The presence property */
    public get presence(): PresenceRequestBuilder {
        return new PresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The registeredDevices property */
    public get registeredDevices(): RegisteredDevicesRequestBuilder {
        return new RegisteredDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The removeAllDevicesFromManagement property */
    public get removeAllDevicesFromManagement(): RemoveAllDevicesFromManagementRequestBuilder {
        return new RemoveAllDevicesFromManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The reprocessLicenseAssignment property */
    public get reprocessLicenseAssignment(): ReprocessLicenseAssignmentRequestBuilder {
        return new ReprocessLicenseAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The restore property */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The revokeSignInSessions property */
    public get revokeSignInSessions(): RevokeSignInSessionsRequestBuilder {
        return new RevokeSignInSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The scopedRoleMemberOf property */
    public get scopedRoleMemberOf(): ScopedRoleMemberOfRequestBuilder {
        return new ScopedRoleMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sendMail property */
    public get sendMail(): SendMailRequestBuilder {
        return new SendMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The settings property */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The teamwork property */
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The todo property */
    public get todo(): TodoRequestBuilder {
        return new TodoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transitiveMemberOf property */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The translateExchangeIds property */
    public get translateExchangeIds(): TranslateExchangeIdsRequestBuilder {
        return new TranslateExchangeIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The wipeManagedAppRegistrationsByDeviceTag property */
    public get wipeManagedAppRegistrationsByDeviceTag(): WipeManagedAppRegistrationsByDeviceTagRequestBuilder {
        return new WipeManagedAppRegistrationsByDeviceTagRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.activities.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.agreementAcceptances.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.appRoleAssignments.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.calendarGroups.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.calendars.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public calendarViewById(id: string) : ic0012b44e83dbd54f9a85dde6d61ab21bc695dc55c3a599e4d5357af115bb944 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new ic0012b44e83dbd54f9a85dde6d61ab21bc695dc55c3a599e4d5357af115bb944(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.chats.item collection
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
     * Instantiates a new MeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.contactFolders.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.contacts.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.createdObjects.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public createdObjectsById(id: string) : i4dbc01d8051d709f97c06b2f82221a24c4d11b54c682680bc45c1c907c74058d {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i4dbc01d8051d709f97c06b2f82221a24c4d11b54c682680bc45c1c907c74058d(urlTplParams, this.requestAdapter);
    };
    /**
     * Returns the user or organizational contact assigned as the user's manager. Optionally, you can expand the manager's chain up to the root node.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: User | undefined, requestConfiguration?: MeRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.deviceManagementTroubleshootingEvents.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.directReports.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public directReportsById(id: string) : ifcf15c01e639484987e654575aab697ba7d64ceef6b1b6ca8f69a252d645cfbd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ifcf15c01e639484987e654575aab697ba7d64ceef6b1b6ca8f69a252d645cfbd(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.drives.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.events.item collection
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public eventsById(id: string) : iae02e6049890a306e0da37d8ea3286086c0c6a3750c636f16fb94b8f099458b4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new iae02e6049890a306e0da37d8ea3286086c0c6a3750c636f16fb94b8f099458b4(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.extensions.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.followedSites.item collection
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
     * Returns the user or organizational contact assigned as the user's manager. Optionally, you can expand the manager's chain up to the root node.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     */
    public get(requestConfiguration?: MeRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<User | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the getManagedAppDiagnosticStatuses method.
     * @returns a getManagedAppDiagnosticStatusesRequestBuilder
     */
    public getManagedAppDiagnosticStatuses() : GetManagedAppDiagnosticStatusesRequestBuilder {
        return new GetManagedAppDiagnosticStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the getManagedAppPolicies method.
     * @returns a getManagedAppPoliciesRequestBuilder
     */
    public getManagedAppPolicies() : GetManagedAppPoliciesRequestBuilder {
        return new GetManagedAppPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.joinedTeams.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.licenseDetails.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.mailFolders.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.managedAppRegistrations.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.managedDevices.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : i1afe3dd8375f860d20edb9901bac84c9a600b26d2205f620eacadbe6904bdb8f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i1afe3dd8375f860d20edb9901bac84c9a600b26d2205f620eacadbe6904bdb8f(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.messages.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.oauth2PermissionGrants.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onlineMeetings.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.ownedDevices.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownedDevicesById(id: string) : i8e2e5adf873d4771df88bfdad6558877fbdd00c60ec44554c1c5c1879e4b095d {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i8e2e5adf873d4771df88bfdad6558877fbdd00c60ec44554c1c5c1879e4b095d(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.ownedObjects.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownedObjectsById(id: string) : iaa5f0cd94bb55a2d59f65a68e44b3c82f71eda72811c2182ffe255b5cfc146a5 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new iaa5f0cd94bb55a2d59f65a68e44b3c82f71eda72811c2182ffe255b5cfc146a5(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: User | undefined, requestConfiguration?: MeRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.people.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.photos.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.registeredDevices.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public registeredDevicesById(id: string) : i0023e0ed37f7c34111ba15d8368632614c1196b1169f66678176dca31de74ac7 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i0023e0ed37f7c34111ba15d8368632614c1196b1169f66678176dca31de74ac7(urlTplParams, this.requestAdapter);
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.scopedRoleMemberOf.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : if0cd9385b2b0e89a82e916808c7cb33b5b4a89044783321b6c1cff3257bee48e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new if0cd9385b2b0e89a82e916808c7cb33b5b4a89044783321b6c1cff3257bee48e(urlTplParams, this.requestAdapter);
    };
}
