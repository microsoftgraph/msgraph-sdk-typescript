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
import {EventItemRequestBuilder as id3b0f8d7750ef07c7c51c3665fd3af3a01ad07e883ee0764d77a38f1b1ba3fdf} from './calendarView/item/eventItemRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as if3aa3c8c1d4c5b40c695a98805baefd351b0d91d53e7bcb61f08f4534db827d9} from './createdObjects/item/directoryObjectItemRequestBuilder';
import {DeviceManagementTroubleshootingEventsRequestBuilder} from './deviceManagementTroubleshootingEvents/deviceManagementTroubleshootingEventsRequestBuilder';
import {DeviceManagementTroubleshootingEventItemRequestBuilder} from './deviceManagementTroubleshootingEvents/item/deviceManagementTroubleshootingEventItemRequestBuilder';
import {DirectReportsRequestBuilder} from './directReports/directReportsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ie4f7a3adc11feb16fc44557a4d5a2e2ae50e64f4641f289eb2036f52124e4dc5} from './directReports/item/directoryObjectItemRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as idff49b5aa167ad3a60a502a055381eb631511ac272b610e97e2ee7f0205633e2} from './events/item/eventItemRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as i18f52bf6bc5c1c8b3304492b981916ccf9ebb43631988ec15e02d772cfb00573} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {MessageItemRequestBuilder} from './messages/item/messageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {OnlineMeetingItemRequestBuilder} from './onlineMeetings/item/onlineMeetingItemRequestBuilder';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/onlineMeetingsRequestBuilder';
import {OutlookRequestBuilder} from './outlook/outlookRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i2aef51b84a32beb2693af5b7b8a2f55a4fd109a7efad565592698239164d682a} from './ownedDevices/item/directoryObjectItemRequestBuilder';
import {OwnedDevicesRequestBuilder} from './ownedDevices/ownedDevicesRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i058626e962792aedcea1eb90a3e6876666fcf8731682e43a2bde0e3625fa31da} from './ownedObjects/item/directoryObjectItemRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {PersonItemRequestBuilder} from './people/item/personItemRequestBuilder';
import {PeopleRequestBuilder} from './people/peopleRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './photos/item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {PresenceRequestBuilder} from './presence/presenceRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i7d79802aaceac043beca51df3db3db8ed8431b0c91cd8325b5b0abf2ead40bcb} from './registeredDevices/item/directoryObjectItemRequestBuilder';
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
import {DirectoryObjectItemRequestBuilder as ie63433783ab729cdddec741a9dffe4aaad5418284b12e1dc6e2c6832365f7e14} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {TranslateExchangeIdsRequestBuilder} from './translateExchangeIds/translateExchangeIdsRequestBuilder';
import {UserItemRequestBuilderDeleteRequestConfiguration} from './userItemRequestBuilderDeleteRequestConfiguration';
import {UserItemRequestBuilderGetRequestConfiguration} from './userItemRequestBuilderGetRequestConfiguration';
import {UserItemRequestBuilderPatchRequestConfiguration} from './userItemRequestBuilderPatchRequestConfiguration';
import {WipeManagedAppRegistrationsByDeviceTagRequestBuilder} from './wipeManagedAppRegistrationsByDeviceTag/wipeManagedAppRegistrationsByDeviceTagRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of user entities. */
export class UserItemRequestBuilder {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.activities.item collection
     * @param id Unique identifier of the item
     * @returns a userActivityItemRequestBuilder
     */
    public activitiesById(id: string) : UserActivityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userActivity%2Did"] = id
        return new UserActivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.agreementAcceptances.item collection
     * @param id Unique identifier of the item
     * @returns a agreementAcceptanceItemRequestBuilder
     */
    public agreementAcceptancesById(id: string) : AgreementAcceptanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance%2Did"] = id
        return new AgreementAcceptanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : AppRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new AppRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.calendarGroups.item collection
     * @param id Unique identifier of the item
     * @returns a calendarGroupItemRequestBuilder
     */
    public calendarGroupsById(id: string) : CalendarGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarGroup%2Did"] = id
        return new CalendarGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.calendars.item collection
     * @param id Unique identifier of the item
     * @returns a calendarItemRequestBuilder
     */
    public calendarsById(id: string) : CalendarItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendar%2Did"] = id
        return new CalendarItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a eventItemRequestBuilder
     */
    public calendarViewById(id: string) : id3b0f8d7750ef07c7c51c3665fd3af3a01ad07e883ee0764d77a38f1b1ba3fdf {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new id3b0f8d7750ef07c7c51c3665fd3af3a01ad07e883ee0764d77a38f1b1ba3fdf(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.chats.item collection
     * @param id Unique identifier of the item
     * @returns a chatItemRequestBuilder
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.contactFolders.item collection
     * @param id Unique identifier of the item
     * @returns a contactFolderItemRequestBuilder
     */
    public contactFoldersById(id: string) : ContactFolderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contactFolder%2Did"] = id
        return new ContactFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.contacts.item collection
     * @param id Unique identifier of the item
     * @returns a contactItemRequestBuilder
     */
    public contactsById(id: string) : ContactItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contact%2Did"] = id
        return new ContactItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Suppose you use Azure AD security groups to assign identities (also called *principals*) access to resources in your organization. Periodically, you need to attest that all members of the security group need their membership and by extension, their access to the resources assigned to the security group. This tutorial guides you to use the access review API to review access to a security group in your Azure AD tenant. You can use Graph Explorer or Postman to try out and test your access reviews API calls before you automate them into a script or an app. This test environment saves you time by helping you properly define and validate your queries without repeatedly recompiling your application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: UserItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.createdObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public createdObjectsById(id: string) : if3aa3c8c1d4c5b40c695a98805baefd351b0d91d53e7bcb61f08f4534db827d9 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new if3aa3c8c1d4c5b40c695a98805baefd351b0d91d53e7bcb61f08f4534db827d9(urlTplParams, this.requestAdapter);
    };
    public createGetRequestInformation(requestConfiguration?: UserItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * This article provides examples of how to assign, update, or remove different types of custom security attributes for users and applications (service principals). Custom security attributes can be assigned or updated only through a `PATCH` operation in an [Update user](/graph/api/user-update?view=graph-rest-beta&preserve-view=true) or [Update servicePrincipal](/graph/api/serviceprincipal-update?view=graph-rest-beta&preserve-view=true) request.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: User | undefined, requestConfiguration?: UserItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Suppose you use Azure AD security groups to assign identities (also called *principals*) access to resources in your organization. Periodically, you need to attest that all members of the security group need their membership and by extension, their access to the resources assigned to the security group. This tutorial guides you to use the access review API to review access to a security group in your Azure AD tenant. You can use Graph Explorer or Postman to try out and test your access reviews API calls before you automate them into a script or an app. This test environment saves you time by helping you properly define and validate your queries without repeatedly recompiling your application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UserItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.deviceManagementTroubleshootingEvents.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementTroubleshootingEventItemRequestBuilder
     */
    public deviceManagementTroubleshootingEventsById(id: string) : DeviceManagementTroubleshootingEventItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent%2Did"] = id
        return new DeviceManagementTroubleshootingEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.directReports.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public directReportsById(id: string) : ie4f7a3adc11feb16fc44557a4d5a2e2ae50e64f4641f289eb2036f52124e4dc5 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ie4f7a3adc11feb16fc44557a4d5a2e2ae50e64f4641f289eb2036f52124e4dc5(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.events.item collection
     * @param id Unique identifier of the item
     * @returns a eventItemRequestBuilder
     */
    public eventsById(id: string) : idff49b5aa167ad3a60a502a055381eb631511ac272b610e97e2ee7f0205633e2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new idff49b5aa167ad3a60a502a055381eb631511ac272b610e97e2ee7f0205633e2(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionItemRequestBuilder
     */
    public extensionsById(id: string) : ExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension%2Did"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.followedSites.item collection
     * @param id Unique identifier of the item
     * @returns a siteItemRequestBuilder
     */
    public followedSitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    public get(requestConfiguration?: UserItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<User | undefined> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.joinedTeams.item collection
     * @param id Unique identifier of the item
     * @returns a teamItemRequestBuilder
     */
    public joinedTeamsById(id: string) : TeamItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team%2Did"] = id
        return new TeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.licenseDetails.item collection
     * @param id Unique identifier of the item
     * @returns a licenseDetailsItemRequestBuilder
     */
    public licenseDetailsById(id: string) : LicenseDetailsItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["licenseDetails%2Did"] = id
        return new LicenseDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.mailFolders.item collection
     * @param id Unique identifier of the item
     * @returns a mailFolderItemRequestBuilder
     */
    public mailFoldersById(id: string) : MailFolderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailFolder%2Did"] = id
        return new MailFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.managedAppRegistrations.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppRegistrationItemRequestBuilder
     */
    public managedAppRegistrationsById(id: string) : ManagedAppRegistrationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppRegistration%2Did"] = id
        return new ManagedAppRegistrationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.managedDevices.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceItemRequestBuilder
     */
    public managedDevicesById(id: string) : ManagedDeviceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDevice%2Did"] = id
        return new ManagedDeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : i18f52bf6bc5c1c8b3304492b981916ccf9ebb43631988ec15e02d772cfb00573 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i18f52bf6bc5c1c8b3304492b981916ccf9ebb43631988ec15e02d772cfb00573(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.messages.item collection
     * @param id Unique identifier of the item
     * @returns a messageItemRequestBuilder
     */
    public messagesById(id: string) : MessageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["message%2Did"] = id
        return new MessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.oauth2PermissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a oAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.onlineMeetings.item collection
     * @param id Unique identifier of the item
     * @returns a onlineMeetingItemRequestBuilder
     */
    public onlineMeetingsById(id: string) : OnlineMeetingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onlineMeeting%2Did"] = id
        return new OnlineMeetingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.ownedDevices.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public ownedDevicesById(id: string) : i2aef51b84a32beb2693af5b7b8a2f55a4fd109a7efad565592698239164d682a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i2aef51b84a32beb2693af5b7b8a2f55a4fd109a7efad565592698239164d682a(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.ownedObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public ownedObjectsById(id: string) : i058626e962792aedcea1eb90a3e6876666fcf8731682e43a2bde0e3625fa31da {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i058626e962792aedcea1eb90a3e6876666fcf8731682e43a2bde0e3625fa31da(urlTplParams, this.requestAdapter);
    };
    /**
     * This article provides examples of how to assign, update, or remove different types of custom security attributes for users and applications (service principals). Custom security attributes can be assigned or updated only through a `PATCH` operation in an [Update user](/graph/api/user-update?view=graph-rest-beta&preserve-view=true) or [Update servicePrincipal](/graph/api/serviceprincipal-update?view=graph-rest-beta&preserve-view=true) request.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: User | undefined, requestConfiguration?: UserItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.people.item collection
     * @param id Unique identifier of the item
     * @returns a personItemRequestBuilder
     */
    public peopleById(id: string) : PersonItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["person%2Did"] = id
        return new PersonItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.photos.item collection
     * @param id Unique identifier of the item
     * @returns a profilePhotoItemRequestBuilder
     */
    public photosById(id: string) : ProfilePhotoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["profilePhoto%2Did"] = id
        return new ProfilePhotoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.registeredDevices.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public registeredDevicesById(id: string) : i7d79802aaceac043beca51df3db3db8ed8431b0c91cd8325b5b0abf2ead40bcb {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i7d79802aaceac043beca51df3db3db8ed8431b0c91cd8325b5b0abf2ead40bcb(urlTplParams, this.requestAdapter);
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.scopedRoleMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a scopedRoleMembershipItemRequestBuilder
     */
    public scopedRoleMemberOfById(id: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = id
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : ie63433783ab729cdddec741a9dffe4aaad5418284b12e1dc6e2c6832365f7e14 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ie63433783ab729cdddec741a9dffe4aaad5418284b12e1dc6e2c6832365f7e14(urlTplParams, this.requestAdapter);
    };
}
