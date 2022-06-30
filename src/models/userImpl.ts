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

export class UserImpl extends DirectoryObjectImpl implements User {
    /** A freeform text entry field for the user to describe themselves. Returned only on $select. */
    private _aboutMe?: string | undefined;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in). */
    private _accountEnabled?: boolean | undefined;
    /** The user's activities across devices. Read-only. Nullable. */
    private _activities?: UserActivity[] | undefined;
    /** Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    private _ageGroup?: string | undefined;
    /** The user's terms of use acceptance statuses. Read-only. Nullable. */
    private _agreementAcceptances?: AgreementAcceptance[] | undefined;
    /** Represents the app roles a user has been granted for an application. Supports $expand. */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq, not, and counting empty collections). */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and not). */
    private _assignedPlans?: AssignedPlan[] | undefined;
    /** The authentication methods that are supported for the user. */
    private _authentication?: Authentication | undefined;
    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select. */
    private _birthday?: Date | undefined;
    /** The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq, not, ge, le, startsWith). */
    private _businessPhones?: string[] | undefined;
    /** The user's primary calendar. Read-only. */
    private _calendar?: Calendar | undefined;
    /** The user's calendar groups. Read-only. Nullable. */
    private _calendarGroups?: CalendarGroup[] | undefined;
    /** The user's calendars. Read-only. Nullable. */
    private _calendars?: Calendar[] | undefined;
    /** The calendar view for the calendar. Read-only. Nullable. */
    private _calendarView?: Event[] | undefined;
    /** The chats property */
    private _chats?: Chat[] | undefined;
    /** The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _city?: string | undefined;
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _companyName?: string | undefined;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    private _consentProvidedForMinor?: string | undefined;
    /** The user's contacts folders. Read-only. Nullable. */
    private _contactFolders?: ContactFolder[] | undefined;
    /** The user's contacts. Read-only. Nullable. */
    private _contacts?: Contact[] | undefined;
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _country?: string | undefined;
    /** The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, not , ge, le, in). */
    private _createdDateTime?: Date | undefined;
    /** Directory objects that were created by the user. Read-only. Nullable. */
    private _createdObjects?: DirectoryObject[] | undefined;
    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in). */
    private _creationType?: string | undefined;
    /** The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values). */
    private _department?: string | undefined;
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000. */
    private _deviceEnrollmentLimit?: number | undefined;
    /** The list of troubleshooting events for this user. */
    private _deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[] | undefined;
    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand. */
    private _directReports?: DirectoryObject[] | undefined;
    /** The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search. */
    private _displayName?: string | undefined;
    /** The user's OneDrive. Read-only. */
    private _drive?: Drive | undefined;
    /** A collection of drives available for this user. Read-only. */
    private _drives?: Drive[] | undefined;
    /** The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, not , ge, le, in). */
    private _employeeHireDate?: Date | undefined;
    /** The employee identifier assigned to the user by the organization. The maximum length is 16 characters.Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    private _employeeId?: string | undefined;
    /** Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, not , ge, le, in). */
    private _employeeOrgData?: EmployeeOrgData | undefined;
    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith). */
    private _employeeType?: string | undefined;
    /** The user's events. Default is to show events under the Default Calendar. Read-only. Nullable. */
    private _events?: Event[] | undefined;
    /** The collection of open extensions defined for the user. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in). */
    private _externalUserState?: string | undefined;
    /** Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in). */
    private _externalUserStateChangeDateTime?: Date | undefined;
    /** The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    private _faxNumber?: string | undefined;
    /** The followedSites property */
    private _followedSites?: Site[] | undefined;
    /** The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    private _givenName?: string | undefined;
    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs. */
    private _hireDate?: Date | undefined;
    /** Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName. */
    private _identities?: ObjectIdentity[] | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, not, ge, le, startsWith). */
    private _imAddresses?: string[] | undefined;
    /** Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance. */
    private _inferenceClassification?: InferenceClassification | undefined;
    /** The insights property */
    private _insights?: OfficeGraphInsights | undefined;
    /** A list for the user to describe their interests. Returned only on $select. */
    private _interests?: string[] | undefined;
    /** Do not use – reserved for future use. */
    private _isResourceAccount?: boolean | undefined;
    /** The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    private _jobTitle?: string | undefined;
    /** The Microsoft Teams teams that the user is a member of. Read-only. Nullable. */
    private _joinedTeams?: Team[] | undefined;
    /** The time when this Azure AD user last changed their password or when their password was created, , whichever date the latest action was performed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. */
    private _lastPasswordChangeDateTime?: Date | undefined;
    /** Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. */
    private _legalAgeGroupClassification?: string | undefined;
    /** State of license assignments for this user. Read-only. Returned only on $select. */
    private _licenseAssignmentStates?: LicenseAssignmentState[] | undefined;
    /** A collection of this user's license details. Read-only. */
    private _licenseDetails?: LicenseDetails[] | undefined;
    /** The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.  Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values). */
    private _mail?: string | undefined;
    /** Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select. */
    private _mailboxSettings?: MailboxSettings | undefined;
    /** The user's mail folders. Read-only. Nullable. */
    private _mailFolders?: MailFolder[] | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _mailNickname?: string | undefined;
    /** Zero or more managed app registrations that belong to the user. */
    private _managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /** The managed devices associated with the user. */
    private _managedDevices?: ManagedDevice[] | undefined;
    /** The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand. */
    private _manager?: DirectoryObject | undefined;
    /** The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** The messages in a mailbox or folder. Read-only. Nullable. */
    private _messages?: Message[] | undefined;
    /** The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _mobilePhone?: string | undefined;
    /** The URL for the user's personal site. Returned only on $select. */
    private _mySite?: string | undefined;
    /** The oauth2PermissionGrants property */
    private _oauth2PermissionGrants?: OAuth2PermissionGrant[] | undefined;
    /** The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _officeLocation?: string | undefined;
    /** The onenote property */
    private _onenote?: Onenote | undefined;
    /** The onlineMeetings property */
    private _onlineMeetings?: OnlineMeeting[] | undefined;
    /** Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    private _onPremisesDistinguishedName?: string | undefined;
    /** Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    private _onPremisesDomainName?: string | undefined;
    /** Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15. Returned only on $select. */
    private _onPremisesExtensionAttributes?: OnPremisesExtensionAttributes | undefined;
    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesImmutableId?: string | undefined;
    /** Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, not, ge, le). */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    private _onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Supports $filter (eq including on null values). */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    private _onPremisesUserPrincipalName?: string | undefined;
    /** A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: This property cannot contain accent characters.Supports $filter (eq, not, ge, le, in, startsWith, and counting empty collections). */
    private _otherMails?: string[] | undefined;
    /** Selective Outlook services available to the user. Read-only. Nullable. */
    private _outlook?: OutlookUser | undefined;
    /** Devices that are owned by the user. Read-only. Nullable. Supports $expand. */
    private _ownedDevices?: DirectoryObject[] | undefined;
    /** Directory objects that are owned by the user. Read-only. Nullable. Supports $expand. */
    private _ownedObjects?: DirectoryObject[] | undefined;
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values). */
    private _passwordPolicies?: string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, not, in, and eq on null values). */
    private _passwordProfile?: PasswordProfile | undefined;
    /** A list for the user to enumerate their past projects. Returned only on $select. */
    private _pastProjects?: string[] | undefined;
    /** Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks. */
    private _people?: Person[] | undefined;
    /** The user's profile photo. Read-only. */
    private _photo?: ProfilePhoto | undefined;
    /** The photos property */
    private _photos?: ProfilePhoto[] | undefined;
    /** Selective Planner services available to the user. Read-only. Nullable. */
    private _planner?: PlannerUser | undefined;
    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _postalCode?: string | undefined;
    /** The preferred data location for the user. For more information, see OneDrive Online Multi-Geo. */
    private _preferredDataLocation?: string | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _preferredLanguage?: string | undefined;
    /** The preferred name for the user. Returned only on $select. */
    private _preferredName?: string | undefined;
    /** The presence property */
    private _presence?: Presence | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, not, ge, le). */
    private _provisionedPlans?: ProvisionedPlan[] | undefined;
    /** For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections). */
    private _proxyAddresses?: string[] | undefined;
    /** Devices that are registered for the user. Read-only. Nullable. Supports $expand. */
    private _registeredDevices?: DirectoryObject[] | undefined;
    /** A list for the user to enumerate their responsibilities. Returned only on $select. */
    private _responsibilities?: string[] | undefined;
    /** A list for the user to enumerate the schools they have attended. Returned only on $select. */
    private _schools?: string[] | undefined;
    /** The scoped-role administrative unit memberships for this user. Read-only. Nullable. */
    private _scopedRoleMemberOf?: ScopedRoleMembership[] | undefined;
    /** The settings property */
    private _settings?: UserSettings | undefined;
    /** Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue. */
    private _showInAddressList?: boolean | undefined;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. */
    private _signInSessionsValidFromDateTime?: Date | undefined;
    /** A list for the user to enumerate their skills. Returned only on $select. */
    private _skills?: string[] | undefined;
    /** The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _state?: string | undefined;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _streetAddress?: string | undefined;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _surname?: string | undefined;
    /** A container for Microsoft Teams features available for the user. Read-only. Nullable. */
    private _teamwork?: UserTeamwork | undefined;
    /** Represents the To Do services available to a user. */
    private _todo?: Todo | undefined;
    /** The transitiveMemberOf property */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _usageLocation?: string | undefined;
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy. */
    private _userPrincipalName?: string | undefined;
    /** A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory? */
    private _userType?: string | undefined;
    /**
     * Gets the aboutMe property value. A freeform text entry field for the user to describe themselves. Returned only on $select.
     * @returns a string
     */
    public get aboutMe() {
        return this._aboutMe;
    };
    /**
     * Sets the aboutMe property value. A freeform text entry field for the user to describe themselves. Returned only on $select.
     * @param value Value to set for the aboutMe property.
     */
    public set aboutMe(value: string | undefined) {
        if(value) {
            this._aboutMe = value;
        }
    };
    /**
     * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in).
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        if(value) {
            this._accountEnabled = value;
        }
    };
    /**
     * Gets the activities property value. The user's activities across devices. Read-only. Nullable.
     * @returns a UserActivityInterface
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. The user's activities across devices. Read-only. Nullable.
     * @param value Value to set for the activities property.
     */
    public set activities(value: UserActivity[] | undefined) {
        if(value) {
            const activitiesArrValue: UserActivityImpl[] = [];
            this.activities?.forEach(element => {
                activitiesArrValue.push((element instanceof UserActivityImpl? element:new UserActivityImpl(element)));
            });
            this._activities = activitiesArrValue;
        }
    };
    /**
     * Gets the ageGroup property value. Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in).
     * @returns a string
     */
    public get ageGroup() {
        return this._ageGroup;
    };
    /**
     * Sets the ageGroup property value. Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the ageGroup property.
     */
    public set ageGroup(value: string | undefined) {
        if(value) {
            this._ageGroup = value;
        }
    };
    /**
     * Gets the agreementAcceptances property value. The user's terms of use acceptance statuses. Read-only. Nullable.
     * @returns a AgreementAcceptanceInterface
     */
    public get agreementAcceptances() {
        return this._agreementAcceptances;
    };
    /**
     * Sets the agreementAcceptances property value. The user's terms of use acceptance statuses. Read-only. Nullable.
     * @param value Value to set for the agreementAcceptances property.
     */
    public set agreementAcceptances(value: AgreementAcceptance[] | undefined) {
        if(value) {
            const agreementAcceptancesArrValue: AgreementAcceptanceImpl[] = [];
            this.agreementAcceptances?.forEach(element => {
                agreementAcceptancesArrValue.push((element instanceof AgreementAcceptanceImpl? element:new AgreementAcceptanceImpl(element)));
            });
            this._agreementAcceptances = agreementAcceptancesArrValue;
        }
    };
    /**
     * Gets the appRoleAssignments property value. Represents the app roles a user has been granted for an application. Supports $expand.
     * @returns a AppRoleAssignmentInterface
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Sets the appRoleAssignments property value. Represents the app roles a user has been granted for an application. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        if(value) {
            const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = [];
            this.appRoleAssignments?.forEach(element => {
                appRoleAssignmentsArrValue.push((element instanceof AppRoleAssignmentImpl? element:new AppRoleAssignmentImpl(element)));
            });
            this._appRoleAssignments = appRoleAssignmentsArrValue;
        }
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq, not, and counting empty collections).
     * @returns a AssignedLicenseInterface
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq, not, and counting empty collections).
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        if(value) {
            const assignedLicensesArrValue: AssignedLicenseImpl[] = [];
            this.assignedLicenses?.forEach(element => {
                assignedLicensesArrValue.push((element instanceof AssignedLicenseImpl? element:new AssignedLicenseImpl(element)));
            });
            this._assignedLicenses = assignedLicensesArrValue;
        }
    };
    /**
     * Gets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and not).
     * @returns a AssignedPlanInterface
     */
    public get assignedPlans() {
        return this._assignedPlans;
    };
    /**
     * Sets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and not).
     * @param value Value to set for the assignedPlans property.
     */
    public set assignedPlans(value: AssignedPlan[] | undefined) {
        if(value) {
            const assignedPlansArrValue: AssignedPlanImpl[] = [];
            this.assignedPlans?.forEach(element => {
                assignedPlansArrValue.push((element instanceof AssignedPlanImpl? element:new AssignedPlanImpl(element)));
            });
            this._assignedPlans = assignedPlansArrValue;
        }
    };
    /**
     * Gets the authentication property value. The authentication methods that are supported for the user.
     * @returns a AuthenticationInterface
     */
    public get authentication() {
        return this._authentication;
    };
    /**
     * Sets the authentication property value. The authentication methods that are supported for the user.
     * @param value Value to set for the authentication property.
     */
    public set authentication(value: Authentication | undefined) {
        if(value) {
            this._authentication = value instanceof AuthenticationImpl? value : new AuthenticationImpl(value);
        }
    };
    /**
     * Gets the birthday property value. The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select.
     * @returns a Date
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Sets the birthday property value. The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select.
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: Date | undefined) {
        if(value) {
            this._birthday = value;
        }
    };
    /**
     * Gets the businessPhones property value. The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Sets the businessPhones property value. The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        if(value) {
            this._businessPhones = value;
        }
    };
    /**
     * Gets the calendar property value. The user's primary calendar. Read-only.
     * @returns a CalendarInterface
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Sets the calendar property value. The user's primary calendar. Read-only.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        if(value) {
            this._calendar = value instanceof CalendarImpl? value : new CalendarImpl(value);
        }
    };
    /**
     * Gets the calendarGroups property value. The user's calendar groups. Read-only. Nullable.
     * @returns a CalendarGroupInterface
     */
    public get calendarGroups() {
        return this._calendarGroups;
    };
    /**
     * Sets the calendarGroups property value. The user's calendar groups. Read-only. Nullable.
     * @param value Value to set for the calendarGroups property.
     */
    public set calendarGroups(value: CalendarGroup[] | undefined) {
        if(value) {
            const calendarGroupsArrValue: CalendarGroupImpl[] = [];
            this.calendarGroups?.forEach(element => {
                calendarGroupsArrValue.push((element instanceof CalendarGroupImpl? element:new CalendarGroupImpl(element)));
            });
            this._calendarGroups = calendarGroupsArrValue;
        }
    };
    /**
     * Gets the calendars property value. The user's calendars. Read-only. Nullable.
     * @returns a CalendarInterface
     */
    public get calendars() {
        return this._calendars;
    };
    /**
     * Sets the calendars property value. The user's calendars. Read-only. Nullable.
     * @param value Value to set for the calendars property.
     */
    public set calendars(value: Calendar[] | undefined) {
        if(value) {
            const calendarsArrValue: CalendarImpl[] = [];
            this.calendars?.forEach(element => {
                calendarsArrValue.push((element instanceof CalendarImpl? element:new CalendarImpl(element)));
            });
            this._calendars = calendarsArrValue;
        }
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Read-only. Nullable.
     * @returns a EventInterface
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Read-only. Nullable.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        if(value) {
            const calendarViewArrValue: EventImpl[] = [];
            this.calendarView?.forEach(element => {
                calendarViewArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
            });
            this._calendarView = calendarViewArrValue;
        }
    };
    /**
     * Gets the chats property value. The chats property
     * @returns a ChatInterface
     */
    public get chats() {
        return this._chats;
    };
    /**
     * Sets the chats property value. The chats property
     * @param value Value to set for the chats property.
     */
    public set chats(value: Chat[] | undefined) {
        if(value) {
            const chatsArrValue: ChatImpl[] = [];
            this.chats?.forEach(element => {
                chatsArrValue.push((element instanceof ChatImpl? element:new ChatImpl(element)));
            });
            this._chats = chatsArrValue;
        }
    };
    /**
     * Gets the city property value. The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        if(value) {
            this._city = value;
        }
    };
    /**
     * Gets the companyName property value. The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        if(value) {
            this._companyName = value;
        }
    };
    /**
     * Gets the consentProvidedForMinor property value. Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in).
     * @returns a string
     */
    public get consentProvidedForMinor() {
        return this._consentProvidedForMinor;
    };
    /**
     * Sets the consentProvidedForMinor property value. Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the consentProvidedForMinor property.
     */
    public set consentProvidedForMinor(value: string | undefined) {
        if(value) {
            this._consentProvidedForMinor = value;
        }
    };
    /**
     * Instantiates a new User and sets the default values.
     * @param userParameterValue 
     */
    public constructor(userParameterValue?: User | undefined) {
        super(userParameterValue);
        this._aboutMe = userParameterValue?.aboutMe;
        this._accountEnabled = userParameterValue?.accountEnabled;
        this._activities = userParameterValue?.activities;
        this._ageGroup = userParameterValue?.ageGroup;
        this._agreementAcceptances = userParameterValue?.agreementAcceptances;
        this._appRoleAssignments = userParameterValue?.appRoleAssignments;
        this._assignedLicenses = userParameterValue?.assignedLicenses;
        this._assignedPlans = userParameterValue?.assignedPlans;
        this._authentication = userParameterValue?.authentication;
        this._birthday = userParameterValue?.birthday;
        this._businessPhones = userParameterValue?.businessPhones;
        this._calendar = userParameterValue?.calendar;
        this._calendarGroups = userParameterValue?.calendarGroups;
        this._calendars = userParameterValue?.calendars;
        this._calendarView = userParameterValue?.calendarView;
        this._chats = userParameterValue?.chats;
        this._city = userParameterValue?.city;
        this._companyName = userParameterValue?.companyName;
        this._consentProvidedForMinor = userParameterValue?.consentProvidedForMinor;
        this._contactFolders = userParameterValue?.contactFolders;
        this._contacts = userParameterValue?.contacts;
        this._country = userParameterValue?.country;
        this._createdDateTime = userParameterValue?.createdDateTime;
        this._createdObjects = userParameterValue?.createdObjects;
        this._creationType = userParameterValue?.creationType;
        this._department = userParameterValue?.department;
        this._deviceEnrollmentLimit = userParameterValue?.deviceEnrollmentLimit;
        this._deviceManagementTroubleshootingEvents = userParameterValue?.deviceManagementTroubleshootingEvents;
        this._directReports = userParameterValue?.directReports;
        this._displayName = userParameterValue?.displayName;
        this._drive = userParameterValue?.drive;
        this._drives = userParameterValue?.drives;
        this._employeeHireDate = userParameterValue?.employeeHireDate;
        this._employeeId = userParameterValue?.employeeId;
        this._employeeOrgData = userParameterValue?.employeeOrgData;
        this._employeeType = userParameterValue?.employeeType;
        this._events = userParameterValue?.events;
        this._extensions = userParameterValue?.extensions;
        this._externalUserState = userParameterValue?.externalUserState;
        this._externalUserStateChangeDateTime = userParameterValue?.externalUserStateChangeDateTime;
        this._faxNumber = userParameterValue?.faxNumber;
        this._followedSites = userParameterValue?.followedSites;
        this._givenName = userParameterValue?.givenName;
        this._hireDate = userParameterValue?.hireDate;
        this._identities = userParameterValue?.identities;
        this._imAddresses = userParameterValue?.imAddresses;
        this._inferenceClassification = userParameterValue?.inferenceClassification;
        this._insights = userParameterValue?.insights;
        this._interests = userParameterValue?.interests;
        this._isResourceAccount = userParameterValue?.isResourceAccount;
        this._jobTitle = userParameterValue?.jobTitle;
        this._joinedTeams = userParameterValue?.joinedTeams;
        this._lastPasswordChangeDateTime = userParameterValue?.lastPasswordChangeDateTime;
        this._legalAgeGroupClassification = userParameterValue?.legalAgeGroupClassification;
        this._licenseAssignmentStates = userParameterValue?.licenseAssignmentStates;
        this._licenseDetails = userParameterValue?.licenseDetails;
        this._mail = userParameterValue?.mail;
        this._mailboxSettings = userParameterValue?.mailboxSettings;
        this._mailFolders = userParameterValue?.mailFolders;
        this._mailNickname = userParameterValue?.mailNickname;
        this._managedAppRegistrations = userParameterValue?.managedAppRegistrations;
        this._managedDevices = userParameterValue?.managedDevices;
        this._manager = userParameterValue?.manager;
        this._memberOf = userParameterValue?.memberOf;
        this._messages = userParameterValue?.messages;
        this._mobilePhone = userParameterValue?.mobilePhone;
        this._mySite = userParameterValue?.mySite;
        this._oauth2PermissionGrants = userParameterValue?.oauth2PermissionGrants;
        this._officeLocation = userParameterValue?.officeLocation;
        this._onenote = userParameterValue?.onenote;
        this._onlineMeetings = userParameterValue?.onlineMeetings;
        this._onPremisesDistinguishedName = userParameterValue?.onPremisesDistinguishedName;
        this._onPremisesDomainName = userParameterValue?.onPremisesDomainName;
        this._onPremisesExtensionAttributes = userParameterValue?.onPremisesExtensionAttributes;
        this._onPremisesImmutableId = userParameterValue?.onPremisesImmutableId;
        this._onPremisesLastSyncDateTime = userParameterValue?.onPremisesLastSyncDateTime;
        this._onPremisesProvisioningErrors = userParameterValue?.onPremisesProvisioningErrors;
        this._onPremisesSamAccountName = userParameterValue?.onPremisesSamAccountName;
        this._onPremisesSecurityIdentifier = userParameterValue?.onPremisesSecurityIdentifier;
        this._onPremisesSyncEnabled = userParameterValue?.onPremisesSyncEnabled;
        this._onPremisesUserPrincipalName = userParameterValue?.onPremisesUserPrincipalName;
        this._otherMails = userParameterValue?.otherMails;
        this._outlook = userParameterValue?.outlook;
        this._ownedDevices = userParameterValue?.ownedDevices;
        this._ownedObjects = userParameterValue?.ownedObjects;
        this._passwordPolicies = userParameterValue?.passwordPolicies;
        this._passwordProfile = userParameterValue?.passwordProfile;
        this._pastProjects = userParameterValue?.pastProjects;
        this._people = userParameterValue?.people;
        this._photo = userParameterValue?.photo;
        this._photos = userParameterValue?.photos;
        this._planner = userParameterValue?.planner;
        this._postalCode = userParameterValue?.postalCode;
        this._preferredDataLocation = userParameterValue?.preferredDataLocation;
        this._preferredLanguage = userParameterValue?.preferredLanguage;
        this._preferredName = userParameterValue?.preferredName;
        this._presence = userParameterValue?.presence;
        this._provisionedPlans = userParameterValue?.provisionedPlans;
        this._proxyAddresses = userParameterValue?.proxyAddresses;
        this._registeredDevices = userParameterValue?.registeredDevices;
        this._responsibilities = userParameterValue?.responsibilities;
        this._schools = userParameterValue?.schools;
        this._scopedRoleMemberOf = userParameterValue?.scopedRoleMemberOf;
        this._settings = userParameterValue?.settings;
        this._showInAddressList = userParameterValue?.showInAddressList;
        this._signInSessionsValidFromDateTime = userParameterValue?.signInSessionsValidFromDateTime;
        this._skills = userParameterValue?.skills;
        this._state = userParameterValue?.state;
        this._streetAddress = userParameterValue?.streetAddress;
        this._surname = userParameterValue?.surname;
        this._teamwork = userParameterValue?.teamwork;
        this._todo = userParameterValue?.todo;
        this._transitiveMemberOf = userParameterValue?.transitiveMemberOf;
        this._usageLocation = userParameterValue?.usageLocation;
        this._userPrincipalName = userParameterValue?.userPrincipalName;
        this._userType = userParameterValue?.userType;
    };
    /**
     * Gets the contactFolders property value. The user's contacts folders. Read-only. Nullable.
     * @returns a ContactFolderInterface
     */
    public get contactFolders() {
        return this._contactFolders;
    };
    /**
     * Sets the contactFolders property value. The user's contacts folders. Read-only. Nullable.
     * @param value Value to set for the contactFolders property.
     */
    public set contactFolders(value: ContactFolder[] | undefined) {
        if(value) {
            const contactFoldersArrValue: ContactFolderImpl[] = [];
            this.contactFolders?.forEach(element => {
                contactFoldersArrValue.push((element instanceof ContactFolderImpl? element:new ContactFolderImpl(element)));
            });
            this._contactFolders = contactFoldersArrValue;
        }
    };
    /**
     * Gets the contacts property value. The user's contacts. Read-only. Nullable.
     * @returns a ContactInterface
     */
    public get contacts() {
        return this._contacts;
    };
    /**
     * Sets the contacts property value. The user's contacts. Read-only. Nullable.
     * @param value Value to set for the contacts property.
     */
    public set contacts(value: Contact[] | undefined) {
        if(value) {
            const contactsArrValue: ContactImpl[] = [];
            this.contacts?.forEach(element => {
                contactsArrValue.push((element instanceof ContactImpl? element:new ContactImpl(element)));
            });
            this._contacts = contactsArrValue;
        }
    };
    /**
     * Gets the country property value. The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get country() {
        return this._country;
    };
    /**
     * Sets the country property value. The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the country property.
     */
    public set country(value: string | undefined) {
        if(value) {
            this._country = value;
        }
    };
    /**
     * Gets the createdDateTime property value. The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, not , ge, le, in).
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, not , ge, le, in).
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the createdObjects property value. Directory objects that were created by the user. Read-only. Nullable.
     * @returns a DirectoryObjectInterface
     */
    public get createdObjects() {
        return this._createdObjects;
    };
    /**
     * Sets the createdObjects property value. Directory objects that were created by the user. Read-only. Nullable.
     * @param value Value to set for the createdObjects property.
     */
    public set createdObjects(value: DirectoryObject[] | undefined) {
        if(value) {
            const createdObjectsArrValue: DirectoryObjectImpl[] = [];
            this.createdObjects?.forEach(element => {
                createdObjectsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._createdObjects = createdObjectsArrValue;
        }
    };
    /**
     * Gets the creationType property value. Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in).
     * @returns a string
     */
    public get creationType() {
        return this._creationType;
    };
    /**
     * Sets the creationType property value. Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in).
     * @param value Value to set for the creationType property.
     */
    public set creationType(value: string | undefined) {
        if(value) {
            this._creationType = value;
        }
    };
    /**
     * Gets the department property value. The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values).
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values).
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        if(value) {
            this._department = value;
        }
    };
    /**
     * Gets the deviceEnrollmentLimit property value. The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
     * @returns a integer
     */
    public get deviceEnrollmentLimit() {
        return this._deviceEnrollmentLimit;
    };
    /**
     * Sets the deviceEnrollmentLimit property value. The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
     * @param value Value to set for the deviceEnrollmentLimit property.
     */
    public set deviceEnrollmentLimit(value: number | undefined) {
        if(value) {
            this._deviceEnrollmentLimit = value;
        }
    };
    /**
     * Gets the deviceManagementTroubleshootingEvents property value. The list of troubleshooting events for this user.
     * @returns a DeviceManagementTroubleshootingEventInterface
     */
    public get deviceManagementTroubleshootingEvents() {
        return this._deviceManagementTroubleshootingEvents;
    };
    /**
     * Sets the deviceManagementTroubleshootingEvents property value. The list of troubleshooting events for this user.
     * @param value Value to set for the deviceManagementTroubleshootingEvents property.
     */
    public set deviceManagementTroubleshootingEvents(value: DeviceManagementTroubleshootingEvent[] | undefined) {
        if(value) {
            const deviceManagementTroubleshootingEventsArrValue: DeviceManagementTroubleshootingEventImpl[] = [];
            this.deviceManagementTroubleshootingEvents?.forEach(element => {
                deviceManagementTroubleshootingEventsArrValue.push((element instanceof DeviceManagementTroubleshootingEventImpl? element:new DeviceManagementTroubleshootingEventImpl(element)));
            });
            this._deviceManagementTroubleshootingEvents = deviceManagementTroubleshootingEventsArrValue;
        }
    };
    /**
     * Gets the directReports property value. The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get directReports() {
        return this._directReports;
    };
    /**
     * Sets the directReports property value. The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
     * @param value Value to set for the directReports property.
     */
    public set directReports(value: DirectoryObject[] | undefined) {
        if(value) {
            const directReportsArrValue: DirectoryObjectImpl[] = [];
            this.directReports?.forEach(element => {
                directReportsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._directReports = directReportsArrValue;
        }
    };
    /**
     * Gets the displayName property value. The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the drive property value. The user's OneDrive. Read-only.
     * @returns a DriveInterface
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The user's OneDrive. Read-only.
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        if(value) {
            this._drive = value instanceof DriveImpl? value : new DriveImpl(value);
        }
    };
    /**
     * Gets the drives property value. A collection of drives available for this user. Read-only.
     * @returns a DriveInterface
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. A collection of drives available for this user. Read-only.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        if(value) {
            const drivesArrValue: DriveImpl[] = [];
            this.drives?.forEach(element => {
                drivesArrValue.push((element instanceof DriveImpl? element:new DriveImpl(element)));
            });
            this._drives = drivesArrValue;
        }
    };
    /**
     * Gets the employeeHireDate property value. The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, not , ge, le, in).
     * @returns a Date
     */
    public get employeeHireDate() {
        return this._employeeHireDate;
    };
    /**
     * Sets the employeeHireDate property value. The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, not , ge, le, in).
     * @param value Value to set for the employeeHireDate property.
     */
    public set employeeHireDate(value: Date | undefined) {
        if(value) {
            this._employeeHireDate = value;
        }
    };
    /**
     * Gets the employeeId property value. The employee identifier assigned to the user by the organization. The maximum length is 16 characters.Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get employeeId() {
        return this._employeeId;
    };
    /**
     * Sets the employeeId property value. The employee identifier assigned to the user by the organization. The maximum length is 16 characters.Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the employeeId property.
     */
    public set employeeId(value: string | undefined) {
        if(value) {
            this._employeeId = value;
        }
    };
    /**
     * Gets the employeeOrgData property value. Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, not , ge, le, in).
     * @returns a EmployeeOrgDataInterface
     */
    public get employeeOrgData() {
        return this._employeeOrgData;
    };
    /**
     * Sets the employeeOrgData property value. Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, not , ge, le, in).
     * @param value Value to set for the employeeOrgData property.
     */
    public set employeeOrgData(value: EmployeeOrgData | undefined) {
        if(value) {
            this._employeeOrgData = value instanceof EmployeeOrgDataImpl? value : new EmployeeOrgDataImpl(value);
        }
    };
    /**
     * Gets the employeeType property value. Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith).
     * @returns a string
     */
    public get employeeType() {
        return this._employeeType;
    };
    /**
     * Sets the employeeType property value. Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith).
     * @param value Value to set for the employeeType property.
     */
    public set employeeType(value: string | undefined) {
        if(value) {
            this._employeeType = value;
        }
    };
    /**
     * Gets the events property value. The user's events. Default is to show events under the Default Calendar. Read-only. Nullable.
     * @returns a EventInterface
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The user's events. Default is to show events under the Default Calendar. Read-only. Nullable.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        if(value) {
            const eventsArrValue: EventImpl[] = [];
            this.events?.forEach(element => {
                eventsArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
            });
            this._events = eventsArrValue;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the user. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the user. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
    };
    /**
     * Gets the externalUserState property value. For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in).
     * @returns a string
     */
    public get externalUserState() {
        return this._externalUserState;
    };
    /**
     * Sets the externalUserState property value. For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in).
     * @param value Value to set for the externalUserState property.
     */
    public set externalUserState(value: string | undefined) {
        if(value) {
            this._externalUserState = value;
        }
    };
    /**
     * Gets the externalUserStateChangeDateTime property value. Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in).
     * @returns a Date
     */
    public get externalUserStateChangeDateTime() {
        return this._externalUserStateChangeDateTime;
    };
    /**
     * Sets the externalUserStateChangeDateTime property value. Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in).
     * @param value Value to set for the externalUserStateChangeDateTime property.
     */
    public set externalUserStateChangeDateTime(value: Date | undefined) {
        if(value) {
            this._externalUserStateChangeDateTime = value;
        }
    };
    /**
     * Gets the faxNumber property value. The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get faxNumber() {
        return this._faxNumber;
    };
    /**
     * Sets the faxNumber property value. The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the faxNumber property.
     */
    public set faxNumber(value: string | undefined) {
        if(value) {
            this._faxNumber = value;
        }
    };
    /**
     * Gets the followedSites property value. The followedSites property
     * @returns a SiteInterface
     */
    public get followedSites() {
        return this._followedSites;
    };
    /**
     * Sets the followedSites property value. The followedSites property
     * @param value Value to set for the followedSites property.
     */
    public set followedSites(value: Site[] | undefined) {
        if(value) {
            const followedSitesArrValue: SiteImpl[] = [];
            this.followedSites?.forEach(element => {
                followedSitesArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
            });
            this._followedSites = followedSitesArrValue;
        }
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
     * Gets the givenName property value. The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        if(value) {
            this._givenName = value;
        }
    };
    /**
     * Gets the hireDate property value. The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
     * @returns a Date
     */
    public get hireDate() {
        return this._hireDate;
    };
    /**
     * Sets the hireDate property value. The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
     * @param value Value to set for the hireDate property.
     */
    public set hireDate(value: Date | undefined) {
        if(value) {
            this._hireDate = value;
        }
    };
    /**
     * Gets the identities property value. Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName.
     * @returns a ObjectIdentityInterface
     */
    public get identities() {
        return this._identities;
    };
    /**
     * Sets the identities property value. Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName.
     * @param value Value to set for the identities property.
     */
    public set identities(value: ObjectIdentity[] | undefined) {
        if(value) {
            const identitiesArrValue: ObjectIdentityImpl[] = [];
            this.identities?.forEach(element => {
                identitiesArrValue.push((element instanceof ObjectIdentityImpl? element:new ObjectIdentityImpl(element)));
            });
            this._identities = identitiesArrValue;
        }
    };
    /**
     * Gets the imAddresses property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get imAddresses() {
        return this._imAddresses;
    };
    /**
     * Sets the imAddresses property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the imAddresses property.
     */
    public set imAddresses(value: string[] | undefined) {
        if(value) {
            this._imAddresses = value;
        }
    };
    /**
     * Gets the inferenceClassification property value. Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @returns a InferenceClassificationInterface
     */
    public get inferenceClassification() {
        return this._inferenceClassification;
    };
    /**
     * Sets the inferenceClassification property value. Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param value Value to set for the inferenceClassification property.
     */
    public set inferenceClassification(value: InferenceClassification | undefined) {
        if(value) {
            this._inferenceClassification = value instanceof InferenceClassificationImpl? value : new InferenceClassificationImpl(value);
        }
    };
    /**
     * Gets the insights property value. The insights property
     * @returns a OfficeGraphInsightsInterface
     */
    public get insights() {
        return this._insights;
    };
    /**
     * Sets the insights property value. The insights property
     * @param value Value to set for the insights property.
     */
    public set insights(value: OfficeGraphInsights | undefined) {
        if(value) {
            this._insights = value instanceof OfficeGraphInsightsImpl? value : new OfficeGraphInsightsImpl(value);
        }
    };
    /**
     * Gets the interests property value. A list for the user to describe their interests. Returned only on $select.
     * @returns a string
     */
    public get interests() {
        return this._interests;
    };
    /**
     * Sets the interests property value. A list for the user to describe their interests. Returned only on $select.
     * @param value Value to set for the interests property.
     */
    public set interests(value: string[] | undefined) {
        if(value) {
            this._interests = value;
        }
    };
    /**
     * Gets the isResourceAccount property value. Do not use – reserved for future use.
     * @returns a boolean
     */
    public get isResourceAccount() {
        return this._isResourceAccount;
    };
    /**
     * Sets the isResourceAccount property value. Do not use – reserved for future use.
     * @param value Value to set for the isResourceAccount property.
     */
    public set isResourceAccount(value: boolean | undefined) {
        if(value) {
            this._isResourceAccount = value;
        }
    };
    /**
     * Gets the jobTitle property value. The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        if(value) {
            this._jobTitle = value;
        }
    };
    /**
     * Gets the joinedTeams property value. The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
     * @returns a TeamInterface
     */
    public get joinedTeams() {
        return this._joinedTeams;
    };
    /**
     * Sets the joinedTeams property value. The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
     * @param value Value to set for the joinedTeams property.
     */
    public set joinedTeams(value: Team[] | undefined) {
        if(value) {
            const joinedTeamsArrValue: TeamImpl[] = [];
            this.joinedTeams?.forEach(element => {
                joinedTeamsArrValue.push((element instanceof TeamImpl? element:new TeamImpl(element)));
            });
            this._joinedTeams = joinedTeamsArrValue;
        }
    };
    /**
     * Gets the lastPasswordChangeDateTime property value. The time when this Azure AD user last changed their password or when their password was created, , whichever date the latest action was performed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select.
     * @returns a Date
     */
    public get lastPasswordChangeDateTime() {
        return this._lastPasswordChangeDateTime;
    };
    /**
     * Sets the lastPasswordChangeDateTime property value. The time when this Azure AD user last changed their password or when their password was created, , whichever date the latest action was performed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select.
     * @param value Value to set for the lastPasswordChangeDateTime property.
     */
    public set lastPasswordChangeDateTime(value: Date | undefined) {
        if(value) {
            this._lastPasswordChangeDateTime = value;
        }
    };
    /**
     * Gets the legalAgeGroupClassification property value. Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select.
     * @returns a string
     */
    public get legalAgeGroupClassification() {
        return this._legalAgeGroupClassification;
    };
    /**
     * Sets the legalAgeGroupClassification property value. Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select.
     * @param value Value to set for the legalAgeGroupClassification property.
     */
    public set legalAgeGroupClassification(value: string | undefined) {
        if(value) {
            this._legalAgeGroupClassification = value;
        }
    };
    /**
     * Gets the licenseAssignmentStates property value. State of license assignments for this user. Read-only. Returned only on $select.
     * @returns a LicenseAssignmentStateInterface
     */
    public get licenseAssignmentStates() {
        return this._licenseAssignmentStates;
    };
    /**
     * Sets the licenseAssignmentStates property value. State of license assignments for this user. Read-only. Returned only on $select.
     * @param value Value to set for the licenseAssignmentStates property.
     */
    public set licenseAssignmentStates(value: LicenseAssignmentState[] | undefined) {
        if(value) {
            const licenseAssignmentStatesArrValue: LicenseAssignmentStateImpl[] = [];
            this.licenseAssignmentStates?.forEach(element => {
                licenseAssignmentStatesArrValue.push((element instanceof LicenseAssignmentStateImpl? element:new LicenseAssignmentStateImpl(element)));
            });
            this._licenseAssignmentStates = licenseAssignmentStatesArrValue;
        }
    };
    /**
     * Gets the licenseDetails property value. A collection of this user's license details. Read-only.
     * @returns a LicenseDetailsInterface
     */
    public get licenseDetails() {
        return this._licenseDetails;
    };
    /**
     * Sets the licenseDetails property value. A collection of this user's license details. Read-only.
     * @param value Value to set for the licenseDetails property.
     */
    public set licenseDetails(value: LicenseDetails[] | undefined) {
        if(value) {
            const licenseDetailsArrValue: LicenseDetailsImpl[] = [];
            this.licenseDetails?.forEach(element => {
                licenseDetailsArrValue.push((element instanceof LicenseDetailsImpl? element:new LicenseDetailsImpl(element)));
            });
            this._licenseDetails = licenseDetailsArrValue;
        }
    };
    /**
     * Gets the mail property value. The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.  Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.  Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        if(value) {
            this._mail = value;
        }
    };
    /**
     * Gets the mailboxSettings property value. Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
     * @returns a MailboxSettingsInterface
     */
    public get mailboxSettings() {
        return this._mailboxSettings;
    };
    /**
     * Sets the mailboxSettings property value. Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
     * @param value Value to set for the mailboxSettings property.
     */
    public set mailboxSettings(value: MailboxSettings | undefined) {
        if(value) {
            this._mailboxSettings = value instanceof MailboxSettingsImpl? value : new MailboxSettingsImpl(value);
        }
    };
    /**
     * Gets the mailFolders property value. The user's mail folders. Read-only. Nullable.
     * @returns a MailFolderInterface
     */
    public get mailFolders() {
        return this._mailFolders;
    };
    /**
     * Sets the mailFolders property value. The user's mail folders. Read-only. Nullable.
     * @param value Value to set for the mailFolders property.
     */
    public set mailFolders(value: MailFolder[] | undefined) {
        if(value) {
            const mailFoldersArrValue: MailFolderImpl[] = [];
            this.mailFolders?.forEach(element => {
                mailFoldersArrValue.push((element instanceof MailFolderImpl? element:new MailFolderImpl(element)));
            });
            this._mailFolders = mailFoldersArrValue;
        }
    };
    /**
     * Gets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        if(value) {
            this._mailNickname = value;
        }
    };
    /**
     * Gets the managedAppRegistrations property value. Zero or more managed app registrations that belong to the user.
     * @returns a ManagedAppRegistrationInterface
     */
    public get managedAppRegistrations() {
        return this._managedAppRegistrations;
    };
    /**
     * Sets the managedAppRegistrations property value. Zero or more managed app registrations that belong to the user.
     * @param value Value to set for the managedAppRegistrations property.
     */
    public set managedAppRegistrations(value: ManagedAppRegistration[] | undefined) {
        if(value) {
            const managedAppRegistrationsArrValue: ManagedAppRegistrationImpl[] = [];
            this.managedAppRegistrations?.forEach(element => {
                managedAppRegistrationsArrValue.push((element instanceof ManagedAppRegistrationImpl? element:new ManagedAppRegistrationImpl(element)));
            });
            this._managedAppRegistrations = managedAppRegistrationsArrValue;
        }
    };
    /**
     * Gets the managedDevices property value. The managed devices associated with the user.
     * @returns a ManagedDeviceInterface
     */
    public get managedDevices() {
        return this._managedDevices;
    };
    /**
     * Sets the managedDevices property value. The managed devices associated with the user.
     * @param value Value to set for the managedDevices property.
     */
    public set managedDevices(value: ManagedDevice[] | undefined) {
        if(value) {
            const managedDevicesArrValue: ManagedDeviceImpl[] = [];
            this.managedDevices?.forEach(element => {
                managedDevicesArrValue.push((element instanceof ManagedDeviceImpl? element:new ManagedDeviceImpl(element)));
            });
            this._managedDevices = managedDevicesArrValue;
        }
    };
    /**
     * Gets the manager property value. The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
     * @param value Value to set for the manager property.
     */
    public set manager(value: DirectoryObject | undefined) {
        if(value) {
            this._manager = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the memberOf property value. The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const memberOfArrValue: DirectoryObjectImpl[] = [];
            this.memberOf?.forEach(element => {
                memberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._memberOf = memberOfArrValue;
        }
    };
    /**
     * Gets the messages property value. The messages in a mailbox or folder. Read-only. Nullable.
     * @returns a MessageInterface
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. The messages in a mailbox or folder. Read-only. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: Message[] | undefined) {
        if(value) {
            const messagesArrValue: MessageImpl[] = [];
            this.messages?.forEach(element => {
                messagesArrValue.push((element instanceof MessageImpl? element:new MessageImpl(element)));
            });
            this._messages = messagesArrValue;
        }
    };
    /**
     * Gets the mobilePhone property value. The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Sets the mobilePhone property value. The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        if(value) {
            this._mobilePhone = value;
        }
    };
    /**
     * Gets the mySite property value. The URL for the user's personal site. Returned only on $select.
     * @returns a string
     */
    public get mySite() {
        return this._mySite;
    };
    /**
     * Sets the mySite property value. The URL for the user's personal site. Returned only on $select.
     * @param value Value to set for the mySite property.
     */
    public set mySite(value: string | undefined) {
        if(value) {
            this._mySite = value;
        }
    };
    /**
     * Gets the oauth2PermissionGrants property value. The oauth2PermissionGrants property
     * @returns a OAuth2PermissionGrantInterface
     */
    public get oauth2PermissionGrants() {
        return this._oauth2PermissionGrants;
    };
    /**
     * Sets the oauth2PermissionGrants property value. The oauth2PermissionGrants property
     * @param value Value to set for the oauth2PermissionGrants property.
     */
    public set oauth2PermissionGrants(value: OAuth2PermissionGrant[] | undefined) {
        if(value) {
            const oauth2PermissionGrantsArrValue: OAuth2PermissionGrantImpl[] = [];
            this.oauth2PermissionGrants?.forEach(element => {
                oauth2PermissionGrantsArrValue.push((element instanceof OAuth2PermissionGrantImpl? element:new OAuth2PermissionGrantImpl(element)));
            });
            this._oauth2PermissionGrants = oauth2PermissionGrantsArrValue;
        }
    };
    /**
     * Gets the officeLocation property value. The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        if(value) {
            this._officeLocation = value;
        }
    };
    /**
     * Gets the onenote property value. The onenote property
     * @returns a OnenoteInterface
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. The onenote property
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        if(value) {
            this._onenote = value instanceof OnenoteImpl? value : new OnenoteImpl(value);
        }
    };
    /**
     * Gets the onlineMeetings property value. The onlineMeetings property
     * @returns a OnlineMeetingInterface
     */
    public get onlineMeetings() {
        return this._onlineMeetings;
    };
    /**
     * Sets the onlineMeetings property value. The onlineMeetings property
     * @param value Value to set for the onlineMeetings property.
     */
    public set onlineMeetings(value: OnlineMeeting[] | undefined) {
        if(value) {
            const onlineMeetingsArrValue: OnlineMeetingImpl[] = [];
            this.onlineMeetings?.forEach(element => {
                onlineMeetingsArrValue.push((element instanceof OnlineMeetingImpl? element:new OnlineMeetingImpl(element)));
            });
            this._onlineMeetings = onlineMeetingsArrValue;
        }
    };
    /**
     * Gets the onPremisesDistinguishedName property value. Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     * @returns a string
     */
    public get onPremisesDistinguishedName() {
        return this._onPremisesDistinguishedName;
    };
    /**
     * Sets the onPremisesDistinguishedName property value. Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     * @param value Value to set for the onPremisesDistinguishedName property.
     */
    public set onPremisesDistinguishedName(value: string | undefined) {
        if(value) {
            this._onPremisesDistinguishedName = value;
        }
    };
    /**
     * Gets the onPremisesDomainName property value. Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     * @returns a string
     */
    public get onPremisesDomainName() {
        return this._onPremisesDomainName;
    };
    /**
     * Sets the onPremisesDomainName property value. Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     * @param value Value to set for the onPremisesDomainName property.
     */
    public set onPremisesDomainName(value: string | undefined) {
        if(value) {
            this._onPremisesDomainName = value;
        }
    };
    /**
     * Gets the onPremisesExtensionAttributes property value. Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15. Returned only on $select.
     * @returns a OnPremisesExtensionAttributesInterface
     */
    public get onPremisesExtensionAttributes() {
        return this._onPremisesExtensionAttributes;
    };
    /**
     * Sets the onPremisesExtensionAttributes property value. Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15. Returned only on $select.
     * @param value Value to set for the onPremisesExtensionAttributes property.
     */
    public set onPremisesExtensionAttributes(value: OnPremisesExtensionAttributes | undefined) {
        if(value) {
            this._onPremisesExtensionAttributes = value instanceof OnPremisesExtensionAttributesImpl? value : new OnPremisesExtensionAttributesImpl(value);
        }
    };
    /**
     * Gets the onPremisesImmutableId property value. This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a string
     */
    public get onPremisesImmutableId() {
        return this._onPremisesImmutableId;
    };
    /**
     * Sets the onPremisesImmutableId property value. This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesImmutableId property.
     */
    public set onPremisesImmutableId(value: string | undefined) {
        if(value) {
            this._onPremisesImmutableId = value;
        }
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        if(value) {
            this._onPremisesLastSyncDateTime = value;
        }
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, not, ge, le).
     * @returns a OnPremisesProvisioningErrorInterface
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, not, ge, le).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        if(value) {
            const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = [];
            this.onPremisesProvisioningErrors?.forEach(element => {
                onPremisesProvisioningErrorsArrValue.push((element instanceof OnPremisesProvisioningErrorImpl? element:new OnPremisesProvisioningErrorImpl(element)));
            });
            this._onPremisesProvisioningErrors = onPremisesProvisioningErrorsArrValue;
        }
    };
    /**
     * Gets the onPremisesSamAccountName property value. Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get onPremisesSamAccountName() {
        return this._onPremisesSamAccountName;
    };
    /**
     * Sets the onPremisesSamAccountName property value. Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @param value Value to set for the onPremisesSamAccountName property.
     */
    public set onPremisesSamAccountName(value: string | undefined) {
        if(value) {
            this._onPremisesSamAccountName = value;
        }
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Supports $filter (eq including on null values).
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Supports $filter (eq including on null values).
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        if(value) {
            this._onPremisesSecurityIdentifier = value;
        }
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        if(value) {
            this._onPremisesSyncEnabled = value;
        }
    };
    /**
     * Gets the onPremisesUserPrincipalName property value. Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get onPremisesUserPrincipalName() {
        return this._onPremisesUserPrincipalName;
    };
    /**
     * Sets the onPremisesUserPrincipalName property value. Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @param value Value to set for the onPremisesUserPrincipalName property.
     */
    public set onPremisesUserPrincipalName(value: string | undefined) {
        if(value) {
            this._onPremisesUserPrincipalName = value;
        }
    };
    /**
     * Gets the otherMails property value. A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: This property cannot contain accent characters.Supports $filter (eq, not, ge, le, in, startsWith, and counting empty collections).
     * @returns a string
     */
    public get otherMails() {
        return this._otherMails;
    };
    /**
     * Sets the otherMails property value. A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: This property cannot contain accent characters.Supports $filter (eq, not, ge, le, in, startsWith, and counting empty collections).
     * @param value Value to set for the otherMails property.
     */
    public set otherMails(value: string[] | undefined) {
        if(value) {
            this._otherMails = value;
        }
    };
    /**
     * Gets the outlook property value. Selective Outlook services available to the user. Read-only. Nullable.
     * @returns a OutlookUserInterface
     */
    public get outlook() {
        return this._outlook;
    };
    /**
     * Sets the outlook property value. Selective Outlook services available to the user. Read-only. Nullable.
     * @param value Value to set for the outlook property.
     */
    public set outlook(value: OutlookUser | undefined) {
        if(value) {
            this._outlook = value instanceof OutlookUserImpl? value : new OutlookUserImpl(value);
        }
    };
    /**
     * Gets the ownedDevices property value. Devices that are owned by the user. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get ownedDevices() {
        return this._ownedDevices;
    };
    /**
     * Sets the ownedDevices property value. Devices that are owned by the user. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the ownedDevices property.
     */
    public set ownedDevices(value: DirectoryObject[] | undefined) {
        if(value) {
            const ownedDevicesArrValue: DirectoryObjectImpl[] = [];
            this.ownedDevices?.forEach(element => {
                ownedDevicesArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._ownedDevices = ownedDevicesArrValue;
        }
    };
    /**
     * Gets the ownedObjects property value. Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get ownedObjects() {
        return this._ownedObjects;
    };
    /**
     * Sets the ownedObjects property value. Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the ownedObjects property.
     */
    public set ownedObjects(value: DirectoryObject[] | undefined) {
        if(value) {
            const ownedObjectsArrValue: DirectoryObjectImpl[] = [];
            this.ownedObjects?.forEach(element => {
                ownedObjectsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._ownedObjects = ownedObjectsArrValue;
        }
    };
    /**
     * Gets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values).
     * @returns a string
     */
    public get passwordPolicies() {
        return this._passwordPolicies;
    };
    /**
     * Sets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values).
     * @param value Value to set for the passwordPolicies property.
     */
    public set passwordPolicies(value: string | undefined) {
        if(value) {
            this._passwordPolicies = value;
        }
    };
    /**
     * Gets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a PasswordProfileInterface
     */
    public get passwordProfile() {
        return this._passwordProfile;
    };
    /**
     * Sets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the passwordProfile property.
     */
    public set passwordProfile(value: PasswordProfile | undefined) {
        if(value) {
            this._passwordProfile = value instanceof PasswordProfileImpl? value : new PasswordProfileImpl(value);
        }
    };
    /**
     * Gets the pastProjects property value. A list for the user to enumerate their past projects. Returned only on $select.
     * @returns a string
     */
    public get pastProjects() {
        return this._pastProjects;
    };
    /**
     * Sets the pastProjects property value. A list for the user to enumerate their past projects. Returned only on $select.
     * @param value Value to set for the pastProjects property.
     */
    public set pastProjects(value: string[] | undefined) {
        if(value) {
            this._pastProjects = value;
        }
    };
    /**
     * Gets the people property value. Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks.
     * @returns a PersonInterface
     */
    public get people() {
        return this._people;
    };
    /**
     * Sets the people property value. Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks.
     * @param value Value to set for the people property.
     */
    public set people(value: Person[] | undefined) {
        if(value) {
            const peopleArrValue: PersonImpl[] = [];
            this.people?.forEach(element => {
                peopleArrValue.push((element instanceof PersonImpl? element:new PersonImpl(element)));
            });
            this._people = peopleArrValue;
        }
    };
    /**
     * Gets the photo property value. The user's profile photo. Read-only.
     * @returns a ProfilePhotoInterface
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. The user's profile photo. Read-only.
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        if(value) {
            this._photo = value instanceof ProfilePhotoImpl? value : new ProfilePhotoImpl(value);
        }
    };
    /**
     * Gets the photos property value. The photos property
     * @returns a ProfilePhotoInterface
     */
    public get photos() {
        return this._photos;
    };
    /**
     * Sets the photos property value. The photos property
     * @param value Value to set for the photos property.
     */
    public set photos(value: ProfilePhoto[] | undefined) {
        if(value) {
            const photosArrValue: ProfilePhotoImpl[] = [];
            this.photos?.forEach(element => {
                photosArrValue.push((element instanceof ProfilePhotoImpl? element:new ProfilePhotoImpl(element)));
            });
            this._photos = photosArrValue;
        }
    };
    /**
     * Gets the planner property value. Selective Planner services available to the user. Read-only. Nullable.
     * @returns a PlannerUserInterface
     */
    public get planner() {
        return this._planner;
    };
    /**
     * Sets the planner property value. Selective Planner services available to the user. Read-only. Nullable.
     * @param value Value to set for the planner property.
     */
    public set planner(value: PlannerUser | undefined) {
        if(value) {
            this._planner = value instanceof PlannerUserImpl? value : new PlannerUserImpl(value);
        }
    };
    /**
     * Gets the postalCode property value. The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Sets the postalCode property value. The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        if(value) {
            this._postalCode = value;
        }
    };
    /**
     * Gets the preferredDataLocation property value. The preferred data location for the user. For more information, see OneDrive Online Multi-Geo.
     * @returns a string
     */
    public get preferredDataLocation() {
        return this._preferredDataLocation;
    };
    /**
     * Sets the preferredDataLocation property value. The preferred data location for the user. For more information, see OneDrive Online Multi-Geo.
     * @param value Value to set for the preferredDataLocation property.
     */
    public set preferredDataLocation(value: string | undefined) {
        if(value) {
            this._preferredDataLocation = value;
        }
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        if(value) {
            this._preferredLanguage = value;
        }
    };
    /**
     * Gets the preferredName property value. The preferred name for the user. Returned only on $select.
     * @returns a string
     */
    public get preferredName() {
        return this._preferredName;
    };
    /**
     * Sets the preferredName property value. The preferred name for the user. Returned only on $select.
     * @param value Value to set for the preferredName property.
     */
    public set preferredName(value: string | undefined) {
        if(value) {
            this._preferredName = value;
        }
    };
    /**
     * Gets the presence property value. The presence property
     * @returns a PresenceInterface
     */
    public get presence() {
        return this._presence;
    };
    /**
     * Sets the presence property value. The presence property
     * @param value Value to set for the presence property.
     */
    public set presence(value: Presence | undefined) {
        if(value) {
            this._presence = value instanceof PresenceImpl? value : new PresenceImpl(value);
        }
    };
    /**
     * Gets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a ProvisionedPlanInterface
     */
    public get provisionedPlans() {
        return this._provisionedPlans;
    };
    /**
     * Sets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the provisionedPlans property.
     */
    public set provisionedPlans(value: ProvisionedPlan[] | undefined) {
        if(value) {
            const provisionedPlansArrValue: ProvisionedPlanImpl[] = [];
            this.provisionedPlans?.forEach(element => {
                provisionedPlansArrValue.push((element instanceof ProvisionedPlanImpl? element:new ProvisionedPlanImpl(element)));
            });
            this._provisionedPlans = provisionedPlansArrValue;
        }
    };
    /**
     * Gets the proxyAddresses property value. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Sets the proxyAddresses property value. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        if(value) {
            this._proxyAddresses = value;
        }
    };
    /**
     * Gets the registeredDevices property value. Devices that are registered for the user. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get registeredDevices() {
        return this._registeredDevices;
    };
    /**
     * Sets the registeredDevices property value. Devices that are registered for the user. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredDevices property.
     */
    public set registeredDevices(value: DirectoryObject[] | undefined) {
        if(value) {
            const registeredDevicesArrValue: DirectoryObjectImpl[] = [];
            this.registeredDevices?.forEach(element => {
                registeredDevicesArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._registeredDevices = registeredDevicesArrValue;
        }
    };
    /**
     * Gets the responsibilities property value. A list for the user to enumerate their responsibilities. Returned only on $select.
     * @returns a string
     */
    public get responsibilities() {
        return this._responsibilities;
    };
    /**
     * Sets the responsibilities property value. A list for the user to enumerate their responsibilities. Returned only on $select.
     * @param value Value to set for the responsibilities property.
     */
    public set responsibilities(value: string[] | undefined) {
        if(value) {
            this._responsibilities = value;
        }
    };
    /**
     * Gets the schools property value. A list for the user to enumerate the schools they have attended. Returned only on $select.
     * @returns a string
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. A list for the user to enumerate the schools they have attended. Returned only on $select.
     * @param value Value to set for the schools property.
     */
    public set schools(value: string[] | undefined) {
        if(value) {
            this._schools = value;
        }
    };
    /**
     * Gets the scopedRoleMemberOf property value. The scoped-role administrative unit memberships for this user. Read-only. Nullable.
     * @returns a ScopedRoleMembershipInterface
     */
    public get scopedRoleMemberOf() {
        return this._scopedRoleMemberOf;
    };
    /**
     * Sets the scopedRoleMemberOf property value. The scoped-role administrative unit memberships for this user. Read-only. Nullable.
     * @param value Value to set for the scopedRoleMemberOf property.
     */
    public set scopedRoleMemberOf(value: ScopedRoleMembership[] | undefined) {
        if(value) {
            const scopedRoleMemberOfArrValue: ScopedRoleMembershipImpl[] = [];
            this.scopedRoleMemberOf?.forEach(element => {
                scopedRoleMemberOfArrValue.push((element instanceof ScopedRoleMembershipImpl? element:new ScopedRoleMembershipImpl(element)));
            });
            this._scopedRoleMemberOf = scopedRoleMemberOfArrValue;
        }
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
        if(this.activities && this.activities.length != 0){        const activitiesArrValue: UserActivityImpl[] = [];
        this.activities?.forEach(element => {
            activitiesArrValue.push((element instanceof UserActivityImpl? element:new UserActivityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserActivityImpl>("activities", activitiesArrValue);
        }
        if(this.ageGroup){
            writer.writeStringValue("ageGroup", this.ageGroup);
        }
        if(this.agreementAcceptances && this.agreementAcceptances.length != 0){        const agreementAcceptancesArrValue: AgreementAcceptanceImpl[] = [];
        this.agreementAcceptances?.forEach(element => {
            agreementAcceptancesArrValue.push((element instanceof AgreementAcceptanceImpl? element:new AgreementAcceptanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AgreementAcceptanceImpl>("agreementAcceptances", agreementAcceptancesArrValue);
        }
        if(this.appRoleAssignments && this.appRoleAssignments.length != 0){        const appRoleAssignmentsArrValue: AppRoleAssignmentImpl[] = [];
        this.appRoleAssignments?.forEach(element => {
            appRoleAssignmentsArrValue.push((element instanceof AppRoleAssignmentImpl? element:new AppRoleAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("appRoleAssignments", appRoleAssignmentsArrValue);
        }
        if(this.assignedLicenses && this.assignedLicenses.length != 0){        const assignedLicensesArrValue: AssignedLicenseImpl[] = [];
        this.assignedLicenses?.forEach(element => {
            assignedLicensesArrValue.push((element instanceof AssignedLicenseImpl? element:new AssignedLicenseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("assignedLicenses", assignedLicensesArrValue);
        }
        if(this.assignedPlans && this.assignedPlans.length != 0){        const assignedPlansArrValue: AssignedPlanImpl[] = [];
        this.assignedPlans?.forEach(element => {
            assignedPlansArrValue.push((element instanceof AssignedPlanImpl? element:new AssignedPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedPlanImpl>("assignedPlans", assignedPlansArrValue);
        }
        if(this.authentication){
            writer.writeObjectValue<AuthenticationImpl>("authentication", (!this.authentication || this.authentication instanceof AuthenticationImpl? this.authentication : new AuthenticationImpl(this.authentication)));
        }
        if(this.birthday){
            writer.writeDateValue("birthday", this.birthday);
        }
        if(this.businessPhones){
            writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.calendar){
            writer.writeObjectValue<CalendarImpl>("calendar", (!this.calendar || this.calendar instanceof CalendarImpl? this.calendar : new CalendarImpl(this.calendar)));
        }
        if(this.calendarGroups && this.calendarGroups.length != 0){        const calendarGroupsArrValue: CalendarGroupImpl[] = [];
        this.calendarGroups?.forEach(element => {
            calendarGroupsArrValue.push((element instanceof CalendarGroupImpl? element:new CalendarGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CalendarGroupImpl>("calendarGroups", calendarGroupsArrValue);
        }
        if(this.calendars && this.calendars.length != 0){        const calendarsArrValue: CalendarImpl[] = [];
        this.calendars?.forEach(element => {
            calendarsArrValue.push((element instanceof CalendarImpl? element:new CalendarImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CalendarImpl>("calendars", calendarsArrValue);
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: EventImpl[] = [];
        this.calendarView?.forEach(element => {
            calendarViewArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EventImpl>("calendarView", calendarViewArrValue);
        }
        if(this.chats && this.chats.length != 0){        const chatsArrValue: ChatImpl[] = [];
        this.chats?.forEach(element => {
            chatsArrValue.push((element instanceof ChatImpl? element:new ChatImpl(element)));
        });
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
        if(this.contactFolders && this.contactFolders.length != 0){        const contactFoldersArrValue: ContactFolderImpl[] = [];
        this.contactFolders?.forEach(element => {
            contactFoldersArrValue.push((element instanceof ContactFolderImpl? element:new ContactFolderImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContactFolderImpl>("contactFolders", contactFoldersArrValue);
        }
        if(this.contacts && this.contacts.length != 0){        const contactsArrValue: ContactImpl[] = [];
        this.contacts?.forEach(element => {
            contactsArrValue.push((element instanceof ContactImpl? element:new ContactImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContactImpl>("contacts", contactsArrValue);
        }
        if(this.country){
            writer.writeStringValue("country", this.country);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdObjects && this.createdObjects.length != 0){        const createdObjectsArrValue: DirectoryObjectImpl[] = [];
        this.createdObjects?.forEach(element => {
            createdObjectsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
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
        if(this.deviceManagementTroubleshootingEvents && this.deviceManagementTroubleshootingEvents.length != 0){        const deviceManagementTroubleshootingEventsArrValue: DeviceManagementTroubleshootingEventImpl[] = [];
        this.deviceManagementTroubleshootingEvents?.forEach(element => {
            deviceManagementTroubleshootingEventsArrValue.push((element instanceof DeviceManagementTroubleshootingEventImpl? element:new DeviceManagementTroubleshootingEventImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEventImpl>("deviceManagementTroubleshootingEvents", deviceManagementTroubleshootingEventsArrValue);
        }
        if(this.directReports && this.directReports.length != 0){        const directReportsArrValue: DirectoryObjectImpl[] = [];
        this.directReports?.forEach(element => {
            directReportsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("directReports", directReportsArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
            writer.writeObjectValue<DriveImpl>("drive", (!this.drive || this.drive instanceof DriveImpl? this.drive : new DriveImpl(this.drive)));
        }
        if(this.drives && this.drives.length != 0){        const drivesArrValue: DriveImpl[] = [];
        this.drives?.forEach(element => {
            drivesArrValue.push((element instanceof DriveImpl? element:new DriveImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveImpl>("drives", drivesArrValue);
        }
        if(this.employeeHireDate){
            writer.writeDateValue("employeeHireDate", this.employeeHireDate);
        }
        if(this.employeeId){
            writer.writeStringValue("employeeId", this.employeeId);
        }
        if(this.employeeOrgData){
            writer.writeObjectValue<EmployeeOrgDataImpl>("employeeOrgData", (!this.employeeOrgData || this.employeeOrgData instanceof EmployeeOrgDataImpl? this.employeeOrgData : new EmployeeOrgDataImpl(this.employeeOrgData)));
        }
        if(this.employeeType){
            writer.writeStringValue("employeeType", this.employeeType);
        }
        if(this.events && this.events.length != 0){        const eventsArrValue: EventImpl[] = [];
        this.events?.forEach(element => {
            eventsArrValue.push((element instanceof EventImpl? element:new EventImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EventImpl>("events", eventsArrValue);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
        });
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
        if(this.followedSites && this.followedSites.length != 0){        const followedSitesArrValue: SiteImpl[] = [];
        this.followedSites?.forEach(element => {
            followedSitesArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SiteImpl>("followedSites", followedSitesArrValue);
        }
        if(this.givenName){
            writer.writeStringValue("givenName", this.givenName);
        }
        if(this.hireDate){
            writer.writeDateValue("hireDate", this.hireDate);
        }
        if(this.identities && this.identities.length != 0){        const identitiesArrValue: ObjectIdentityImpl[] = [];
        this.identities?.forEach(element => {
            identitiesArrValue.push((element instanceof ObjectIdentityImpl? element:new ObjectIdentityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ObjectIdentityImpl>("identities", identitiesArrValue);
        }
        if(this.imAddresses){
            writer.writeCollectionOfPrimitiveValues<string>("imAddresses", this.imAddresses);
        }
        if(this.inferenceClassification){
            writer.writeObjectValue<InferenceClassificationImpl>("inferenceClassification", (!this.inferenceClassification || this.inferenceClassification instanceof InferenceClassificationImpl? this.inferenceClassification : new InferenceClassificationImpl(this.inferenceClassification)));
        }
        if(this.insights){
            writer.writeObjectValue<OfficeGraphInsightsImpl>("insights", (!this.insights || this.insights instanceof OfficeGraphInsightsImpl? this.insights : new OfficeGraphInsightsImpl(this.insights)));
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
        if(this.joinedTeams && this.joinedTeams.length != 0){        const joinedTeamsArrValue: TeamImpl[] = [];
        this.joinedTeams?.forEach(element => {
            joinedTeamsArrValue.push((element instanceof TeamImpl? element:new TeamImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TeamImpl>("joinedTeams", joinedTeamsArrValue);
        }
        if(this.lastPasswordChangeDateTime){
            writer.writeDateValue("lastPasswordChangeDateTime", this.lastPasswordChangeDateTime);
        }
        if(this.legalAgeGroupClassification){
            writer.writeStringValue("legalAgeGroupClassification", this.legalAgeGroupClassification);
        }
        if(this.licenseAssignmentStates && this.licenseAssignmentStates.length != 0){        const licenseAssignmentStatesArrValue: LicenseAssignmentStateImpl[] = [];
        this.licenseAssignmentStates?.forEach(element => {
            licenseAssignmentStatesArrValue.push((element instanceof LicenseAssignmentStateImpl? element:new LicenseAssignmentStateImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LicenseAssignmentStateImpl>("licenseAssignmentStates", licenseAssignmentStatesArrValue);
        }
        if(this.licenseDetails && this.licenseDetails.length != 0){        const licenseDetailsArrValue: LicenseDetailsImpl[] = [];
        this.licenseDetails?.forEach(element => {
            licenseDetailsArrValue.push((element instanceof LicenseDetailsImpl? element:new LicenseDetailsImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LicenseDetailsImpl>("licenseDetails", licenseDetailsArrValue);
        }
        if(this.mail){
            writer.writeStringValue("mail", this.mail);
        }
        if(this.mailboxSettings){
            writer.writeObjectValue<MailboxSettingsImpl>("mailboxSettings", (!this.mailboxSettings || this.mailboxSettings instanceof MailboxSettingsImpl? this.mailboxSettings : new MailboxSettingsImpl(this.mailboxSettings)));
        }
        if(this.mailFolders && this.mailFolders.length != 0){        const mailFoldersArrValue: MailFolderImpl[] = [];
        this.mailFolders?.forEach(element => {
            mailFoldersArrValue.push((element instanceof MailFolderImpl? element:new MailFolderImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MailFolderImpl>("mailFolders", mailFoldersArrValue);
        }
        if(this.mailNickname){
            writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.managedAppRegistrations && this.managedAppRegistrations.length != 0){        const managedAppRegistrationsArrValue: ManagedAppRegistrationImpl[] = [];
        this.managedAppRegistrations?.forEach(element => {
            managedAppRegistrationsArrValue.push((element instanceof ManagedAppRegistrationImpl? element:new ManagedAppRegistrationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppRegistrationImpl>("managedAppRegistrations", managedAppRegistrationsArrValue);
        }
        if(this.managedDevices && this.managedDevices.length != 0){        const managedDevicesArrValue: ManagedDeviceImpl[] = [];
        this.managedDevices?.forEach(element => {
            managedDevicesArrValue.push((element instanceof ManagedDeviceImpl? element:new ManagedDeviceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceImpl>("managedDevices", managedDevicesArrValue);
        }
        if(this.manager){
            writer.writeObjectValue<DirectoryObjectImpl>("manager", (!this.manager || this.manager instanceof DirectoryObjectImpl? this.manager : new DirectoryObjectImpl(this.manager)));
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = [];
        this.memberOf?.forEach(element => {
            memberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: MessageImpl[] = [];
        this.messages?.forEach(element => {
            messagesArrValue.push((element instanceof MessageImpl? element:new MessageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MessageImpl>("messages", messagesArrValue);
        }
        if(this.mobilePhone){
            writer.writeStringValue("mobilePhone", this.mobilePhone);
        }
        if(this.mySite){
            writer.writeStringValue("mySite", this.mySite);
        }
        if(this.oauth2PermissionGrants && this.oauth2PermissionGrants.length != 0){        const oauth2PermissionGrantsArrValue: OAuth2PermissionGrantImpl[] = [];
        this.oauth2PermissionGrants?.forEach(element => {
            oauth2PermissionGrantsArrValue.push((element instanceof OAuth2PermissionGrantImpl? element:new OAuth2PermissionGrantImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OAuth2PermissionGrantImpl>("oauth2PermissionGrants", oauth2PermissionGrantsArrValue);
        }
        if(this.officeLocation){
            writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.onenote){
            writer.writeObjectValue<OnenoteImpl>("onenote", (!this.onenote || this.onenote instanceof OnenoteImpl? this.onenote : new OnenoteImpl(this.onenote)));
        }
        if(this.onlineMeetings && this.onlineMeetings.length != 0){        const onlineMeetingsArrValue: OnlineMeetingImpl[] = [];
        this.onlineMeetings?.forEach(element => {
            onlineMeetingsArrValue.push((element instanceof OnlineMeetingImpl? element:new OnlineMeetingImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnlineMeetingImpl>("onlineMeetings", onlineMeetingsArrValue);
        }
        if(this.onPremisesDistinguishedName){
            writer.writeStringValue("onPremisesDistinguishedName", this.onPremisesDistinguishedName);
        }
        if(this.onPremisesDomainName){
            writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        }
        if(this.onPremisesExtensionAttributes){
            writer.writeObjectValue<OnPremisesExtensionAttributesImpl>("onPremisesExtensionAttributes", (!this.onPremisesExtensionAttributes || this.onPremisesExtensionAttributes instanceof OnPremisesExtensionAttributesImpl? this.onPremisesExtensionAttributes : new OnPremisesExtensionAttributesImpl(this.onPremisesExtensionAttributes)));
        }
        if(this.onPremisesImmutableId){
            writer.writeStringValue("onPremisesImmutableId", this.onPremisesImmutableId);
        }
        if(this.onPremisesLastSyncDateTime){
            writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesProvisioningErrors && this.onPremisesProvisioningErrors.length != 0){        const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = [];
        this.onPremisesProvisioningErrors?.forEach(element => {
            onPremisesProvisioningErrorsArrValue.push((element instanceof OnPremisesProvisioningErrorImpl? element:new OnPremisesProvisioningErrorImpl(element)));
        });
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
            writer.writeObjectValue<OutlookUserImpl>("outlook", (!this.outlook || this.outlook instanceof OutlookUserImpl? this.outlook : new OutlookUserImpl(this.outlook)));
        }
        if(this.ownedDevices && this.ownedDevices.length != 0){        const ownedDevicesArrValue: DirectoryObjectImpl[] = [];
        this.ownedDevices?.forEach(element => {
            ownedDevicesArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("ownedDevices", ownedDevicesArrValue);
        }
        if(this.ownedObjects && this.ownedObjects.length != 0){        const ownedObjectsArrValue: DirectoryObjectImpl[] = [];
        this.ownedObjects?.forEach(element => {
            ownedObjectsArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("ownedObjects", ownedObjectsArrValue);
        }
        if(this.passwordPolicies){
            writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        }
        if(this.passwordProfile){
            writer.writeObjectValue<PasswordProfileImpl>("passwordProfile", (!this.passwordProfile || this.passwordProfile instanceof PasswordProfileImpl? this.passwordProfile : new PasswordProfileImpl(this.passwordProfile)));
        }
        if(this.pastProjects){
            writer.writeCollectionOfPrimitiveValues<string>("pastProjects", this.pastProjects);
        }
        if(this.people && this.people.length != 0){        const peopleArrValue: PersonImpl[] = [];
        this.people?.forEach(element => {
            peopleArrValue.push((element instanceof PersonImpl? element:new PersonImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PersonImpl>("people", peopleArrValue);
        }
        if(this.photo){
            writer.writeObjectValue<ProfilePhotoImpl>("photo", (!this.photo || this.photo instanceof ProfilePhotoImpl? this.photo : new ProfilePhotoImpl(this.photo)));
        }
        if(this.photos && this.photos.length != 0){        const photosArrValue: ProfilePhotoImpl[] = [];
        this.photos?.forEach(element => {
            photosArrValue.push((element instanceof ProfilePhotoImpl? element:new ProfilePhotoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProfilePhotoImpl>("photos", photosArrValue);
        }
        if(this.planner){
            writer.writeObjectValue<PlannerUserImpl>("planner", (!this.planner || this.planner instanceof PlannerUserImpl? this.planner : new PlannerUserImpl(this.planner)));
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
            writer.writeObjectValue<PresenceImpl>("presence", (!this.presence || this.presence instanceof PresenceImpl? this.presence : new PresenceImpl(this.presence)));
        }
        if(this.provisionedPlans && this.provisionedPlans.length != 0){        const provisionedPlansArrValue: ProvisionedPlanImpl[] = [];
        this.provisionedPlans?.forEach(element => {
            provisionedPlansArrValue.push((element instanceof ProvisionedPlanImpl? element:new ProvisionedPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProvisionedPlanImpl>("provisionedPlans", provisionedPlansArrValue);
        }
        if(this.proxyAddresses){
            writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        }
        if(this.registeredDevices && this.registeredDevices.length != 0){        const registeredDevicesArrValue: DirectoryObjectImpl[] = [];
        this.registeredDevices?.forEach(element => {
            registeredDevicesArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("registeredDevices", registeredDevicesArrValue);
        }
        if(this.responsibilities){
            writer.writeCollectionOfPrimitiveValues<string>("responsibilities", this.responsibilities);
        }
        if(this.schools){
            writer.writeCollectionOfPrimitiveValues<string>("schools", this.schools);
        }
        if(this.scopedRoleMemberOf && this.scopedRoleMemberOf.length != 0){        const scopedRoleMemberOfArrValue: ScopedRoleMembershipImpl[] = [];
        this.scopedRoleMemberOf?.forEach(element => {
            scopedRoleMemberOfArrValue.push((element instanceof ScopedRoleMembershipImpl? element:new ScopedRoleMembershipImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("scopedRoleMemberOf", scopedRoleMemberOfArrValue);
        }
        if(this.settings){
            writer.writeObjectValue<UserSettingsImpl>("settings", (!this.settings || this.settings instanceof UserSettingsImpl? this.settings : new UserSettingsImpl(this.settings)));
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
            writer.writeObjectValue<UserTeamworkImpl>("teamwork", (!this.teamwork || this.teamwork instanceof UserTeamworkImpl? this.teamwork : new UserTeamworkImpl(this.teamwork)));
        }
        if(this.todo){
            writer.writeObjectValue<TodoImpl>("todo", (!this.todo || this.todo instanceof TodoImpl? this.todo : new TodoImpl(this.todo)));
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
        this.transitiveMemberOf?.forEach(element => {
            transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
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
    /**
     * Gets the settings property value. The settings property
     * @returns a UserSettingsInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings property
     * @param value Value to set for the settings property.
     */
    public set settings(value: UserSettings | undefined) {
        if(value) {
            this._settings = value instanceof UserSettingsImpl? value : new UserSettingsImpl(value);
        }
    };
    /**
     * Gets the showInAddressList property value. Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue.
     * @returns a boolean
     */
    public get showInAddressList() {
        return this._showInAddressList;
    };
    /**
     * Sets the showInAddressList property value. Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue.
     * @param value Value to set for the showInAddressList property.
     */
    public set showInAddressList(value: boolean | undefined) {
        if(value) {
            this._showInAddressList = value;
        }
    };
    /**
     * Gets the signInSessionsValidFromDateTime property value. Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset.
     * @returns a Date
     */
    public get signInSessionsValidFromDateTime() {
        return this._signInSessionsValidFromDateTime;
    };
    /**
     * Sets the signInSessionsValidFromDateTime property value. Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset.
     * @param value Value to set for the signInSessionsValidFromDateTime property.
     */
    public set signInSessionsValidFromDateTime(value: Date | undefined) {
        if(value) {
            this._signInSessionsValidFromDateTime = value;
        }
    };
    /**
     * Gets the skills property value. A list for the user to enumerate their skills. Returned only on $select.
     * @returns a string
     */
    public get skills() {
        return this._skills;
    };
    /**
     * Sets the skills property value. A list for the user to enumerate their skills. Returned only on $select.
     * @param value Value to set for the skills property.
     */
    public set skills(value: string[] | undefined) {
        if(value) {
            this._skills = value;
        }
    };
    /**
     * Gets the state property value. The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the streetAddress property value. The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get streetAddress() {
        return this._streetAddress;
    };
    /**
     * Sets the streetAddress property value. The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the streetAddress property.
     */
    public set streetAddress(value: string | undefined) {
        if(value) {
            this._streetAddress = value;
        }
    };
    /**
     * Gets the surname property value. The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        if(value) {
            this._surname = value;
        }
    };
    /**
     * Gets the teamwork property value. A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @returns a UserTeamworkInterface
     */
    public get teamwork() {
        return this._teamwork;
    };
    /**
     * Sets the teamwork property value. A container for Microsoft Teams features available for the user. Read-only. Nullable.
     * @param value Value to set for the teamwork property.
     */
    public set teamwork(value: UserTeamwork | undefined) {
        if(value) {
            this._teamwork = value instanceof UserTeamworkImpl? value : new UserTeamworkImpl(value);
        }
    };
    /**
     * Gets the todo property value. Represents the To Do services available to a user.
     * @returns a TodoInterface
     */
    public get todo() {
        return this._todo;
    };
    /**
     * Sets the todo property value. Represents the To Do services available to a user.
     * @param value Value to set for the todo property.
     */
    public set todo(value: Todo | undefined) {
        if(value) {
            this._todo = value instanceof TodoImpl? value : new TodoImpl(value);
        }
    };
    /**
     * Gets the transitiveMemberOf property value. The transitiveMemberOf property
     * @returns a DirectoryObjectInterface
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The transitiveMemberOf property
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
            this.transitiveMemberOf?.forEach(element => {
                transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._transitiveMemberOf = transitiveMemberOfArrValue;
        }
    };
    /**
     * Gets the usageLocation property value. A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get usageLocation() {
        return this._usageLocation;
    };
    /**
     * Sets the usageLocation property value. A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the usageLocation property.
     */
    public set usageLocation(value: string | undefined) {
        if(value) {
            this._usageLocation = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
    /**
     * Gets the userType property value. A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory?
     * @returns a string
     */
    public get userType() {
        return this._userType;
    };
    /**
     * Sets the userType property value. A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory?
     * @param value Value to set for the userType property.
     */
    public set userType(value: string | undefined) {
        if(value) {
            this._userType = value;
        }
    };
}
