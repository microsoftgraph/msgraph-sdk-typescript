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
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {EmployeeOrgData} from './employeeOrgData';
import {Event} from './event';
import {Extension} from './extension';
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
import {UserActivity} from './userActivity';
import {UserSettings} from './userSettings';
import {UserTeamwork} from './userTeamwork';

export interface User extends DirectoryObject{
    /** A freeform text entry field for the user to describe themselves. Returned only on $select. */
    aboutMe?:string | undefined;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in). */
    accountEnabled?:boolean | undefined;
    /** The user's activities across devices. Read-only. Nullable. */
    activities?:UserActivity[] | undefined;
    /** Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    ageGroup?:string | undefined;
    /** The user's terms of use acceptance statuses. Read-only. Nullable. */
    agreementAcceptances?:AgreementAcceptance[] | undefined;
    /** Represents the app roles a user has been granted for an application. Supports $expand. */
    appRoleAssignments?:AppRoleAssignment[] | undefined;
    /** The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq, not, and counting empty collections). */
    assignedLicenses?:AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and not). */
    assignedPlans?:AssignedPlan[] | undefined;
    /** TODO: Add Description */
    authentication?:Authentication | undefined;
    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select. */
    birthday?:Date | undefined;
    /** The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq, not, ge, le, startsWith). */
    businessPhones?:string[] | undefined;
    /** The user's primary calendar. Read-only. */
    calendar?:Calendar | undefined;
    /** The user's calendar groups. Read-only. Nullable. */
    calendarGroups?:CalendarGroup[] | undefined;
    /** The user's calendars. Read-only. Nullable. */
    calendars?:Calendar[] | undefined;
    /** The calendar view for the calendar. Read-only. Nullable. */
    calendarView?:Event[] | undefined;
    /** The chats property */
    chats?:Chat[] | undefined;
    /** The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    city?:string | undefined;
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    companyName?:string | undefined;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    consentProvidedForMinor?:string | undefined;
    /** The user's contacts folders. Read-only. Nullable. */
    contactFolders?:ContactFolder[] | undefined;
    /** The user's contacts. Read-only. Nullable. */
    contacts?:Contact[] | undefined;
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    country?:string | undefined;
    /** The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, not , ge, le, in). */
    createdDateTime?:Date | undefined;
    /** Directory objects that were created by the user. Read-only. Nullable. */
    createdObjects?:DirectoryObject[] | undefined;
    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in). */
    creationType?:string | undefined;
    /** The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values). */
    department?:string | undefined;
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000. */
    deviceEnrollmentLimit?:number | undefined;
    /** The list of troubleshooting events for this user. */
    deviceManagementTroubleshootingEvents?:DeviceManagementTroubleshootingEvent[] | undefined;
    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand. */
    directReports?:DirectoryObject[] | undefined;
    /** The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderBy, and $search. */
    displayName?:string | undefined;
    /** The user's OneDrive. Read-only. */
    drive?:Drive | undefined;
    /** A collection of drives available for this user. Read-only. */
    drives?:Drive[] | undefined;
    /** The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, not , ge, le, in). */
    employeeHireDate?:Date | undefined;
    /** The employee identifier assigned to the user by the organization. The maximum length is 16 characters.Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    employeeId?:string | undefined;
    /** Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, not , ge, le, in). */
    employeeOrgData?:EmployeeOrgData | undefined;
    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith). */
    employeeType?:string | undefined;
    /** The user's events. Default is to show events under the Default Calendar. Read-only. Nullable. */
    events?:Event[] | undefined;
    /** The collection of open extensions defined for the user. Nullable. */
    extensions?:Extension[] | undefined;
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in). */
    externalUserState?:string | undefined;
    /** Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in). */
    externalUserStateChangeDateTime?:Date | undefined;
    /** The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    faxNumber?:string | undefined;
    /** The followedSites property */
    followedSites?:Site[] | undefined;
    /** The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    givenName?:string | undefined;
    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs. */
    hireDate?:Date | undefined;
    /** Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName. */
    identities?:ObjectIdentity[] | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, not, ge, le, startsWith). */
    imAddresses?:string[] | undefined;
    /** Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance. */
    inferenceClassification?:InferenceClassification | undefined;
    /** Read-only. Nullable. */
    insights?:OfficeGraphInsights | undefined;
    /** A list for the user to describe their interests. Returned only on $select. */
    interests?:string[] | undefined;
    /** Do not use – reserved for future use. */
    isResourceAccount?:boolean | undefined;
    /** The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    jobTitle?:string | undefined;
    /** The Microsoft Teams teams that the user is a member of. Read-only. Nullable. */
    joinedTeams?:Team[] | undefined;
    /** The time when this Azure AD user last changed their password or when their password was created, , whichever date the latest action was performed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. */
    lastPasswordChangeDateTime?:Date | undefined;
    /** Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select. */
    legalAgeGroupClassification?:string | undefined;
    /** State of license assignments for this user. Read-only. Returned only on $select. */
    licenseAssignmentStates?:LicenseAssignmentState[] | undefined;
    /** A collection of this user's license details. Read-only. */
    licenseDetails?:LicenseDetails[] | undefined;
    /** The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. For Azure AD B2C accounts, this property can be updated up to only ten times with unique SMTP addresses. This property cannot contain accent characters.  Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values). */
    mail?:string | undefined;
    /** Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select. */
    mailboxSettings?:MailboxSettings | undefined;
    /** The user's mail folders. Read-only. Nullable. */
    mailFolders?:MailFolder[] | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mailNickname?:string | undefined;
    /** Zero or more managed app registrations that belong to the user. */
    managedAppRegistrations?:ManagedAppRegistration[] | undefined;
    /** The managed devices associated with the user. */
    managedDevices?:ManagedDevice[] | undefined;
    /** The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand. */
    manager?:DirectoryObject | undefined;
    /** The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand. */
    memberOf?:DirectoryObject[] | undefined;
    /** The messages in a mailbox or folder. Read-only. Nullable. */
    messages?:Message[] | undefined;
    /** The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mobilePhone?:string | undefined;
    /** The URL for the user's personal site. Returned only on $select. */
    mySite?:string | undefined;
    /** The oauth2PermissionGrants property */
    oauth2PermissionGrants?:OAuth2PermissionGrant[] | undefined;
    /** The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    officeLocation?:string | undefined;
    /** Read-only. */
    onenote?:Onenote | undefined;
    /** The onlineMeetings property */
    onlineMeetings?:OnlineMeeting[] | undefined;
    /** Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    onPremisesDistinguishedName?:string | undefined;
    /** Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. */
    onPremisesDomainName?:string | undefined;
    /** Contains extensionAttributes1-15 for the user. The individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. These extension attributes are also known as Exchange custom attributes 1-15. Returned only on $select. */
    onPremisesExtensionAttributes?:OnPremisesExtensionAttributes | undefined;
    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesImmutableId?:string | undefined;
    /** Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesLastSyncDateTime?:Date | undefined;
    /** Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, not, ge, le). */
    onPremisesProvisioningErrors?:OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    onPremisesSamAccountName?:string | undefined;
    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Supports $filter (eq including on null values). */
    onPremisesSecurityIdentifier?:string | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    onPremisesSyncEnabled?:boolean | undefined;
    /** Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    onPremisesUserPrincipalName?:string | undefined;
    /** A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: This property cannot contain accent characters.Supports $filter (eq, not, ge, le, in, startsWith, and counting empty collections). */
    otherMails?:string[] | undefined;
    /** Selective Outlook services available to the user. Read-only. Nullable. */
    outlook?:OutlookUser | undefined;
    /** Devices that are owned by the user. Read-only. Nullable. Supports $expand. */
    ownedDevices?:DirectoryObject[] | undefined;
    /** Directory objects that are owned by the user. Read-only. Nullable. Supports $expand. */
    ownedObjects?:DirectoryObject[] | undefined;
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. For more information on the default password policies, see Azure AD pasword policies. Supports $filter (ne, not, and eq on null values). */
    passwordPolicies?:string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, not, in, and eq on null values). */
    passwordProfile?:PasswordProfile | undefined;
    /** A list for the user to enumerate their past projects. Returned only on $select. */
    pastProjects?:string[] | undefined;
    /** Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks. */
    people?:Person[] | undefined;
    /** The user's profile photo. Read-only. */
    photo?:ProfilePhoto | undefined;
    /** Read-only. Nullable. */
    photos?:ProfilePhoto[] | undefined;
    /** Selective Planner services available to the user. Read-only. Nullable. */
    planner?:PlannerUser | undefined;
    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    postalCode?:string | undefined;
    /** The preferred data location for the user. For more information, see OneDrive Online Multi-Geo. */
    preferredDataLocation?:string | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    preferredLanguage?:string | undefined;
    /** The preferred name for the user. Returned only on $select. */
    preferredName?:string | undefined;
    /** The presence property */
    presence?:Presence | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, not, ge, le). */
    provisionedPlans?:ProvisionedPlan[] | undefined;
    /** For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of ten unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, and counting empty collections). */
    proxyAddresses?:string[] | undefined;
    /** Devices that are registered for the user. Read-only. Nullable. Supports $expand. */
    registeredDevices?:DirectoryObject[] | undefined;
    /** A list for the user to enumerate their responsibilities. Returned only on $select. */
    responsibilities?:string[] | undefined;
    /** A list for the user to enumerate the schools they have attended. Returned only on $select. */
    schools?:string[] | undefined;
    /** The scoped-role administrative unit memberships for this user. Read-only. Nullable. */
    scopedRoleMemberOf?:ScopedRoleMembership[] | undefined;
    /** Read-only. Nullable. */
    settings?:UserSettings | undefined;
    /** true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Supports $filter (eq, ne, not, in). */
    showInAddressList?:boolean | undefined;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. */
    signInSessionsValidFromDateTime?:Date | undefined;
    /** A list for the user to enumerate their skills. Returned only on $select. */
    skills?:string[] | undefined;
    /** The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    state?:string | undefined;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    streetAddress?:string | undefined;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    surname?:string | undefined;
    /** A container for Microsoft Teams features available for the user. Read-only. Nullable. */
    teamwork?:UserTeamwork | undefined;
    /** Represents the To Do services available to a user. */
    todo?:Todo | undefined;
    /** The transitiveMemberOf property */
    transitiveMemberOf?:DirectoryObject[] | undefined;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    usageLocation?:string | undefined;
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy. */
    userPrincipalName?:string | undefined;
    /** A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory? */
    userType?:string | undefined;
}
