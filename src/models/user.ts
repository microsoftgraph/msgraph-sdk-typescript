import { createAgreementAcceptanceFromDiscriminatorValue, serializeAgreementAcceptance, type AgreementAcceptance } from './agreementAcceptance';
import { createAppRoleAssignmentFromDiscriminatorValue, serializeAppRoleAssignment, type AppRoleAssignment } from './appRoleAssignment';
import { createAssignedLicenseFromDiscriminatorValue, serializeAssignedLicense, type AssignedLicense } from './assignedLicense';
import { createAssignedPlanFromDiscriminatorValue, serializeAssignedPlan, type AssignedPlan } from './assignedPlan';
import { createAuthenticationFromDiscriminatorValue, serializeAuthentication, type Authentication } from './authentication';
import { createAuthorizationInfoFromDiscriminatorValue, serializeAuthorizationInfo, type AuthorizationInfo } from './authorizationInfo';
import { createCalendarFromDiscriminatorValue, serializeCalendar, type Calendar } from './calendar';
import { createCalendarGroupFromDiscriminatorValue, serializeCalendarGroup, type CalendarGroup } from './calendarGroup';
import { createChatFromDiscriminatorValue, serializeChat, type Chat } from './chat';
import { createContactFromDiscriminatorValue, serializeContact, type Contact } from './contact';
import { createContactFolderFromDiscriminatorValue, serializeContactFolder, type ContactFolder } from './contactFolder';
import { createCustomSecurityAttributeValueFromDiscriminatorValue, serializeCustomSecurityAttributeValue, type CustomSecurityAttributeValue } from './customSecurityAttributeValue';
import { createDeviceManagementTroubleshootingEventFromDiscriminatorValue, serializeDeviceManagementTroubleshootingEvent, type DeviceManagementTroubleshootingEvent } from './deviceManagementTroubleshootingEvent';
import { createDirectoryObjectFromDiscriminatorValue, deserializeIntoDirectoryObject, serializeDirectoryObject, type DirectoryObject } from './directoryObject';
import { createDriveFromDiscriminatorValue, serializeDrive, type Drive } from './drive';
import { createEmployeeExperienceUserFromDiscriminatorValue, serializeEmployeeExperienceUser, type EmployeeExperienceUser } from './employeeExperienceUser';
import { createEmployeeOrgDataFromDiscriminatorValue, serializeEmployeeOrgData, type EmployeeOrgData } from './employeeOrgData';
import { createEventFromDiscriminatorValue, serializeEvent, type Event } from './event';
import { createExtensionFromDiscriminatorValue, serializeExtension, type Extension } from './extension';
import { createInferenceClassificationFromDiscriminatorValue, serializeInferenceClassification, type InferenceClassification } from './inferenceClassification';
import { createLicenseAssignmentStateFromDiscriminatorValue, serializeLicenseAssignmentState, type LicenseAssignmentState } from './licenseAssignmentState';
import { createLicenseDetailsFromDiscriminatorValue, serializeLicenseDetails, type LicenseDetails } from './licenseDetails';
import { createMailboxSettingsFromDiscriminatorValue, serializeMailboxSettings, type MailboxSettings } from './mailboxSettings';
import { createMailFolderFromDiscriminatorValue, serializeMailFolder, type MailFolder } from './mailFolder';
import { createManagedAppRegistrationFromDiscriminatorValue, serializeManagedAppRegistration, type ManagedAppRegistration } from './managedAppRegistration';
import { createManagedDeviceFromDiscriminatorValue, serializeManagedDevice, type ManagedDevice } from './managedDevice';
import { createMessageFromDiscriminatorValue, serializeMessage, type Message } from './message';
import { createOAuth2PermissionGrantFromDiscriminatorValue, serializeOAuth2PermissionGrant, type OAuth2PermissionGrant } from './oAuth2PermissionGrant';
import { createObjectIdentityFromDiscriminatorValue, serializeObjectIdentity, type ObjectIdentity } from './objectIdentity';
import { createOfficeGraphInsightsFromDiscriminatorValue, serializeOfficeGraphInsights, type OfficeGraphInsights } from './officeGraphInsights';
import { createOnenoteFromDiscriminatorValue, serializeOnenote, type Onenote } from './onenote';
import { createOnlineMeetingFromDiscriminatorValue, serializeOnlineMeeting, type OnlineMeeting } from './onlineMeeting';
import { createOnPremisesExtensionAttributesFromDiscriminatorValue, serializeOnPremisesExtensionAttributes, type OnPremisesExtensionAttributes } from './onPremisesExtensionAttributes';
import { createOnPremisesProvisioningErrorFromDiscriminatorValue, serializeOnPremisesProvisioningError, type OnPremisesProvisioningError } from './onPremisesProvisioningError';
import { createOutlookUserFromDiscriminatorValue, serializeOutlookUser, type OutlookUser } from './outlookUser';
import { createPasswordProfileFromDiscriminatorValue, serializePasswordProfile, type PasswordProfile } from './passwordProfile';
import { createPersonFromDiscriminatorValue, serializePerson, type Person } from './person';
import { createPlannerUserFromDiscriminatorValue, serializePlannerUser, type PlannerUser } from './plannerUser';
import { createPresenceFromDiscriminatorValue, serializePresence, type Presence } from './presence';
import { createProfilePhotoFromDiscriminatorValue, serializeProfilePhoto, type ProfilePhoto } from './profilePhoto';
import { createProvisionedPlanFromDiscriminatorValue, serializeProvisionedPlan, type ProvisionedPlan } from './provisionedPlan';
import { createScopedRoleMembershipFromDiscriminatorValue, serializeScopedRoleMembership, type ScopedRoleMembership } from './scopedRoleMembership';
import { createServiceProvisioningErrorFromDiscriminatorValue, serializeServiceProvisioningError, type ServiceProvisioningError } from './serviceProvisioningError';
import { createSignInActivityFromDiscriminatorValue, serializeSignInActivity, type SignInActivity } from './signInActivity';
import { createSiteFromDiscriminatorValue, serializeSite, type Site } from './site';
import { createTeamFromDiscriminatorValue, serializeTeam, type Team } from './team';
import { createTodoFromDiscriminatorValue, serializeTodo, type Todo } from './todo';
import { createUserActivityFromDiscriminatorValue, serializeUserActivity, type UserActivity } from './userActivity';
import { createUserPrintFromDiscriminatorValue, serializeUserPrint, type UserPrint } from './userPrint';
import { createUserSettingsFromDiscriminatorValue, serializeUserSettings, type UserSettings } from './userSettings';
import { createUserTeamworkFromDiscriminatorValue, serializeUserTeamwork, type UserTeamwork } from './userTeamwork';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function createUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUser;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
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
        "customSecurityAttributes": n => { user.customSecurityAttributes = n.getObjectValue<CustomSecurityAttributeValue>(createCustomSecurityAttributeValueFromDiscriminatorValue); },
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
        "serviceProvisioningErrors": n => { user.serviceProvisioningErrors = n.getCollectionOfObjectValues<ServiceProvisioningError>(createServiceProvisioningErrorFromDiscriminatorValue); },
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
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function serializeUser(writer: SerializationWriter, user: User | undefined = {} as User) : void {
        serializeDirectoryObject(writer, user)
        writer.writeStringValue("aboutMe", user.aboutMe);
        writer.writeBooleanValue("accountEnabled", user.accountEnabled);
        writer.writeCollectionOfObjectValues<UserActivity>("activities", user.activities, );
        writer.writeStringValue("ageGroup", user.ageGroup);
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("agreementAcceptances", user.agreementAcceptances, );
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", user.appRoleAssignments, );
        writer.writeCollectionOfObjectValues<AssignedLicense>("assignedLicenses", user.assignedLicenses, );
        writer.writeCollectionOfObjectValues<AssignedPlan>("assignedPlans", user.assignedPlans, );
        writer.writeObjectValue<Authentication>("authentication", user.authentication, );
        writer.writeObjectValue<AuthorizationInfo>("authorizationInfo", user.authorizationInfo, );
        writer.writeDateValue("birthday", user.birthday);
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", user.businessPhones);
        writer.writeObjectValue<Calendar>("calendar", user.calendar, );
        writer.writeCollectionOfObjectValues<CalendarGroup>("calendarGroups", user.calendarGroups, );
        writer.writeCollectionOfObjectValues<Calendar>("calendars", user.calendars, );
        writer.writeCollectionOfObjectValues<Event>("calendarView", user.calendarView, );
        writer.writeCollectionOfObjectValues<Chat>("chats", user.chats, );
        writer.writeStringValue("city", user.city);
        writer.writeStringValue("companyName", user.companyName);
        writer.writeStringValue("consentProvidedForMinor", user.consentProvidedForMinor);
        writer.writeCollectionOfObjectValues<ContactFolder>("contactFolders", user.contactFolders, );
        writer.writeCollectionOfObjectValues<Contact>("contacts", user.contacts, );
        writer.writeStringValue("country", user.country);
        writer.writeDateValue("createdDateTime", user.createdDateTime);
        writer.writeCollectionOfObjectValues<DirectoryObject>("createdObjects", user.createdObjects, );
        writer.writeStringValue("creationType", user.creationType);
        writer.writeObjectValue<CustomSecurityAttributeValue>("customSecurityAttributes", user.customSecurityAttributes, );
        writer.writeStringValue("department", user.department);
        writer.writeNumberValue("deviceEnrollmentLimit", user.deviceEnrollmentLimit);
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("deviceManagementTroubleshootingEvents", user.deviceManagementTroubleshootingEvents, );
        writer.writeCollectionOfObjectValues<DirectoryObject>("directReports", user.directReports, );
        writer.writeStringValue("displayName", user.displayName);
        writer.writeObjectValue<Drive>("drive", user.drive, );
        writer.writeCollectionOfObjectValues<Drive>("drives", user.drives, );
        writer.writeObjectValue<EmployeeExperienceUser>("employeeExperience", user.employeeExperience, );
        writer.writeDateValue("employeeHireDate", user.employeeHireDate);
        writer.writeStringValue("employeeId", user.employeeId);
        writer.writeDateValue("employeeLeaveDateTime", user.employeeLeaveDateTime);
        writer.writeObjectValue<EmployeeOrgData>("employeeOrgData", user.employeeOrgData, );
        writer.writeStringValue("employeeType", user.employeeType);
        writer.writeCollectionOfObjectValues<Event>("events", user.events, );
        writer.writeCollectionOfObjectValues<Extension>("extensions", user.extensions, );
        writer.writeStringValue("externalUserState", user.externalUserState);
        writer.writeDateValue("externalUserStateChangeDateTime", user.externalUserStateChangeDateTime);
        writer.writeStringValue("faxNumber", user.faxNumber);
        writer.writeCollectionOfObjectValues<Site>("followedSites", user.followedSites, );
        writer.writeStringValue("givenName", user.givenName);
        writer.writeDateValue("hireDate", user.hireDate);
        writer.writeCollectionOfObjectValues<ObjectIdentity>("identities", user.identities, );
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", user.imAddresses);
        writer.writeObjectValue<InferenceClassification>("inferenceClassification", user.inferenceClassification, );
        writer.writeObjectValue<OfficeGraphInsights>("insights", user.insights, );
        writer.writeCollectionOfPrimitiveValues<string>("interests", user.interests);
        writer.writeBooleanValue("isResourceAccount", user.isResourceAccount);
        writer.writeStringValue("jobTitle", user.jobTitle);
        writer.writeCollectionOfObjectValues<Team>("joinedTeams", user.joinedTeams, );
        writer.writeDateValue("lastPasswordChangeDateTime", user.lastPasswordChangeDateTime);
        writer.writeStringValue("legalAgeGroupClassification", user.legalAgeGroupClassification);
        writer.writeCollectionOfObjectValues<LicenseAssignmentState>("licenseAssignmentStates", user.licenseAssignmentStates, );
        writer.writeCollectionOfObjectValues<LicenseDetails>("licenseDetails", user.licenseDetails, );
        writer.writeStringValue("mail", user.mail);
        writer.writeObjectValue<MailboxSettings>("mailboxSettings", user.mailboxSettings, );
        writer.writeCollectionOfObjectValues<MailFolder>("mailFolders", user.mailFolders, );
        writer.writeStringValue("mailNickname", user.mailNickname);
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("managedAppRegistrations", user.managedAppRegistrations, );
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", user.managedDevices, );
        writer.writeObjectValue<DirectoryObject>("manager", user.manager, );
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", user.memberOf, );
        writer.writeCollectionOfObjectValues<Message>("messages", user.messages, );
        writer.writeStringValue("mobilePhone", user.mobilePhone);
        writer.writeStringValue("mySite", user.mySite);
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("oauth2PermissionGrants", user.oauth2PermissionGrants, );
        writer.writeStringValue("officeLocation", user.officeLocation);
        writer.writeObjectValue<Onenote>("onenote", user.onenote, );
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", user.onlineMeetings, );
        writer.writeStringValue("onPremisesDistinguishedName", user.onPremisesDistinguishedName);
        writer.writeStringValue("onPremisesDomainName", user.onPremisesDomainName);
        writer.writeObjectValue<OnPremisesExtensionAttributes>("onPremisesExtensionAttributes", user.onPremisesExtensionAttributes, );
        writer.writeStringValue("onPremisesImmutableId", user.onPremisesImmutableId);
        writer.writeDateValue("onPremisesLastSyncDateTime", user.onPremisesLastSyncDateTime);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", user.onPremisesProvisioningErrors, );
        writer.writeStringValue("onPremisesSamAccountName", user.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", user.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", user.onPremisesSyncEnabled);
        writer.writeStringValue("onPremisesUserPrincipalName", user.onPremisesUserPrincipalName);
        writer.writeCollectionOfPrimitiveValues<string>("otherMails", user.otherMails);
        writer.writeObjectValue<OutlookUser>("outlook", user.outlook, );
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedDevices", user.ownedDevices, );
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedObjects", user.ownedObjects, );
        writer.writeStringValue("passwordPolicies", user.passwordPolicies);
        writer.writeObjectValue<PasswordProfile>("passwordProfile", user.passwordProfile, );
        writer.writeCollectionOfPrimitiveValues<string>("pastProjects", user.pastProjects);
        writer.writeCollectionOfObjectValues<Person>("people", user.people, );
        writer.writeObjectValue<ProfilePhoto>("photo", user.photo, );
        writer.writeCollectionOfObjectValues<ProfilePhoto>("photos", user.photos, );
        writer.writeObjectValue<PlannerUser>("planner", user.planner, );
        writer.writeStringValue("postalCode", user.postalCode);
        writer.writeStringValue("preferredDataLocation", user.preferredDataLocation);
        writer.writeStringValue("preferredLanguage", user.preferredLanguage);
        writer.writeStringValue("preferredName", user.preferredName);
        writer.writeObjectValue<Presence>("presence", user.presence, );
        writer.writeObjectValue<UserPrint>("print", user.print, );
        writer.writeCollectionOfObjectValues<ProvisionedPlan>("provisionedPlans", user.provisionedPlans, );
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", user.proxyAddresses);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredDevices", user.registeredDevices, );
        writer.writeCollectionOfPrimitiveValues<string>("responsibilities", user.responsibilities);
        writer.writeCollectionOfPrimitiveValues<string>("schools", user.schools);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedRoleMemberOf", user.scopedRoleMemberOf, );
        writer.writeStringValue("securityIdentifier", user.securityIdentifier);
        writer.writeCollectionOfObjectValues<ServiceProvisioningError>("serviceProvisioningErrors", user.serviceProvisioningErrors, );
        writer.writeObjectValue<UserSettings>("settings", user.settings, );
        writer.writeBooleanValue("showInAddressList", user.showInAddressList);
        writer.writeObjectValue<SignInActivity>("signInActivity", user.signInActivity, );
        writer.writeDateValue("signInSessionsValidFromDateTime", user.signInSessionsValidFromDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("skills", user.skills);
        writer.writeStringValue("state", user.state);
        writer.writeStringValue("streetAddress", user.streetAddress);
        writer.writeStringValue("surname", user.surname);
        writer.writeObjectValue<UserTeamwork>("teamwork", user.teamwork, );
        writer.writeObjectValue<Todo>("todo", user.todo, );
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", user.transitiveMemberOf, );
        writer.writeStringValue("usageLocation", user.usageLocation);
        writer.writeStringValue("userPrincipalName", user.userPrincipalName);
        writer.writeStringValue("userType", user.userType);
}
export interface User extends DirectoryObject, Parsable {
    /**
     * A freeform text entry field for the user to describe themselves. Returned only on $select.
     */
    aboutMe?: string;
    /**
     * true if the account is enabled; otherwise, false. This property is required when a user is created. Returned only on $select. Supports $filter (eq, ne, not, and in).
     */
    accountEnabled?: boolean;
    /**
     * The user's activities across devices. Read-only. Nullable.
     */
    activities?: UserActivity[];
    /**
     * Sets the age group of the user. Allowed values: null, Minor, NotAdult and Adult. For more information, see legal age group property definitions. Returned only on $select. Supports $filter (eq, ne, not, and in).
     */
    ageGroup?: string;
    /**
     * The user's terms of use acceptance statuses. Read-only. Nullable.
     */
    agreementAcceptances?: AgreementAcceptance[];
    /**
     * Represents the app roles a user has been granted for an application. Supports $expand.
     */
    appRoleAssignments?: AppRoleAssignment[];
    /**
     * The licenses that are assigned to the user, including inherited (group-based) licenses. This property doesn't differentiate directly assigned and inherited licenses. Use the licenseAssignmentStates property to identify the directly assigned and inherited licenses.  Not nullable. Returned only on $select. Supports $filter (eq, not, /$count eq 0, /$count ne 0).
     */
    assignedLicenses?: AssignedLicense[];
    /**
     * The plans that are assigned to the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq and not).
     */
    assignedPlans?: AssignedPlan[];
    /**
     * The authentication methods that are supported for the user.
     */
    authentication?: Authentication;
    /**
     * The authorizationInfo property
     */
    authorizationInfo?: AuthorizationInfo;
    /**
     * The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.
     */
    birthday?: Date;
    /**
     * The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property. Read-only for users synced from on-premises directory. Returned by default. Supports $filter (eq, not, ge, le, startsWith).
     */
    businessPhones?: string[];
    /**
     * The user's primary calendar. Read-only.
     */
    calendar?: Calendar;
    /**
     * The user's calendar groups. Read-only. Nullable.
     */
    calendarGroups?: CalendarGroup[];
    /**
     * The user's calendars. Read-only. Nullable.
     */
    calendars?: Calendar[];
    /**
     * The calendar view for the calendar. Read-only. Nullable.
     */
    calendarView?: Event[];
    /**
     * The chats property
     */
    chats?: Chat[];
    /**
     * The city where the user is located. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    city?: string;
    /**
     * The name of the company that the user is associated with. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    companyName?: string;
    /**
     * Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Returned only on $select. Supports $filter (eq, ne, not, and in).
     */
    consentProvidedForMinor?: string;
    /**
     * The user's contacts folders. Read-only. Nullable.
     */
    contactFolders?: ContactFolder[];
    /**
     * The user's contacts. Read-only. Nullable.
     */
    contacts?: Contact[];
    /**
     * The country or region where the user is located; for example, US or UK. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    country?: string;
    /**
     * The date and time the user was created, in ISO 8601 format and in UTC time. The value cannot be modified and is automatically populated when the entity is created. Nullable. For on-premises users, the value represents when they were first created in Azure AD. Property is null for some users created before June 2018 and on-premises users that were synced to Azure AD before June 2018. Read-only. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     */
    createdDateTime?: Date;
    /**
     * Directory objects that the user created. Read-only. Nullable.
     */
    createdObjects?: DirectoryObject[];
    /**
     * Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp). Read-only.Returned only on $select. Supports $filter (eq, ne, not, in).
     */
    creationType?: string;
    /**
     * An open complex type that holds the value of a custom security attribute that is assigned to a directory object. Nullable. Returned only on $select. Supports $filter (eq, ne, not, startsWith). Filter value is case sensitive.
     */
    customSecurityAttributes?: CustomSecurityAttributeValue;
    /**
     * The name for the department in which the user works. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, and eq on null values).
     */
    department?: string;
    /**
     * The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
     */
    deviceEnrollmentLimit?: number;
    /**
     * The list of troubleshooting events for this user.
     */
    deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
    /**
     * The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
     */
    directReports?: DirectoryObject[];
    /**
     * The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values), $orderby, and $search.
     */
    displayName?: string;
    /**
     * The user's OneDrive. Read-only.
     */
    drive?: Drive;
    /**
     * A collection of drives available for this user. Read-only.
     */
    drives?: Drive[];
    /**
     * The employeeExperience property
     */
    employeeExperience?: EmployeeExperienceUser;
    /**
     * The date and time when the user was hired or will start work in case of a future hire. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     */
    employeeHireDate?: Date;
    /**
     * The employee identifier assigned to the user by the organization. The maximum length is 16 characters. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     */
    employeeId?: string;
    /**
     * The date and time when the user left or will leave the organization. To read this property, the calling app must be assigned the User-LifeCycleInfo.Read.All permission. To write this property, the calling app must be assigned the User.Read.All and User-LifeCycleInfo.ReadWrite.All permissions. To read this property in delegated scenarios, the admin needs one of the following Azure AD roles: Lifecycle Workflows Administrator, Global Reader, or Global Administrator. To write this property in delegated scenarios, the admin needs the Global Administrator role. Supports $filter (eq, ne, not , ge, le, in). For more information, see Configure the employeeLeaveDateTime property for a user.
     */
    employeeLeaveDateTime?: Date;
    /**
     * Represents organization data (for example, division and costCenter) associated with a user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in).
     */
    employeeOrgData?: EmployeeOrgData;
    /**
     * Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith).
     */
    employeeType?: string;
    /**
     * The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable.
     */
    events?: Event[];
    /**
     * The collection of open extensions defined for the user. Read-only. Supports $expand. Nullable.
     */
    extensions?: Extension[];
    /**
     * For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Returned only on $select. Supports $filter (eq, ne, not , in).
     */
    externalUserState?: string;
    /**
     * Shows the timestamp for the latest change to the externalUserState property. Returned only on $select. Supports $filter (eq, ne, not , in).
     */
    externalUserStateChangeDateTime?: Date;
    /**
     * The fax number of the user. Returned only on $select. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     */
    faxNumber?: string;
    /**
     * The followedSites property
     */
    followedSites?: Site[];
    /**
     * The given name (first name) of the user. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     */
    givenName?: string;
    /**
     * The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
     */
    hireDate?: Date;
    /**
     * Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Returned only on $select. Supports $filter (eq) including on null values, only where the signInType is not userPrincipalName.
     */
    identities?: ObjectIdentity[];
    /**
     * The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith).
     */
    imAddresses?: string[];
    /**
     * Relevance classification of the user's messages based on explicit designations that override inferred relevance or importance.
     */
    inferenceClassification?: InferenceClassification;
    /**
     * The insights property
     */
    insights?: OfficeGraphInsights;
    /**
     * A list for the user to describe their interests. Returned only on $select.
     */
    interests?: string[];
    /**
     * Do not use – reserved for future use.
     */
    isResourceAccount?: boolean;
    /**
     * The user's job title. Maximum length is 128 characters. Returned by default. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values).
     */
    jobTitle?: string;
    /**
     * The joinedTeams property
     */
    joinedTeams?: Team[];
    /**
     * The time when this Azure AD user last changed their password or when their password was created, whichever date the latest action was performed. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select.
     */
    lastPasswordChangeDateTime?: Date;
    /**
     * Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, MinorWithOutParentalConsent, MinorWithParentalConsent, MinorNoParentalConsentRequired, NotAdult and Adult. Refer to the legal age group property definitions for further information. Returned only on $select.
     */
    legalAgeGroupClassification?: string;
    /**
     * State of license assignments for this user. Also indicates licenses that are directly assigned or the user has inherited through group memberships. Read-only. Returned only on $select.
     */
    licenseAssignmentStates?: LicenseAssignmentState[];
    /**
     * A collection of this user's license details. Read-only.
     */
    licenseDetails?: LicenseDetails[];
    /**
     * The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. This property can't contain accent characters.  NOTE: We don't recommend updating this property for Azure AD B2C user profiles. Use the otherMails property instead. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith, and eq on null values).
     */
    mail?: string;
    /**
     * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone. Returned only on $select.
     */
    mailboxSettings?: MailboxSettings;
    /**
     * The user's mail folders. Read-only. Nullable.
     */
    mailFolders?: MailFolder[];
    /**
     * The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    mailNickname?: string;
    /**
     * Zero or more managed app registrations that belong to the user.
     */
    managedAppRegistrations?: ManagedAppRegistration[];
    /**
     * The managed devices associated with the user.
     */
    managedDevices?: ManagedDevice[];
    /**
     * The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
     */
    manager?: DirectoryObject;
    /**
     * The groups and directory roles that the user is a member of. Read-only. Nullable. Supports $expand.
     */
    memberOf?: DirectoryObject[];
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     */
    messages?: Message[];
    /**
     * The primary cellular telephone number for the user. Read-only for users synced from on-premises directory. Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values) and $search.
     */
    mobilePhone?: string;
    /**
     * The URL for the user's personal site. Returned only on $select.
     */
    mySite?: string;
    /**
     * The oauth2PermissionGrants property
     */
    oauth2PermissionGrants?: OAuth2PermissionGrant[];
    /**
     * The office location in the user's place of business. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    officeLocation?: string;
    /**
     * The onenote property
     */
    onenote?: Onenote;
    /**
     * Information about a meeting, including the URL used to join a meeting, the attendees' list, and the description.
     */
    onlineMeetings?: OnlineMeeting[];
    /**
     * Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.
     */
    onPremisesDistinguishedName?: string;
    /**
     * Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select.
     */
    onPremisesDomainName?: string;
    /**
     * Contains extensionAttributes1-15 for the user. These extension attributes are also known as Exchange custom attributes 1-15. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties can be set during creation or update of a user object.  For a cloud-only user previously synced from on-premises Active Directory, these properties are read-only in Microsoft Graph but can be fully managed through the Exchange Admin Center or the Exchange Online V2 module in PowerShell. Returned only on $select. Supports $filter (eq, ne, not, in).
     */
    onPremisesExtensionAttributes?: OnPremisesExtensionAttributes;
    /**
     * This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you're using a federated domain for the user's userPrincipalName (UPN) property. NOTE: The $ and _ characters can't be used when specifying this property. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in)..
     */
    onPremisesImmutableId?: string;
    /**
     * Indicates the last time at which the object was synced with the on-premises directory; for example: 2013-02-16T03:04:54Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in).
     */
    onPremisesLastSyncDateTime?: Date;
    /**
     * Errors when using Microsoft synchronization product during provisioning. Returned only on $select. Supports $filter (eq, not, ge, le).
     */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /**
     * Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     */
    onPremisesSamAccountName?: string;
    /**
     * Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. Returned only on $select.  Supports $filter (eq including on null values).
     */
    onPremisesSecurityIdentifier?: string;
    /**
     * true if this user object is currently being synced from an on-premises Active Directory (AD); otherwise the user isn't being synced and can be managed in Azure Active Directory (Azure AD). Read-only. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).
     */
    onPremisesSyncEnabled?: boolean;
    /**
     * Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     */
    onPremisesUserPrincipalName?: string;
    /**
     * A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. NOTE: This property can't contain accent characters. Returned only on $select. Supports $filter (eq, not, ge, le, in, startsWith, endsWith, /$count eq 0, /$count ne 0).
     */
    otherMails?: string[];
    /**
     * The outlook property
     */
    outlook?: OutlookUser;
    /**
     * Devices that are owned by the user. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     */
    ownedDevices?: DirectoryObject[];
    /**
     * Directory objects that are owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     */
    ownedObjects?: DirectoryObject[];
    /**
     * Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. Returned only on $select. For more information on the default password policies, see Azure AD password policies. Supports $filter (ne, not, and eq on null values).
     */
    passwordPolicies?: string;
    /**
     * Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values).
     */
    passwordProfile?: PasswordProfile;
    /**
     * A list for the user to enumerate their past projects. Returned only on $select.
     */
    pastProjects?: string[];
    /**
     * People that are relevant to the user. Read-only. Nullable.
     */
    people?: Person[];
    /**
     * The user's profile photo. Read-only.
     */
    photo?: ProfilePhoto;
    /**
     * The photos property
     */
    photos?: ProfilePhoto[];
    /**
     * Entry-point to the Planner resource that might exist for a user. Read-only.
     */
    planner?: PlannerUser;
    /**
     * The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    postalCode?: string;
    /**
     * The preferred data location for the user. For more information, see OneDrive Online Multi-Geo.
     */
    preferredDataLocation?: string;
    /**
     * The preferred language for the user. The preferred language format is based on RFC 4646. The name is a combination of an ISO 639 two-letter lowercase culture code associated with the language, and an ISO 3166 two-letter uppercase subculture code associated with the country or region. Example: 'en-US', or 'es-ES'. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     */
    preferredLanguage?: string;
    /**
     * The preferred name for the user. Not Supported. This attribute returns an empty string.Returned only on $select.
     */
    preferredName?: string;
    /**
     * The presence property
     */
    presence?: Presence;
    /**
     * The print property
     */
    print?: UserPrint;
    /**
     * The plans that are provisioned for the user. Read-only. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le).
     */
    provisionedPlans?: ProvisionedPlan[];
    /**
     * For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Changes to the mail property will also update this collection to include the value as an SMTP address. For more information, see mail and proxyAddresses properties. The proxy address prefixed with SMTP (capitalized) is the primary proxy address while those prefixed with smtp are the secondary proxy addresses. For Azure AD B2C accounts, this property has a limit of 10 unique addresses. Read-only in Microsoft Graph; you can update this property only through the Microsoft 365 admin center. Not nullable. Returned only on $select. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0).
     */
    proxyAddresses?: string[];
    /**
     * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
     */
    registeredDevices?: DirectoryObject[];
    /**
     * A list for the user to enumerate their responsibilities. Returned only on $select.
     */
    responsibilities?: string[];
    /**
     * A list for the user to enumerate the schools they have attended. Returned only on $select.
     */
    schools?: string[];
    /**
     * The scopedRoleMemberOf property
     */
    scopedRoleMemberOf?: ScopedRoleMembership[];
    /**
     * Security identifier (SID) of the user, used in Windows scenarios. Read-only. Returned by default. Supports $select and $filter (eq, not, ge, le, startsWith).
     */
    securityIdentifier?: string;
    /**
     * The serviceProvisioningErrors property
     */
    serviceProvisioningErrors?: ServiceProvisioningError[];
    /**
     * The settings property
     */
    settings?: UserSettings;
    /**
     * Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue.
     */
    showInAddressList?: boolean;
    /**
     * Get the last signed-in date and request ID of the sign-in for a given user. Read-only.Returned only on $select. Supports $filter (eq, ne, not, ge, le) but not with any other filterable properties. Note: Details for this property require an Azure AD Premium P1/P2 license and the AuditLog.Read.All permission.This property is not returned for a user who has never signed in or last signed in before April 2020.
     */
    signInActivity?: SignInActivity;
    /**
     * Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application needs to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. Returned only on $select.
     */
    signInSessionsValidFromDateTime?: Date;
    /**
     * A list for the user to enumerate their skills. Returned only on $select.
     */
    skills?: string[];
    /**
     * The state or province in the user's address. Maximum length is 128 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    state?: string;
    /**
     * The street address of the user's place of business. Maximum length is 1024 characters. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    streetAddress?: string;
    /**
     * The user's surname (family name or last name). Maximum length is 64 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    surname?: string;
    /**
     * A container for Microsoft Teams features available for the user. Read-only. Nullable.
     */
    teamwork?: UserTeamwork;
    /**
     * Represents the To Do services available to a user.
     */
    todo?: Todo;
    /**
     * The groups, including nested groups, and directory roles that a user is a member of. Nullable.
     */
    transitiveMemberOf?: DirectoryObject[];
    /**
     * A two letter country code (ISO standard 3166). Required for users that are assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Returned only on $select. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     */
    usageLocation?: string;
    /**
     * The user principal name (UPN) of the user. The UPN is an Internet-style sign-in name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property can't contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderby.
     */
    userPrincipalName?: string;
    /**
     * A string value that can be used to classify user types in your directory, such as Member and Guest. Returned only on $select. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory?
     */
    userType?: string;
}
