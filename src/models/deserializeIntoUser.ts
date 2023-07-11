import {AgreementAcceptance} from './agreementAcceptance';
import {AppRoleAssignment} from './appRoleAssignment';
import {AssignedLicense} from './assignedLicense';
import {AssignedPlan} from './assignedPlan';
import {Authentication} from './authentication';
import {AuthorizationInfo} from './authorizationInfo';
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
import {createAuthorizationInfoFromDiscriminatorValue} from './createAuthorizationInfoFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createCalendarGroupFromDiscriminatorValue} from './createCalendarGroupFromDiscriminatorValue';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDeviceManagementTroubleshootingEventFromDiscriminatorValue} from './createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createEmployeeExperienceUserFromDiscriminatorValue} from './createEmployeeExperienceUserFromDiscriminatorValue';
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
import {createSignInActivityFromDiscriminatorValue} from './createSignInActivityFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTodoFromDiscriminatorValue} from './createTodoFromDiscriminatorValue';
import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {createUserPrintFromDiscriminatorValue} from './createUserPrintFromDiscriminatorValue';
import {createUserSettingsFromDiscriminatorValue} from './createUserSettingsFromDiscriminatorValue';
import {createUserTeamworkFromDiscriminatorValue} from './createUserTeamworkFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {EmployeeExperienceUser} from './employeeExperienceUser';
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
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import {serializeAssignedLicense} from './serializeAssignedLicense';
import {serializeAssignedPlan} from './serializeAssignedPlan';
import {serializeAuthentication} from './serializeAuthentication';
import {serializeAuthorizationInfo} from './serializeAuthorizationInfo';
import {serializeCalendar} from './serializeCalendar';
import {serializeCalendarGroup} from './serializeCalendarGroup';
import {serializeChat} from './serializeChat';
import {serializeContact} from './serializeContact';
import {serializeContactFolder} from './serializeContactFolder';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeDrive} from './serializeDrive';
import {serializeEmployeeExperienceUser} from './serializeEmployeeExperienceUser';
import {serializeEmployeeOrgData} from './serializeEmployeeOrgData';
import {serializeEvent} from './serializeEvent';
import {serializeExtension} from './serializeExtension';
import {serializeInferenceClassification} from './serializeInferenceClassification';
import {serializeLicenseAssignmentState} from './serializeLicenseAssignmentState';
import {serializeLicenseDetails} from './serializeLicenseDetails';
import {serializeMailboxSettings} from './serializeMailboxSettings';
import {serializeMailFolder} from './serializeMailFolder';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {serializeManagedDevice} from './serializeManagedDevice';
import {serializeMessage} from './serializeMessage';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {serializeObjectIdentity} from './serializeObjectIdentity';
import {serializeOfficeGraphInsights} from './serializeOfficeGraphInsights';
import {serializeOnenote} from './serializeOnenote';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {serializeOnPremisesExtensionAttributes} from './serializeOnPremisesExtensionAttributes';
import {serializeOnPremisesProvisioningError} from './serializeOnPremisesProvisioningError';
import {serializeOutlookUser} from './serializeOutlookUser';
import {serializePasswordProfile} from './serializePasswordProfile';
import {serializePerson} from './serializePerson';
import {serializePlannerUser} from './serializePlannerUser';
import {serializePresence} from './serializePresence';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {serializeProvisionedPlan} from './serializeProvisionedPlan';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {serializeSignInActivity} from './serializeSignInActivity';
import {serializeSite} from './serializeSite';
import {serializeTeam} from './serializeTeam';
import {serializeTodo} from './serializeTodo';
import {serializeUserActivity} from './serializeUserActivity';
import {serializeUserPrint} from './serializeUserPrint';
import {serializeUserSettings} from './serializeUserSettings';
import {serializeUserTeamwork} from './serializeUserTeamwork';
import {SignInActivity} from './signInActivity';
import {Site} from './site';
import {Team} from './team';
import {Todo} from './todo';
import {User} from './user';
import {UserActivity} from './userActivity';
import {UserPrint} from './userPrint';
import {UserSettings} from './userSettings';
import {UserTeamwork} from './userTeamwork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUser(user: User | undefined = {} as User) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(user),
        "aboutMe": n => { user.aboutMe = n.getStringValue(); },
        "accountEnabled": n => { user.accountEnabled = n.getBooleanValue(); },
        "activities": n => { user.activities = n.getCollectionOfObjectValues<UserActivity>(createUserActivityFromDiscriminatorValue); },
        "ageGroup": n => { user.ageGroup = n.getStringValue(); },
        "agreementAcceptances": n => { user.agreementAcceptances = n.getCollectionOfObjectValues<AgreementAcceptance>(createAgreementAcceptanceFromDiscriminatorValue); },
        "appRoleAssignments": n => { user.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
        "assignedLicenses": n => { user.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
        "assignedPlans": n => { user.assignedPlans = n.getCollectionOfObjectValues<AssignedPlan>(createAssignedPlanFromDiscriminatorValue); },
        "authentication": n => { user.authentication = n.getObjectValue<Authentication>(createAuthenticationFromDiscriminatorValue); },
        "authorizationInfo": n => { user.authorizationInfo = n.getObjectValue<AuthorizationInfo>(createAuthorizationInfoFromDiscriminatorValue); },
        "birthday": n => { user.birthday = n.getDateValue(); },
        "businessPhones": n => { user.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
        "calendar": n => { user.calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
        "calendarGroups": n => { user.calendarGroups = n.getCollectionOfObjectValues<CalendarGroup>(createCalendarGroupFromDiscriminatorValue); },
        "calendars": n => { user.calendars = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
        "calendarView": n => { user.calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "chats": n => { user.chats = n.getCollectionOfObjectValues<Chat>(createChatFromDiscriminatorValue); },
        "city": n => { user.city = n.getStringValue(); },
        "companyName": n => { user.companyName = n.getStringValue(); },
        "consentProvidedForMinor": n => { user.consentProvidedForMinor = n.getStringValue(); },
        "contactFolders": n => { user.contactFolders = n.getCollectionOfObjectValues<ContactFolder>(createContactFolderFromDiscriminatorValue); },
        "contacts": n => { user.contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
        "country": n => { user.country = n.getStringValue(); },
        "createdDateTime": n => { user.createdDateTime = n.getDateValue(); },
        "createdObjects": n => { user.createdObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "creationType": n => { user.creationType = n.getStringValue(); },
        "department": n => { user.department = n.getStringValue(); },
        "deviceEnrollmentLimit": n => { user.deviceEnrollmentLimit = n.getNumberValue(); },
        "deviceManagementTroubleshootingEvents": n => { user.deviceManagementTroubleshootingEvents = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>(createDeviceManagementTroubleshootingEventFromDiscriminatorValue); },
        "directReports": n => { user.directReports = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "displayName": n => { user.displayName = n.getStringValue(); },
        "drive": n => { user.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
        "drives": n => { user.drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); },
        "employeeExperience": n => { user.employeeExperience = n.getObjectValue<EmployeeExperienceUser>(createEmployeeExperienceUserFromDiscriminatorValue); },
        "employeeHireDate": n => { user.employeeHireDate = n.getDateValue(); },
        "employeeId": n => { user.employeeId = n.getStringValue(); },
        "employeeLeaveDateTime": n => { user.employeeLeaveDateTime = n.getDateValue(); },
        "employeeOrgData": n => { user.employeeOrgData = n.getObjectValue<EmployeeOrgData>(createEmployeeOrgDataFromDiscriminatorValue); },
        "employeeType": n => { user.employeeType = n.getStringValue(); },
        "events": n => { user.events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "extensions": n => { user.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "externalUserState": n => { user.externalUserState = n.getStringValue(); },
        "externalUserStateChangeDateTime": n => { user.externalUserStateChangeDateTime = n.getDateValue(); },
        "faxNumber": n => { user.faxNumber = n.getStringValue(); },
        "followedSites": n => { user.followedSites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
        "givenName": n => { user.givenName = n.getStringValue(); },
        "hireDate": n => { user.hireDate = n.getDateValue(); },
        "identities": n => { user.identities = n.getCollectionOfObjectValues<ObjectIdentity>(createObjectIdentityFromDiscriminatorValue); },
        "imAddresses": n => { user.imAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "inferenceClassification": n => { user.inferenceClassification = n.getObjectValue<InferenceClassification>(createInferenceClassificationFromDiscriminatorValue); },
        "insights": n => { user.insights = n.getObjectValue<OfficeGraphInsights>(createOfficeGraphInsightsFromDiscriminatorValue); },
        "interests": n => { user.interests = n.getCollectionOfPrimitiveValues<string>(); },
        "isResourceAccount": n => { user.isResourceAccount = n.getBooleanValue(); },
        "jobTitle": n => { user.jobTitle = n.getStringValue(); },
        "joinedTeams": n => { user.joinedTeams = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
        "lastPasswordChangeDateTime": n => { user.lastPasswordChangeDateTime = n.getDateValue(); },
        "legalAgeGroupClassification": n => { user.legalAgeGroupClassification = n.getStringValue(); },
        "licenseAssignmentStates": n => { user.licenseAssignmentStates = n.getCollectionOfObjectValues<LicenseAssignmentState>(createLicenseAssignmentStateFromDiscriminatorValue); },
        "licenseDetails": n => { user.licenseDetails = n.getCollectionOfObjectValues<LicenseDetails>(createLicenseDetailsFromDiscriminatorValue); },
        "mail": n => { user.mail = n.getStringValue(); },
        "mailboxSettings": n => { user.mailboxSettings = n.getObjectValue<MailboxSettings>(createMailboxSettingsFromDiscriminatorValue); },
        "mailFolders": n => { user.mailFolders = n.getCollectionOfObjectValues<MailFolder>(createMailFolderFromDiscriminatorValue); },
        "mailNickname": n => { user.mailNickname = n.getStringValue(); },
        "managedAppRegistrations": n => { user.managedAppRegistrations = n.getCollectionOfObjectValues<ManagedAppRegistration>(createManagedAppRegistrationFromDiscriminatorValue); },
        "managedDevices": n => { user.managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); },
        "manager": n => { user.manager = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "memberOf": n => { user.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "messages": n => { user.messages = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); },
        "mobilePhone": n => { user.mobilePhone = n.getStringValue(); },
        "mySite": n => { user.mySite = n.getStringValue(); },
        "oauth2PermissionGrants": n => { user.oauth2PermissionGrants = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(createOAuth2PermissionGrantFromDiscriminatorValue); },
        "officeLocation": n => { user.officeLocation = n.getStringValue(); },
        "onenote": n => { user.onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); },
        "onlineMeetings": n => { user.onlineMeetings = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); },
        "onPremisesDistinguishedName": n => { user.onPremisesDistinguishedName = n.getStringValue(); },
        "onPremisesDomainName": n => { user.onPremisesDomainName = n.getStringValue(); },
        "onPremisesExtensionAttributes": n => { user.onPremisesExtensionAttributes = n.getObjectValue<OnPremisesExtensionAttributes>(createOnPremisesExtensionAttributesFromDiscriminatorValue); },
        "onPremisesImmutableId": n => { user.onPremisesImmutableId = n.getStringValue(); },
        "onPremisesLastSyncDateTime": n => { user.onPremisesLastSyncDateTime = n.getDateValue(); },
        "onPremisesProvisioningErrors": n => { user.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
        "onPremisesSamAccountName": n => { user.onPremisesSamAccountName = n.getStringValue(); },
        "onPremisesSecurityIdentifier": n => { user.onPremisesSecurityIdentifier = n.getStringValue(); },
        "onPremisesSyncEnabled": n => { user.onPremisesSyncEnabled = n.getBooleanValue(); },
        "onPremisesUserPrincipalName": n => { user.onPremisesUserPrincipalName = n.getStringValue(); },
        "otherMails": n => { user.otherMails = n.getCollectionOfPrimitiveValues<string>(); },
        "outlook": n => { user.outlook = n.getObjectValue<OutlookUser>(createOutlookUserFromDiscriminatorValue); },
        "ownedDevices": n => { user.ownedDevices = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "ownedObjects": n => { user.ownedObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "passwordPolicies": n => { user.passwordPolicies = n.getStringValue(); },
        "passwordProfile": n => { user.passwordProfile = n.getObjectValue<PasswordProfile>(createPasswordProfileFromDiscriminatorValue); },
        "pastProjects": n => { user.pastProjects = n.getCollectionOfPrimitiveValues<string>(); },
        "people": n => { user.people = n.getCollectionOfObjectValues<Person>(createPersonFromDiscriminatorValue); },
        "photo": n => { user.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
        "photos": n => { user.photos = n.getCollectionOfObjectValues<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
        "planner": n => { user.planner = n.getObjectValue<PlannerUser>(createPlannerUserFromDiscriminatorValue); },
        "postalCode": n => { user.postalCode = n.getStringValue(); },
        "preferredDataLocation": n => { user.preferredDataLocation = n.getStringValue(); },
        "preferredLanguage": n => { user.preferredLanguage = n.getStringValue(); },
        "preferredName": n => { user.preferredName = n.getStringValue(); },
        "presence": n => { user.presence = n.getObjectValue<Presence>(createPresenceFromDiscriminatorValue); },
        "print": n => { user.print = n.getObjectValue<UserPrint>(createUserPrintFromDiscriminatorValue); },
        "provisionedPlans": n => { user.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlan>(createProvisionedPlanFromDiscriminatorValue); },
        "proxyAddresses": n => { user.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "registeredDevices": n => { user.registeredDevices = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "responsibilities": n => { user.responsibilities = n.getCollectionOfPrimitiveValues<string>(); },
        "schools": n => { user.schools = n.getCollectionOfPrimitiveValues<string>(); },
        "scopedRoleMemberOf": n => { user.scopedRoleMemberOf = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); },
        "securityIdentifier": n => { user.securityIdentifier = n.getStringValue(); },
        "settings": n => { user.settings = n.getObjectValue<UserSettings>(createUserSettingsFromDiscriminatorValue); },
        "showInAddressList": n => { user.showInAddressList = n.getBooleanValue(); },
        "signInActivity": n => { user.signInActivity = n.getObjectValue<SignInActivity>(createSignInActivityFromDiscriminatorValue); },
        "signInSessionsValidFromDateTime": n => { user.signInSessionsValidFromDateTime = n.getDateValue(); },
        "skills": n => { user.skills = n.getCollectionOfPrimitiveValues<string>(); },
        "state": n => { user.state = n.getStringValue(); },
        "streetAddress": n => { user.streetAddress = n.getStringValue(); },
        "surname": n => { user.surname = n.getStringValue(); },
        "teamwork": n => { user.teamwork = n.getObjectValue<UserTeamwork>(createUserTeamworkFromDiscriminatorValue); },
        "todo": n => { user.todo = n.getObjectValue<Todo>(createTodoFromDiscriminatorValue); },
        "transitiveMemberOf": n => { user.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "usageLocation": n => { user.usageLocation = n.getStringValue(); },
        "userPrincipalName": n => { user.userPrincipalName = n.getStringValue(); },
        "userType": n => { user.userType = n.getStringValue(); },
    }
}
