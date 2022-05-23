import {AgreementAcceptance} from './agreementAcceptance';
import {AppRoleAssignment} from './appRoleAssignment';
import {AssignedLicense} from './assignedLicense';
import {AssignedPlan} from './assignedPlan';
import {Authentication} from './authentication';
import {Calendar} from './calendar';
import {CalendarGroup} from './calendarGroup';
import {Chat} from './chat';
import {Contact} from './contact';
import {ContactFolder} from './contactFolder';
import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAssignedLicenseFromDiscriminatorValue} from './createAssignedLicenseFromDiscriminatorValue';
import {createAssignedPlanFromDiscriminatorValue} from './createAssignedPlanFromDiscriminatorValue';
import {createAuthenticationFromDiscriminatorValue} from './createAuthenticationFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createCalendarGroupFromDiscriminatorValue} from './createCalendarGroupFromDiscriminatorValue';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDeviceManagementTroubleshootingEventFromDiscriminatorValue} from './createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createEmployeeOrgDataFromDiscriminatorValue} from './createEmployeeOrgDataFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createInferenceClassificationFromDiscriminatorValue} from './createInferenceClassificationFromDiscriminatorValue';
import {createLicenseAssignmentStateFromDiscriminatorValue} from './createLicenseAssignmentStateFromDiscriminatorValue';
import {createLicenseDetailsFromDiscriminatorValue} from './createLicenseDetailsFromDiscriminatorValue';
import {createMailboxSettingsFromDiscriminatorValue} from './createMailboxSettingsFromDiscriminatorValue';
import {createMailFolderFromDiscriminatorValue} from './createMailFolderFromDiscriminatorValue';
import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {createMessageFromDiscriminatorValue} from './createMessageFromDiscriminatorValue';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {createObjectIdentityFromDiscriminatorValue} from './createObjectIdentityFromDiscriminatorValue';
import {createOfficeGraphInsightsFromDiscriminatorValue} from './createOfficeGraphInsightsFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {createOnPremisesExtensionAttributesFromDiscriminatorValue} from './createOnPremisesExtensionAttributesFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createOutlookUserFromDiscriminatorValue} from './createOutlookUserFromDiscriminatorValue';
import {createPasswordProfileFromDiscriminatorValue} from './createPasswordProfileFromDiscriminatorValue';
import {createPersonFromDiscriminatorValue} from './createPersonFromDiscriminatorValue';
import {createPlannerUserFromDiscriminatorValue} from './createPlannerUserFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createProvisionedPlanFromDiscriminatorValue} from './createProvisionedPlanFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTodoFromDiscriminatorValue} from './createTodoFromDiscriminatorValue';
import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {createUserSettingsFromDiscriminatorValue} from './createUserSettingsFromDiscriminatorValue';
import {createUserTeamworkFromDiscriminatorValue} from './createUserTeamworkFromDiscriminatorValue';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {EmployeeOrgData} from './employeeOrgData';
import {Event} from './event';
import {Extension} from './extension';
import {AgreementAcceptanceImpl, AppRoleAssignmentImpl, AssignedLicenseImpl, AssignedPlanImpl, AuthenticationImpl, CalendarGroupImpl, CalendarImpl, ChatImpl, ContactFolderImpl, ContactImpl, DeviceManagementTroubleshootingEventImpl, DirectoryObjectImpl, DriveImpl, EmployeeOrgDataImpl, EventImpl, ExtensionImpl, InferenceClassificationImpl, LicenseAssignmentStateImpl, LicenseDetailsImpl, MailboxSettingsImpl, MailFolderImpl, ManagedAppRegistrationImpl, ManagedDeviceImpl, MessageImpl, OAuth2PermissionGrantImpl, ObjectIdentityImpl, OfficeGraphInsightsImpl, OnenoteImpl, OnlineMeetingImpl, OnPremisesExtensionAttributesImpl, OnPremisesProvisioningErrorImpl, OutlookUserImpl, PasswordProfileImpl, PersonImpl, PlannerUserImpl, PresenceImpl, ProfilePhotoImpl, ProvisionedPlanImpl, ScopedRoleMembershipImpl, SiteImpl, TeamImpl, TodoImpl, UserActivityImpl, UserSettingsImpl, UserTeamworkImpl} from './index';
import {InferenceClassification} from './inferenceClassification';
import {LicenseAssignmentState} from './licenseAssignmentState';
import {LicenseDetails} from './licenseDetails';
import {MailboxSettings} from './mailboxSettings';
import {MailFolder} from './mailFolder';
import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedDevice} from './managedDevice';
import {Message} from './message';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {ObjectIdentity} from './objectIdentity';
import {OfficeGraphInsights} from './officeGraphInsights';
import {Onenote} from './onenote';
import {OnlineMeeting} from './onlineMeeting';
import {OnPremisesExtensionAttributes} from './onPremisesExtensionAttributes';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {OutlookUser} from './outlookUser';
import {PasswordProfile} from './passwordProfile';
import {Person} from './person';
import {PlannerUser} from './plannerUser';
import {Presence} from './presence';
import {ProfilePhoto} from './profilePhoto';
import {ProvisionedPlan} from './provisionedPlan';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Site} from './site';
import {Team} from './team';
import {Todo} from './todo';
import {User} from './user';
import {UserActivity} from './userActivity';
import {UserSettings} from './userSettings';
import {UserTeamwork} from './userTeamwork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class UserImpl extends DirectoryObjectImpl implements Parsable, User {
    /** A freeform text entry field for the user to describe themselves. Returned only on $select. */
    public aboutMe?: string | undefined;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in). */
    public accountEnabled?: boolean | undefined;
    /** The user's activities across devices. Read-only. Nullable. */
    public activities?: UserActivity[] | undefined;
    /** Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    public ageGroup?: string | undefined;
    /** The user's terms of use acceptance statuses. Read-only. Nullable. */
    public agreementAcceptances?: AgreementAcceptance[] | undefined;
    /** Represents the app roles a user has been granted for an application. Supports $expand. */
    public appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq, not, and counting empty collections). */
    public assignedLicenses?: AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and not). */
    public assignedPlans?: AssignedPlan[] | undefined;
    /** TODO: Add Description */
    public authentication?: Authentication | undefined;
    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select. */
    public birthday?: Date | undefined;
    /** The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq, not, ge, le, startsWith). */
    public businessPhones?: string[] | undefined;
    /** The user's primary calendar. Read-only. */
    public calendar?: Calendar | undefined;
    /** The user's calendar groups. Read-only. Nullable. */
    public calendarGroups?: CalendarGroup[] | undefined;
    /** The user's calendars. Read-only. Nullable. */
    public calendars?: Calendar[] | undefined;
    /** The calendar view for the calendar. Read-only. Nullable. */
    public calendarView?: Event[] | undefined;
    /** The chats property */
    public chats?: Chat[] | undefined;
    /** The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public city?: string | undefined;
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public companyName?: string | undefined;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    public consentProvidedForMinor?: string | undefined;
    /** The user's contacts folders. Read-only. Nullable. */
    public contactFolders?: ContactFolder[] | undefined;
    /** The user's contacts. Read-only. Nullable. */
    public contacts?: Contact[] | undefined;
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public country?: string | undefined;
    /** The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, not , ge, le, in). */
    public createdDateTime?: Date | undefined;
    /** Directory objects that were created by the user. Read-only. Nullable. */
    public createdObjects?: DirectoryObject[] | undefined;
    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in). */
    public creationType?: string | undefined;
    /** The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values). */
    public department?: string | undefined;
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000. */
    public deviceEnrollmentLimit?: number | undefined;
    /** The list of troubleshooting events for this user. */
    public deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[] | undefined;
    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand. */
    public directReports?: DirectoryObject[] | undefined;
    /** The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search. */
    public displayName?: string | undefined;
    /** The user's OneDrive. Read-only. */
    public drive?: Drive | undefined;
    /** A collection of drives available for this user. Read-only. */
    public drives?: Drive[] | undefined;
    /** The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, not , ge, le, in). */
    public employeeHireDate?: Date | undefined;
    /** The employee identifier assigned to the user by the organization. The maximum length is 16 characters.Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    public employeeId?: string | undefined;
    /** Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, not , ge, le, in). */
    public employeeOrgData?: EmployeeOrgData | undefined;
    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith). */
    public employeeType?: string | undefined;
    /** The user's events. Default is to show events under the Default Calendar. Read-only. Nullable. */
    public events?: Event[] | undefined;
    /** The collection of open extensions defined for the user. Nullable. */
    public extensions?: Extension[] | undefined;
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in). */
    public externalUserState?: string | undefined;
    /** Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in). */
    public externalUserStateChangeDateTime?: Date | undefined;
    /** The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    public faxNumber?: string | undefined;
    /** The followedSites property */
    public followedSites?: Site[] | undefined;
    /** The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    public givenName?: string | undefined;
    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs. */
    public hireDate?: Date | undefined;
    /** Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName. */
    public identities?: ObjectIdentity[] | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, not, ge, le, startsWith). */
    public imAddresses?: string[] | undefined;
    /** Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance. */
    public inferenceClassification?: InferenceClassification | undefined;
    /** Read-only. Nullable. */
    public insights?: OfficeGraphInsights | undefined;
    /** A list for the user to describe their interests. Returned only on $select. */
    public interests?: string[] | undefined;
    /** Do not use – reserved for future use. */
    public isResourceAccount?: boolean | undefined;
    /** The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    public jobTitle?: string | undefined;
    /** The Microsoft Teams teams that the user is a member of. Read-only. Nullable. */
    public joinedTeams?: Team[] | undefined;
    /** The time when this Azure AD user last changed their password or when their password was created, , whichever date the latest action was performed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. */
    public lastPasswordChangeDateTime?: Date | undefined;
    /** Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. */
    public legalAgeGroupClassification?: string | undefined;
    /** State of license assignments for this user. Read-only. Returned only on $select. */
    public licenseAssignmentStates?: LicenseAssignmentState[] | undefined;
    /** A collection of this user's license details. Read-only. */
    public licenseDetails?: LicenseDetails[] | undefined;
    /** The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.  Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values). */
    public mail?: string | undefined;
    /** Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select. */
    public mailboxSettings?: MailboxSettings | undefined;
    /** The user's mail folders. Read-only. Nullable. */
    public mailFolders?: MailFolder[] | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public mailNickname?: string | undefined;
    /** Zero or more managed app registrations that belong to the user. */
    public managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /** The managed devices associated with the user. */
    public managedDevices?: ManagedDevice[] | undefined;
    /** The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand. */
    public manager?: DirectoryObject | undefined;
    /** The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand. */
    public memberOf?: DirectoryObject[] | undefined;
    /** The messages in a mailbox or folder. Read-only. Nullable. */
    public messages?: Message[] | undefined;
    /** The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public mobilePhone?: string | undefined;
    /** The URL for the user's personal site. Returned only on $select. */
    public mySite?: string | undefined;
    /** The oauth2PermissionGrants property */
    public oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public officeLocation?: string | undefined;
    /** Read-only. */
    public onenote?: Onenote | undefined;
    /** The onlineMeetings property */
    public onlineMeetings?: OnlineMeeting[] | undefined;
    /** Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    public onPremisesDistinguishedName?: string | undefined;
    /** Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    public onPremisesDomainName?: string | undefined;
    /** Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15. Returned only on $select. */
    public onPremisesExtensionAttributes?: OnPremisesExtensionAttributes | undefined;
    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, not, ge, le, in). */
    public onPremisesImmutableId?: string | undefined;
    /** Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    public onPremisesLastSyncDateTime?: Date | undefined;
    /** Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, not, ge, le). */
    public onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    public onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Supports $filter (eq including on null values). */
    public onPremisesSecurityIdentifier?: string | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    public onPremisesSyncEnabled?: boolean | undefined;
    /** Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    public onPremisesUserPrincipalName?: string | undefined;
    /** A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: This property cannot contain accent characters.Supports $filter (eq, not, ge, le, in, startsWith, and counting empty collections). */
    public otherMails?: string[] | undefined;
    /** Selective Outlook services available to the user. Read-only. Nullable. */
    public outlook?: OutlookUser | undefined;
    /** Devices that are owned by the user. Read-only. Nullable. Supports $expand. */
    public ownedDevices?: DirectoryObject[] | undefined;
    /** Directory objects that are owned by the user. Read-only. Nullable. Supports $expand. */
    public ownedObjects?: DirectoryObject[] | undefined;
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values). */
    public passwordPolicies?: string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, not, in, and eq on null values). */
    public passwordProfile?: PasswordProfile | undefined;
    /** A list for the user to enumerate their past projects. Returned only on $select. */
    public pastProjects?: string[] | undefined;
    /** Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks. */
    public people?: Person[] | undefined;
    /** The user's profile photo. Read-only. */
    public photo?: ProfilePhoto | undefined;
    /** Read-only. Nullable. */
    public photos?: ProfilePhoto[] | undefined;
    /** Selective Planner services available to the user. Read-only. Nullable. */
    public planner?: PlannerUser | undefined;
    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public postalCode?: string | undefined;
    /** The preferred data location for the user. For more information, see OneDrive Online Multi-Geo. */
    public preferredDataLocation?: string | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public preferredLanguage?: string | undefined;
    /** The preferred name for the user. Returned only on $select. */
    public preferredName?: string | undefined;
    /** The presence property */
    public presence?: Presence | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, not, ge, le). */
    public provisionedPlans?: ProvisionedPlan[] | undefined;
    /** For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections). */
    public proxyAddresses?: string[] | undefined;
    /** Devices that are registered for the user. Read-only. Nullable. Supports $expand. */
    public registeredDevices?: DirectoryObject[] | undefined;
    /** A list for the user to enumerate their responsibilities. Returned only on $select. */
    public responsibilities?: string[] | undefined;
    /** A list for the user to enumerate the schools they have attended. Returned only on $select. */
    public schools?: string[] | undefined;
    /** The scoped-role administrative unit memberships for this user. Read-only. Nullable. */
    public scopedRoleMemberOf?: ScopedRoleMembership[] | undefined;
    /** Read-only. Nullable. */
    public settings?: UserSettings | undefined;
    /** true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Supports $filter (eq, ne, not, in). */
    public showInAddressList?: boolean | undefined;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. */
    public signInSessionsValidFromDateTime?: Date | undefined;
    /** A list for the user to enumerate their skills. Returned only on $select. */
    public skills?: string[] | undefined;
    /** The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public state?: string | undefined;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public streetAddress?: string | undefined;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public surname?: string | undefined;
    /** A container for Microsoft Teams features available for the user. Read-only. Nullable. */
    public teamwork?: UserTeamwork | undefined;
    /** Represents the To Do services available to a user. */
    public todo?: Todo | undefined;
    /** The transitiveMemberOf property */
    public transitiveMemberOf?: DirectoryObject[] | undefined;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public usageLocation?: string | undefined;
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy. */
    public userPrincipalName?: string | undefined;
    /** A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory? */
    public userType?: string | undefined;
    /**
     * Instantiates a new user and sets the default values.
     * @param userParameterValue 
     */
    public constructor(userParameterValue?: User | undefined) {
        super();
        this.aboutMe = userParameterValue?.aboutMe ;
        this.accountEnabled = userParameterValue?.accountEnabled ;
        this.activities = userParameterValue?.activities ;
        this.ageGroup = userParameterValue?.ageGroup ;
        this.agreementAcceptances = userParameterValue?.agreementAcceptances ;
        this.appRoleAssignments = userParameterValue?.appRoleAssignments ;
        this.assignedLicenses = userParameterValue?.assignedLicenses ;
        this.assignedPlans = userParameterValue?.assignedPlans ;
        this.authentication = userParameterValue?.authentication ;
        this.birthday = userParameterValue?.birthday ;
        this.businessPhones = userParameterValue?.businessPhones ;
        this.calendar = userParameterValue?.calendar ;
        this.calendarGroups = userParameterValue?.calendarGroups ;
        this.calendars = userParameterValue?.calendars ;
        this.calendarView = userParameterValue?.calendarView ;
        this.chats = userParameterValue?.chats ;
        this.city = userParameterValue?.city ;
        this.companyName = userParameterValue?.companyName ;
        this.consentProvidedForMinor = userParameterValue?.consentProvidedForMinor ;
        this.contactFolders = userParameterValue?.contactFolders ;
        this.contacts = userParameterValue?.contacts ;
        this.country = userParameterValue?.country ;
        this.createdDateTime = userParameterValue?.createdDateTime ;
        this.createdObjects = userParameterValue?.createdObjects ;
        this.creationType = userParameterValue?.creationType ;
        this.department = userParameterValue?.department ;
        this.deviceEnrollmentLimit = userParameterValue?.deviceEnrollmentLimit ;
        this.deviceManagementTroubleshootingEvents = userParameterValue?.deviceManagementTroubleshootingEvents ;
        this.directReports = userParameterValue?.directReports ;
        this.displayName = userParameterValue?.displayName ;
        this.drive = userParameterValue?.drive ;
        this.drives = userParameterValue?.drives ;
        this.employeeHireDate = userParameterValue?.employeeHireDate ;
        this.employeeId = userParameterValue?.employeeId ;
        this.employeeOrgData = userParameterValue?.employeeOrgData ;
        this.employeeType = userParameterValue?.employeeType ;
        this.events = userParameterValue?.events ;
        this.extensions = userParameterValue?.extensions ;
        this.externalUserState = userParameterValue?.externalUserState ;
        this.externalUserStateChangeDateTime = userParameterValue?.externalUserStateChangeDateTime ;
        this.faxNumber = userParameterValue?.faxNumber ;
        this.followedSites = userParameterValue?.followedSites ;
        this.givenName = userParameterValue?.givenName ;
        this.hireDate = userParameterValue?.hireDate ;
        this.identities = userParameterValue?.identities ;
        this.imAddresses = userParameterValue?.imAddresses ;
        this.inferenceClassification = userParameterValue?.inferenceClassification ;
        this.insights = userParameterValue?.insights ;
        this.interests = userParameterValue?.interests ;
        this.isResourceAccount = userParameterValue?.isResourceAccount ;
        this.jobTitle = userParameterValue?.jobTitle ;
        this.joinedTeams = userParameterValue?.joinedTeams ;
        this.lastPasswordChangeDateTime = userParameterValue?.lastPasswordChangeDateTime ;
        this.legalAgeGroupClassification = userParameterValue?.legalAgeGroupClassification ;
        this.licenseAssignmentStates = userParameterValue?.licenseAssignmentStates ;
        this.licenseDetails = userParameterValue?.licenseDetails ;
        this.mail = userParameterValue?.mail ;
        this.mailboxSettings = userParameterValue?.mailboxSettings ;
        this.mailFolders = userParameterValue?.mailFolders ;
        this.mailNickname = userParameterValue?.mailNickname ;
        this.managedAppRegistrations = userParameterValue?.managedAppRegistrations ;
        this.managedDevices = userParameterValue?.managedDevices ;
        this.manager = userParameterValue?.manager ;
        this.memberOf = userParameterValue?.memberOf ;
        this.messages = userParameterValue?.messages ;
        this.mobilePhone = userParameterValue?.mobilePhone ;
        this.mySite = userParameterValue?.mySite ;
        this.oauth2PermissionGrants = userParameterValue?.oauth2PermissionGrants ;
        this.officeLocation = userParameterValue?.officeLocation ;
        this.onenote = userParameterValue?.onenote ;
        this.onlineMeetings = userParameterValue?.onlineMeetings ;
        this.onPremisesDistinguishedName = userParameterValue?.onPremisesDistinguishedName ;
        this.onPremisesDomainName = userParameterValue?.onPremisesDomainName ;
        this.onPremisesExtensionAttributes = userParameterValue?.onPremisesExtensionAttributes ;
        this.onPremisesImmutableId = userParameterValue?.onPremisesImmutableId ;
        this.onPremisesLastSyncDateTime = userParameterValue?.onPremisesLastSyncDateTime ;
        this.onPremisesProvisioningErrors = userParameterValue?.onPremisesProvisioningErrors ;
        this.onPremisesSamAccountName = userParameterValue?.onPremisesSamAccountName ;
        this.onPremisesSecurityIdentifier = userParameterValue?.onPremisesSecurityIdentifier ;
        this.onPremisesSyncEnabled = userParameterValue?.onPremisesSyncEnabled ;
        this.onPremisesUserPrincipalName = userParameterValue?.onPremisesUserPrincipalName ;
        this.otherMails = userParameterValue?.otherMails ;
        this.outlook = userParameterValue?.outlook ;
        this.ownedDevices = userParameterValue?.ownedDevices ;
        this.ownedObjects = userParameterValue?.ownedObjects ;
        this.passwordPolicies = userParameterValue?.passwordPolicies ;
        this.passwordProfile = userParameterValue?.passwordProfile ;
        this.pastProjects = userParameterValue?.pastProjects ;
        this.people = userParameterValue?.people ;
        this.photo = userParameterValue?.photo ;
        this.photos = userParameterValue?.photos ;
        this.planner = userParameterValue?.planner ;
        this.postalCode = userParameterValue?.postalCode ;
        this.preferredDataLocation = userParameterValue?.preferredDataLocation ;
        this.preferredLanguage = userParameterValue?.preferredLanguage ;
        this.preferredName = userParameterValue?.preferredName ;
        this.presence = userParameterValue?.presence ;
        this.provisionedPlans = userParameterValue?.provisionedPlans ;
        this.proxyAddresses = userParameterValue?.proxyAddresses ;
        this.registeredDevices = userParameterValue?.registeredDevices ;
        this.responsibilities = userParameterValue?.responsibilities ;
        this.schools = userParameterValue?.schools ;
        this.scopedRoleMemberOf = userParameterValue?.scopedRoleMemberOf ;
        this.settings = userParameterValue?.settings ;
        this.showInAddressList = userParameterValue?.showInAddressList ;
        this.signInSessionsValidFromDateTime = userParameterValue?.signInSessionsValidFromDateTime ;
        this.skills = userParameterValue?.skills ;
        this.state = userParameterValue?.state ;
        this.streetAddress = userParameterValue?.streetAddress ;
        this.surname = userParameterValue?.surname ;
        this.teamwork = userParameterValue?.teamwork ;
        this.todo = userParameterValue?.todo ;
        this.transitiveMemberOf = userParameterValue?.transitiveMemberOf ;
        this.usageLocation = userParameterValue?.usageLocation ;
        this.userPrincipalName = userParameterValue?.userPrincipalName ;
        this.userType = userParameterValue?.userType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "aboutMe": n => { this.aboutMe = n.getStringValue(); },
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "activities": n => { this.activities = n.getCollectionOfObjectValues<UserActivityImpl>(createUserActivityFromDiscriminatorValue); },
            "ageGroup": n => { this.ageGroup = n.getStringValue(); },
            "agreementAcceptances": n => { this.agreementAcceptances = n.getCollectionOfObjectValues<AgreementAcceptanceImpl>(createAgreementAcceptanceFromDiscriminatorValue); },
            "appRoleAssignments": n => { this.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignmentImpl>(createAppRoleAssignmentFromDiscriminatorValue); },
            "assignedLicenses": n => { this.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicenseImpl>(createAssignedLicenseFromDiscriminatorValue); },
            "assignedPlans": n => { this.assignedPlans = n.getCollectionOfObjectValues<AssignedPlanImpl>(createAssignedPlanFromDiscriminatorValue); },
            "authentication": n => { this.authentication = n.getObjectValue<AuthenticationImpl>(createAuthenticationFromDiscriminatorValue); },
            "birthday": n => { this.birthday = n.getDateValue(); },
            "businessPhones": n => { this.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
            "calendar": n => { this.calendar = n.getObjectValue<CalendarImpl>(createCalendarFromDiscriminatorValue); },
            "calendarGroups": n => { this.calendarGroups = n.getCollectionOfObjectValues<CalendarGroupImpl>(createCalendarGroupFromDiscriminatorValue); },
            "calendars": n => { this.calendars = n.getCollectionOfObjectValues<CalendarImpl>(createCalendarFromDiscriminatorValue); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "chats": n => { this.chats = n.getCollectionOfObjectValues<ChatImpl>(createChatFromDiscriminatorValue); },
            "city": n => { this.city = n.getStringValue(); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "consentProvidedForMinor": n => { this.consentProvidedForMinor = n.getStringValue(); },
            "contactFolders": n => { this.contactFolders = n.getCollectionOfObjectValues<ContactFolderImpl>(createContactFolderFromDiscriminatorValue); },
            "contacts": n => { this.contacts = n.getCollectionOfObjectValues<ContactImpl>(createContactFromDiscriminatorValue); },
            "country": n => { this.country = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdObjects": n => { this.createdObjects = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "creationType": n => { this.creationType = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "deviceEnrollmentLimit": n => { this.deviceEnrollmentLimit = n.getNumberValue(); },
            "deviceManagementTroubleshootingEvents": n => { this.deviceManagementTroubleshootingEvents = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEventImpl>(createDeviceManagementTroubleshootingEventFromDiscriminatorValue); },
            "directReports": n => { this.directReports = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<DriveImpl>(createDriveFromDiscriminatorValue); },
            "drives": n => { this.drives = n.getCollectionOfObjectValues<DriveImpl>(createDriveFromDiscriminatorValue); },
            "employeeHireDate": n => { this.employeeHireDate = n.getDateValue(); },
            "employeeId": n => { this.employeeId = n.getStringValue(); },
            "employeeOrgData": n => { this.employeeOrgData = n.getObjectValue<EmployeeOrgDataImpl>(createEmployeeOrgDataFromDiscriminatorValue); },
            "employeeType": n => { this.employeeType = n.getStringValue(); },
            "events": n => { this.events = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "externalUserState": n => { this.externalUserState = n.getStringValue(); },
            "externalUserStateChangeDateTime": n => { this.externalUserStateChangeDateTime = n.getDateValue(); },
            "faxNumber": n => { this.faxNumber = n.getStringValue(); },
            "followedSites": n => { this.followedSites = n.getCollectionOfObjectValues<SiteImpl>(createSiteFromDiscriminatorValue); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "hireDate": n => { this.hireDate = n.getDateValue(); },
            "identities": n => { this.identities = n.getCollectionOfObjectValues<ObjectIdentityImpl>(createObjectIdentityFromDiscriminatorValue); },
            "imAddresses": n => { this.imAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "inferenceClassification": n => { this.inferenceClassification = n.getObjectValue<InferenceClassificationImpl>(createInferenceClassificationFromDiscriminatorValue); },
            "insights": n => { this.insights = n.getObjectValue<OfficeGraphInsightsImpl>(createOfficeGraphInsightsFromDiscriminatorValue); },
            "interests": n => { this.interests = n.getCollectionOfPrimitiveValues<string>(); },
            "isResourceAccount": n => { this.isResourceAccount = n.getBooleanValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "joinedTeams": n => { this.joinedTeams = n.getCollectionOfObjectValues<TeamImpl>(createTeamFromDiscriminatorValue); },
            "lastPasswordChangeDateTime": n => { this.lastPasswordChangeDateTime = n.getDateValue(); },
            "legalAgeGroupClassification": n => { this.legalAgeGroupClassification = n.getStringValue(); },
            "licenseAssignmentStates": n => { this.licenseAssignmentStates = n.getCollectionOfObjectValues<LicenseAssignmentStateImpl>(createLicenseAssignmentStateFromDiscriminatorValue); },
            "licenseDetails": n => { this.licenseDetails = n.getCollectionOfObjectValues<LicenseDetailsImpl>(createLicenseDetailsFromDiscriminatorValue); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailboxSettings": n => { this.mailboxSettings = n.getObjectValue<MailboxSettingsImpl>(createMailboxSettingsFromDiscriminatorValue); },
            "mailFolders": n => { this.mailFolders = n.getCollectionOfObjectValues<MailFolderImpl>(createMailFolderFromDiscriminatorValue); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "managedAppRegistrations": n => { this.managedAppRegistrations = n.getCollectionOfObjectValues<ManagedAppRegistrationImpl>(createManagedAppRegistrationFromDiscriminatorValue); },
            "managedDevices": n => { this.managedDevices = n.getCollectionOfObjectValues<ManagedDeviceImpl>(createManagedDeviceFromDiscriminatorValue); },
            "manager": n => { this.manager = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<MessageImpl>(createMessageFromDiscriminatorValue); },
            "mobilePhone": n => { this.mobilePhone = n.getStringValue(); },
            "mySite": n => { this.mySite = n.getStringValue(); },
            "oauth2PermissionGrants": n => { this.oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrantImpl>(createOAuth2PermissionGrantFromDiscriminatorValue); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "onenote": n => { this.onenote = n.getObjectValue<OnenoteImpl>(createOnenoteFromDiscriminatorValue); },
            "onlineMeetings": n => { this.onlineMeetings = n.getCollectionOfObjectValues<OnlineMeetingImpl>(createOnlineMeetingFromDiscriminatorValue); },
            "onPremisesDistinguishedName": n => { this.onPremisesDistinguishedName = n.getStringValue(); },
            "onPremisesDomainName": n => { this.onPremisesDomainName = n.getStringValue(); },
            "onPremisesExtensionAttributes": n => { this.onPremisesExtensionAttributes = n.getObjectValue<OnPremisesExtensionAttributesImpl>(createOnPremisesExtensionAttributesFromDiscriminatorValue); },
            "onPremisesImmutableId": n => { this.onPremisesImmutableId = n.getStringValue(); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesProvisioningErrors": n => { this.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
            "onPremisesSamAccountName": n => { this.onPremisesSamAccountName = n.getStringValue(); },
            "onPremisesSecurityIdentifier": n => { this.onPremisesSecurityIdentifier = n.getStringValue(); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "onPremisesUserPrincipalName": n => { this.onPremisesUserPrincipalName = n.getStringValue(); },
            "otherMails": n => { this.otherMails = n.getCollectionOfPrimitiveValues<string>(); },
            "outlook": n => { this.outlook = n.getObjectValue<OutlookUserImpl>(createOutlookUserFromDiscriminatorValue); },
            "ownedDevices": n => { this.ownedDevices = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "ownedObjects": n => { this.ownedObjects = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "passwordPolicies": n => { this.passwordPolicies = n.getStringValue(); },
            "passwordProfile": n => { this.passwordProfile = n.getObjectValue<PasswordProfileImpl>(createPasswordProfileFromDiscriminatorValue); },
            "pastProjects": n => { this.pastProjects = n.getCollectionOfPrimitiveValues<string>(); },
            "people": n => { this.people = n.getCollectionOfObjectValues<PersonImpl>(createPersonFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<ProfilePhotoImpl>(createProfilePhotoFromDiscriminatorValue); },
            "photos": n => { this.photos = n.getCollectionOfObjectValues<ProfilePhotoImpl>(createProfilePhotoFromDiscriminatorValue); },
            "planner": n => { this.planner = n.getObjectValue<PlannerUserImpl>(createPlannerUserFromDiscriminatorValue); },
            "postalCode": n => { this.postalCode = n.getStringValue(); },
            "preferredDataLocation": n => { this.preferredDataLocation = n.getStringValue(); },
            "preferredLanguage": n => { this.preferredLanguage = n.getStringValue(); },
            "preferredName": n => { this.preferredName = n.getStringValue(); },
            "presence": n => { this.presence = n.getObjectValue<PresenceImpl>(createPresenceFromDiscriminatorValue); },
            "provisionedPlans": n => { this.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlanImpl>(createProvisionedPlanFromDiscriminatorValue); },
            "proxyAddresses": n => { this.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "registeredDevices": n => { this.registeredDevices = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "responsibilities": n => { this.responsibilities = n.getCollectionOfPrimitiveValues<string>(); },
            "schools": n => { this.schools = n.getCollectionOfPrimitiveValues<string>(); },
            "scopedRoleMemberOf": n => { this.scopedRoleMemberOf = n.getCollectionOfObjectValues<ScopedRoleMembershipImpl>(createScopedRoleMembershipFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<UserSettingsImpl>(createUserSettingsFromDiscriminatorValue); },
            "showInAddressList": n => { this.showInAddressList = n.getBooleanValue(); },
            "signInSessionsValidFromDateTime": n => { this.signInSessionsValidFromDateTime = n.getDateValue(); },
            "skills": n => { this.skills = n.getCollectionOfPrimitiveValues<string>(); },
            "state": n => { this.state = n.getStringValue(); },
            "streetAddress": n => { this.streetAddress = n.getStringValue(); },
            "surname": n => { this.surname = n.getStringValue(); },
            "teamwork": n => { this.teamwork = n.getObjectValue<UserTeamworkImpl>(createUserTeamworkFromDiscriminatorValue); },
            "todo": n => { this.todo = n.getObjectValue<TodoImpl>(createTodoFromDiscriminatorValue); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "usageLocation": n => { this.usageLocation = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "userType": n => { this.userType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.aboutMe){
        writer.writeStringValue("aboutMe", this.aboutMe);
        }
        if(this.accountEnabled){
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        }
        if(this.activities && this.activities.length != 0){        const activitiesArrValue: UserActivityImpl[] = []; this.activities?.forEach(element => {activitiesArrValue.push(new UserActivityImpl(element));});
        writer.writeCollectionOfObjectValues<UserActivityImpl>("activities", activitiesArrValue);
        }
        if(this.ageGroup){
        writer.writeStringValue("ageGroup", this.ageGroup);
        }
        if(this.agreementAcceptances && this.agreementAcceptances.length != 0){        const agreementAcceptancesArrValue: AgreementAcceptanceImpl[] = []; this.agreementAcceptances?.forEach(element => {agreementAcceptancesArrValue.push(new AgreementAcceptanceImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementAcceptanceImpl>("agreementAcceptances", agreementAcceptancesArrValue);
        }
        if(this.appRoleAssignments && this.appRoleAssignments.length != 0){        const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = []; this.appRoleAssignments?.forEach(element => {appRoleAssignmentsArrValue.push(new AppRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignments", appRoleAssignmentsArrValue);
        }
        if(this.assignedLicenses && this.assignedLicenses.length != 0){        const assignedLicensesArrValue: AssignedLicenseImpl[] = []; this.assignedLicenses?.forEach(element => {assignedLicensesArrValue.push(new AssignedLicenseImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("assignedLicenses", assignedLicensesArrValue);
        }
        if(this.assignedPlans && this.assignedPlans.length != 0){        const assignedPlansArrValue: AssignedPlanImpl[] = []; this.assignedPlans?.forEach(element => {assignedPlansArrValue.push(new AssignedPlanImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedPlanImpl>("assignedPlans", assignedPlansArrValue);
        }
        if(this.authentication){
        writer.writeObjectValue<AuthenticationImpl>("authentication", new AuthenticationImpl(this.authentication));
        }
        if(this.birthday){
        writer.writeDateValue("birthday", this.birthday);
        }
        if(this.businessPhones){
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.calendar){
        writer.writeObjectValue<CalendarImpl>("calendar", new CalendarImpl(this.calendar));
        }
        if(this.calendarGroups && this.calendarGroups.length != 0){        const calendarGroupsArrValue: CalendarGroupImpl[] = []; this.calendarGroups?.forEach(element => {calendarGroupsArrValue.push(new CalendarGroupImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarGroupImpl>("calendarGroups", calendarGroupsArrValue);
        }
        if(this.calendars && this.calendars.length != 0){        const calendarsArrValue: CalendarImpl[] = []; this.calendars?.forEach(element => {calendarsArrValue.push(new CalendarImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarImpl>("calendars", calendarsArrValue);
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: EventImpl[] = []; this.calendarView?.forEach(element => {calendarViewArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("calendarView", calendarViewArrValue);
        }
        if(this.chats && this.chats.length != 0){        const chatsArrValue: ChatImpl[] = []; this.chats?.forEach(element => {chatsArrValue.push(new ChatImpl(element));});
        writer.writeCollectionOfObjectValues<ChatImpl>("chats", chatsArrValue);
        }
        if(this.city){
        writer.writeStringValue("city", this.city);
        }
        if(this.companyName){
        writer.writeStringValue("companyName", this.companyName);
        }
        if(this.consentProvidedForMinor){
        writer.writeStringValue("consentProvidedForMinor", this.consentProvidedForMinor);
        }
        if(this.contactFolders && this.contactFolders.length != 0){        const contactFoldersArrValue: ContactFolderImpl[] = []; this.contactFolders?.forEach(element => {contactFoldersArrValue.push(new ContactFolderImpl(element));});
        writer.writeCollectionOfObjectValues<ContactFolderImpl>("contactFolders", contactFoldersArrValue);
        }
        if(this.contacts && this.contacts.length != 0){        const contactsArrValue: ContactImpl[] = []; this.contacts?.forEach(element => {contactsArrValue.push(new ContactImpl(element));});
        writer.writeCollectionOfObjectValues<ContactImpl>("contacts", contactsArrValue);
        }
        if(this.country){
        writer.writeStringValue("country", this.country);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdObjects && this.createdObjects.length != 0){        const createdObjectsArrValue: DirectoryObjectImpl[] = []; this.createdObjects?.forEach(element => {createdObjectsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("createdObjects", createdObjectsArrValue);
        }
        if(this.creationType){
        writer.writeStringValue("creationType", this.creationType);
        }
        if(this.department){
        writer.writeStringValue("department", this.department);
        }
        if(this.deviceEnrollmentLimit){
        writer.writeNumberValue("deviceEnrollmentLimit", this.deviceEnrollmentLimit);
        }
        if(this.deviceManagementTroubleshootingEvents && this.deviceManagementTroubleshootingEvents.length != 0){        const deviceManagementTroubleshootingEventsArrValue: DeviceManagementTroubleshootingEventImpl[] = []; this.deviceManagementTroubleshootingEvents?.forEach(element => {deviceManagementTroubleshootingEventsArrValue.push(new DeviceManagementTroubleshootingEventImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEventImpl>("deviceManagementTroubleshootingEvents", deviceManagementTroubleshootingEventsArrValue);
        }
        if(this.directReports && this.directReports.length != 0){        const directReportsArrValue: DirectoryObjectImpl[] = []; this.directReports?.forEach(element => {directReportsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("directReports", directReportsArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
        writer.writeObjectValue<DriveImpl>("drive", new DriveImpl(this.drive));
        }
        if(this.drives && this.drives.length != 0){        const drivesArrValue: DriveImpl[] = []; this.drives?.forEach(element => {drivesArrValue.push(new DriveImpl(element));});
        writer.writeCollectionOfObjectValues<DriveImpl>("drives", drivesArrValue);
        }
        if(this.employeeHireDate){
        writer.writeDateValue("employeeHireDate", this.employeeHireDate);
        }
        if(this.employeeId){
        writer.writeStringValue("employeeId", this.employeeId);
        }
        if(this.employeeOrgData){
        writer.writeObjectValue<EmployeeOrgDataImpl>("employeeOrgData", new EmployeeOrgDataImpl(this.employeeOrgData));
        }
        if(this.employeeType){
        writer.writeStringValue("employeeType", this.employeeType);
        }
        if(this.events && this.events.length != 0){        const eventsArrValue: EventImpl[] = []; this.events?.forEach(element => {eventsArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("events", eventsArrValue);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.externalUserState){
        writer.writeStringValue("externalUserState", this.externalUserState);
        }
        if(this.externalUserStateChangeDateTime){
        writer.writeDateValue("externalUserStateChangeDateTime", this.externalUserStateChangeDateTime);
        }
        if(this.faxNumber){
        writer.writeStringValue("faxNumber", this.faxNumber);
        }
        if(this.followedSites && this.followedSites.length != 0){        const followedSitesArrValue: SiteImpl[] = []; this.followedSites?.forEach(element => {followedSitesArrValue.push(new SiteImpl(element));});
        writer.writeCollectionOfObjectValues<SiteImpl>("followedSites", followedSitesArrValue);
        }
        if(this.givenName){
        writer.writeStringValue("givenName", this.givenName);
        }
        if(this.hireDate){
        writer.writeDateValue("hireDate", this.hireDate);
        }
        if(this.identities && this.identities.length != 0){        const identitiesArrValue: ObjectIdentityImpl[] = []; this.identities?.forEach(element => {identitiesArrValue.push(new ObjectIdentityImpl(element));});
        writer.writeCollectionOfObjectValues<ObjectIdentityImpl>("identities", identitiesArrValue);
        }
        if(this.imAddresses){
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", this.imAddresses);
        }
        if(this.inferenceClassification){
        writer.writeObjectValue<InferenceClassificationImpl>("inferenceClassification", new InferenceClassificationImpl(this.inferenceClassification));
        }
        if(this.insights){
        writer.writeObjectValue<OfficeGraphInsightsImpl>("insights", new OfficeGraphInsightsImpl(this.insights));
        }
        if(this.interests){
        writer.writeCollectionOfPrimitiveValues<string>("interests", this.interests);
        }
        if(this.isResourceAccount){
        writer.writeBooleanValue("isResourceAccount", this.isResourceAccount);
        }
        if(this.jobTitle){
        writer.writeStringValue("jobTitle", this.jobTitle);
        }
        if(this.joinedTeams && this.joinedTeams.length != 0){        const joinedTeamsArrValue: TeamImpl[] = []; this.joinedTeams?.forEach(element => {joinedTeamsArrValue.push(new TeamImpl(element));});
        writer.writeCollectionOfObjectValues<TeamImpl>("joinedTeams", joinedTeamsArrValue);
        }
        if(this.lastPasswordChangeDateTime){
        writer.writeDateValue("lastPasswordChangeDateTime", this.lastPasswordChangeDateTime);
        }
        if(this.legalAgeGroupClassification){
        writer.writeStringValue("legalAgeGroupClassification", this.legalAgeGroupClassification);
        }
        if(this.licenseAssignmentStates && this.licenseAssignmentStates.length != 0){        const licenseAssignmentStatesArrValue: LicenseAssignmentStateImpl[] = []; this.licenseAssignmentStates?.forEach(element => {licenseAssignmentStatesArrValue.push(new LicenseAssignmentStateImpl(element));});
        writer.writeCollectionOfObjectValues<LicenseAssignmentStateImpl>("licenseAssignmentStates", licenseAssignmentStatesArrValue);
        }
        if(this.licenseDetails && this.licenseDetails.length != 0){        const licenseDetailsArrValue: LicenseDetailsImpl[] = []; this.licenseDetails?.forEach(element => {licenseDetailsArrValue.push(new LicenseDetailsImpl(element));});
        writer.writeCollectionOfObjectValues<LicenseDetailsImpl>("licenseDetails", licenseDetailsArrValue);
        }
        if(this.mail){
        writer.writeStringValue("mail", this.mail);
        }
        if(this.mailboxSettings){
        writer.writeObjectValue<MailboxSettingsImpl>("mailboxSettings", new MailboxSettingsImpl(this.mailboxSettings));
        }
        if(this.mailFolders && this.mailFolders.length != 0){        const mailFoldersArrValue: MailFolderImpl[] = []; this.mailFolders?.forEach(element => {mailFoldersArrValue.push(new MailFolderImpl(element));});
        writer.writeCollectionOfObjectValues<MailFolderImpl>("mailFolders", mailFoldersArrValue);
        }
        if(this.mailNickname){
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.managedAppRegistrations && this.managedAppRegistrations.length != 0){        const managedAppRegistrationsArrValue: ManagedAppRegistrationImpl[] = []; this.managedAppRegistrations?.forEach(element => {managedAppRegistrationsArrValue.push(new ManagedAppRegistrationImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppRegistrationImpl>("managedAppRegistrations", managedAppRegistrationsArrValue);
        }
        if(this.managedDevices && this.managedDevices.length != 0){        const managedDevicesArrValue: ManagedDeviceImpl[] = []; this.managedDevices?.forEach(element => {managedDevicesArrValue.push(new ManagedDeviceImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceImpl>("managedDevices", managedDevicesArrValue);
        }
        if(this.manager){
        writer.writeObjectValue<DirectoryObjectImpl>("manager", new DirectoryObjectImpl(this.manager));
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = []; this.memberOf?.forEach(element => {memberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: MessageImpl[] = []; this.messages?.forEach(element => {messagesArrValue.push(new MessageImpl(element));});
        writer.writeCollectionOfObjectValues<MessageImpl>("messages", messagesArrValue);
        }
        if(this.mobilePhone){
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        }
        if(this.mySite){
        writer.writeStringValue("mySite", this.mySite);
        }
        if(this.oauth2PermissionGrants && this.oauth2PermissionGrants.length != 0){        const oauth2PermissionGrantsArrValue: OAuth2PermissionGrantImpl[] = []; this.oauth2PermissionGrants?.forEach(element => {oauth2PermissionGrantsArrValue.push(new OAuth2PermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrantImpl>("oauth2PermissionGrants", oauth2PermissionGrantsArrValue);
        }
        if(this.officeLocation){
        writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.onenote){
        writer.writeObjectValue<OnenoteImpl>("onenote", new OnenoteImpl(this.onenote));
        }
        if(this.onlineMeetings && this.onlineMeetings.length != 0){        const onlineMeetingsArrValue: OnlineMeetingImpl[] = []; this.onlineMeetings?.forEach(element => {onlineMeetingsArrValue.push(new OnlineMeetingImpl(element));});
        writer.writeCollectionOfObjectValues<OnlineMeetingImpl>("onlineMeetings", onlineMeetingsArrValue);
        }
        if(this.onPremisesDistinguishedName){
        writer.writeStringValue("onPremisesDistinguishedName", this.onPremisesDistinguishedName);
        }
        if(this.onPremisesDomainName){
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        }
        if(this.onPremisesExtensionAttributes){
        writer.writeObjectValue<OnPremisesExtensionAttributesImpl>("onPremisesExtensionAttributes", new OnPremisesExtensionAttributesImpl(this.onPremisesExtensionAttributes));
        }
        if(this.onPremisesImmutableId){
        writer.writeStringValue("onPremisesImmutableId", this.onPremisesImmutableId);
        }
        if(this.onPremisesLastSyncDateTime){
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesProvisioningErrors && this.onPremisesProvisioningErrors.length != 0){        const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = []; this.onPremisesProvisioningErrors?.forEach(element => {onPremisesProvisioningErrorsArrValue.push(new OnPremisesProvisioningErrorImpl(element));});
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>("onPremisesProvisioningErrors", onPremisesProvisioningErrorsArrValue);
        }
        if(this.onPremisesSamAccountName){
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        }
        if(this.onPremisesSecurityIdentifier){
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        }
        if(this.onPremisesSyncEnabled){
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        }
        if(this.onPremisesUserPrincipalName){
        writer.writeStringValue("onPremisesUserPrincipalName", this.onPremisesUserPrincipalName);
        }
        if(this.otherMails){
        writer.writeCollectionOfPrimitiveValues<string>("otherMails", this.otherMails);
        }
        if(this.outlook){
        writer.writeObjectValue<OutlookUserImpl>("outlook", new OutlookUserImpl(this.outlook));
        }
        if(this.ownedDevices && this.ownedDevices.length != 0){        const ownedDevicesArrValue: DirectoryObjectImpl[] = []; this.ownedDevices?.forEach(element => {ownedDevicesArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("ownedDevices", ownedDevicesArrValue);
        }
        if(this.ownedObjects && this.ownedObjects.length != 0){        const ownedObjectsArrValue: DirectoryObjectImpl[] = []; this.ownedObjects?.forEach(element => {ownedObjectsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("ownedObjects", ownedObjectsArrValue);
        }
        if(this.passwordPolicies){
        writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        }
        if(this.passwordProfile){
        writer.writeObjectValue<PasswordProfileImpl>("passwordProfile", new PasswordProfileImpl(this.passwordProfile));
        }
        if(this.pastProjects){
        writer.writeCollectionOfPrimitiveValues<string>("pastProjects", this.pastProjects);
        }
        if(this.people && this.people.length != 0){        const peopleArrValue: PersonImpl[] = []; this.people?.forEach(element => {peopleArrValue.push(new PersonImpl(element));});
        writer.writeCollectionOfObjectValues<PersonImpl>("people", peopleArrValue);
        }
        if(this.photo){
        writer.writeObjectValue<ProfilePhotoImpl>("photo", new ProfilePhotoImpl(this.photo));
        }
        if(this.photos && this.photos.length != 0){        const photosArrValue: ProfilePhotoImpl[] = []; this.photos?.forEach(element => {photosArrValue.push(new ProfilePhotoImpl(element));});
        writer.writeCollectionOfObjectValues<ProfilePhotoImpl>("photos", photosArrValue);
        }
        if(this.planner){
        writer.writeObjectValue<PlannerUserImpl>("planner", new PlannerUserImpl(this.planner));
        }
        if(this.postalCode){
        writer.writeStringValue("postalCode", this.postalCode);
        }
        if(this.preferredDataLocation){
        writer.writeStringValue("preferredDataLocation", this.preferredDataLocation);
        }
        if(this.preferredLanguage){
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        }
        if(this.preferredName){
        writer.writeStringValue("preferredName", this.preferredName);
        }
        if(this.presence){
        writer.writeObjectValue<PresenceImpl>("presence", new PresenceImpl(this.presence));
        }
        if(this.provisionedPlans && this.provisionedPlans.length != 0){        const provisionedPlansArrValue: ProvisionedPlanImpl[] = []; this.provisionedPlans?.forEach(element => {provisionedPlansArrValue.push(new ProvisionedPlanImpl(element));});
        writer.writeCollectionOfObjectValues<ProvisionedPlanImpl>("provisionedPlans", provisionedPlansArrValue);
        }
        if(this.proxyAddresses){
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        }
        if(this.registeredDevices && this.registeredDevices.length != 0){        const registeredDevicesArrValue: DirectoryObjectImpl[] = []; this.registeredDevices?.forEach(element => {registeredDevicesArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("registeredDevices", registeredDevicesArrValue);
        }
        if(this.responsibilities){
        writer.writeCollectionOfPrimitiveValues<string>("responsibilities", this.responsibilities);
        }
        if(this.schools){
        writer.writeCollectionOfPrimitiveValues<string>("schools", this.schools);
        }
        if(this.scopedRoleMemberOf && this.scopedRoleMemberOf.length != 0){        const scopedRoleMemberOfArrValue: ScopedRoleMembershipImpl[] = []; this.scopedRoleMemberOf?.forEach(element => {scopedRoleMemberOfArrValue.push(new ScopedRoleMembershipImpl(element));});
        writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("scopedRoleMemberOf", scopedRoleMemberOfArrValue);
        }
        if(this.settings){
        writer.writeObjectValue<UserSettingsImpl>("settings", new UserSettingsImpl(this.settings));
        }
        if(this.showInAddressList){
        writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        }
        if(this.signInSessionsValidFromDateTime){
        writer.writeDateValue("signInSessionsValidFromDateTime", this.signInSessionsValidFromDateTime);
        }
        if(this.skills){
        writer.writeCollectionOfPrimitiveValues<string>("skills", this.skills);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        if(this.streetAddress){
        writer.writeStringValue("streetAddress", this.streetAddress);
        }
        if(this.surname){
        writer.writeStringValue("surname", this.surname);
        }
        if(this.teamwork){
        writer.writeObjectValue<UserTeamworkImpl>("teamwork", new UserTeamworkImpl(this.teamwork));
        }
        if(this.todo){
        writer.writeObjectValue<TodoImpl>("todo", new TodoImpl(this.todo));
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = []; this.transitiveMemberOf?.forEach(element => {transitiveMemberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
        if(this.usageLocation){
        writer.writeStringValue("usageLocation", this.usageLocation);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        if(this.userType){
        writer.writeStringValue("userType", this.userType);
        }
    };
}
