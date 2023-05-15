import {AppRoleAssignment} from './appRoleAssignment';
import {AssignedLabel} from './assignedLabel';
import {AssignedLicense} from './assignedLicense';
import {Calendar} from './calendar';
import {Conversation} from './conversation';
import {ConversationThread} from './conversationThread';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAssignedLabelFromDiscriminatorValue} from './createAssignedLabelFromDiscriminatorValue';
import {createAssignedLicenseFromDiscriminatorValue} from './createAssignedLicenseFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createConversationFromDiscriminatorValue} from './createConversationFromDiscriminatorValue';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createGroupLifecyclePolicyFromDiscriminatorValue} from './createGroupLifecyclePolicyFromDiscriminatorValue';
import {createGroupSettingFromDiscriminatorValue} from './createGroupSettingFromDiscriminatorValue';
import {createLicenseProcessingStateFromDiscriminatorValue} from './createLicenseProcessingStateFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPlannerGroupFromDiscriminatorValue} from './createPlannerGroupFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {Event} from './event';
import {Extension} from './extension';
import {Group} from './group';
import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {GroupSetting} from './groupSetting';
import {LicenseProcessingState} from './licenseProcessingState';
import {Onenote} from './onenote';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {PlannerGroup} from './plannerGroup';
import {ProfilePhoto} from './profilePhoto';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import {serializeAssignedLabel} from './serializeAssignedLabel';
import {serializeAssignedLicense} from './serializeAssignedLicense';
import {serializeCalendar} from './serializeCalendar';
import {serializeConversation} from './serializeConversation';
import {serializeConversationThread} from './serializeConversationThread';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeDrive} from './serializeDrive';
import {serializeEvent} from './serializeEvent';
import {serializeExtension} from './serializeExtension';
import {serializeGroupLifecyclePolicy} from './serializeGroupLifecyclePolicy';
import {serializeGroupSetting} from './serializeGroupSetting';
import {serializeLicenseProcessingState} from './serializeLicenseProcessingState';
import {serializeOnenote} from './serializeOnenote';
import {serializeOnPremisesProvisioningError} from './serializeOnPremisesProvisioningError';
import {serializePlannerGroup} from './serializePlannerGroup';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {serializeSite} from './serializeSite';
import {serializeTeam} from './serializeTeam';
import {Site} from './site';
import {Team} from './team';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroup(group: Group | undefined = {} as Group) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(group),
        "acceptedSenders": n => { group.acceptedSenders = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "allowExternalSenders": n => { group.allowExternalSenders = n.getBooleanValue(); },
        "appRoleAssignments": n => { group.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
        "assignedLabels": n => { group.assignedLabels = n.getCollectionOfObjectValues<AssignedLabel>(createAssignedLabelFromDiscriminatorValue); },
        "assignedLicenses": n => { group.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
        "autoSubscribeNewMembers": n => { group.autoSubscribeNewMembers = n.getBooleanValue(); },
        "calendar": n => { group.calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
        "calendarView": n => { group.calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "classification": n => { group.classification = n.getStringValue(); },
        "conversations": n => { group.conversations = n.getCollectionOfObjectValues<Conversation>(createConversationFromDiscriminatorValue); },
        "createdDateTime": n => { group.createdDateTime = n.getDateValue(); },
        "createdOnBehalfOf": n => { group.createdOnBehalfOf = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "description": n => { group.description = n.getStringValue(); },
        "displayName": n => { group.displayName = n.getStringValue(); },
        "drive": n => { group.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
        "drives": n => { group.drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); },
        "events": n => { group.events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
        "expirationDateTime": n => { group.expirationDateTime = n.getDateValue(); },
        "extensions": n => { group.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "groupLifecyclePolicies": n => { group.groupLifecyclePolicies = n.getCollectionOfObjectValues<GroupLifecyclePolicy>(createGroupLifecyclePolicyFromDiscriminatorValue); },
        "groupTypes": n => { group.groupTypes = n.getCollectionOfPrimitiveValues<string>(); },
        "hasMembersWithLicenseErrors": n => { group.hasMembersWithLicenseErrors = n.getBooleanValue(); },
        "hideFromAddressLists": n => { group.hideFromAddressLists = n.getBooleanValue(); },
        "hideFromOutlookClients": n => { group.hideFromOutlookClients = n.getBooleanValue(); },
        "isArchived": n => { group.isArchived = n.getBooleanValue(); },
        "isAssignableToRole": n => { group.isAssignableToRole = n.getBooleanValue(); },
        "isSubscribedByMail": n => { group.isSubscribedByMail = n.getBooleanValue(); },
        "licenseProcessingState": n => { group.licenseProcessingState = n.getObjectValue<LicenseProcessingState>(createLicenseProcessingStateFromDiscriminatorValue); },
        "mail": n => { group.mail = n.getStringValue(); },
        "mailEnabled": n => { group.mailEnabled = n.getBooleanValue(); },
        "mailNickname": n => { group.mailNickname = n.getStringValue(); },
        "memberOf": n => { group.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "members": n => { group.members = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "membershipRule": n => { group.membershipRule = n.getStringValue(); },
        "membershipRuleProcessingState": n => { group.membershipRuleProcessingState = n.getStringValue(); },
        "membersWithLicenseErrors": n => { group.membersWithLicenseErrors = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "onenote": n => { group.onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); },
        "onPremisesDomainName": n => { group.onPremisesDomainName = n.getStringValue(); },
        "onPremisesLastSyncDateTime": n => { group.onPremisesLastSyncDateTime = n.getDateValue(); },
        "onPremisesNetBiosName": n => { group.onPremisesNetBiosName = n.getStringValue(); },
        "onPremisesProvisioningErrors": n => { group.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
        "onPremisesSamAccountName": n => { group.onPremisesSamAccountName = n.getStringValue(); },
        "onPremisesSecurityIdentifier": n => { group.onPremisesSecurityIdentifier = n.getStringValue(); },
        "onPremisesSyncEnabled": n => { group.onPremisesSyncEnabled = n.getBooleanValue(); },
        "owners": n => { group.owners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "permissionGrants": n => { group.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
        "photo": n => { group.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
        "photos": n => { group.photos = n.getCollectionOfObjectValues<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
        "planner": n => { group.planner = n.getObjectValue<PlannerGroup>(createPlannerGroupFromDiscriminatorValue); },
        "preferredDataLocation": n => { group.preferredDataLocation = n.getStringValue(); },
        "preferredLanguage": n => { group.preferredLanguage = n.getStringValue(); },
        "proxyAddresses": n => { group.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "rejectedSenders": n => { group.rejectedSenders = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "renewedDateTime": n => { group.renewedDateTime = n.getDateValue(); },
        "securityEnabled": n => { group.securityEnabled = n.getBooleanValue(); },
        "securityIdentifier": n => { group.securityIdentifier = n.getStringValue(); },
        "settings": n => { group.settings = n.getCollectionOfObjectValues<GroupSetting>(createGroupSettingFromDiscriminatorValue); },
        "sites": n => { group.sites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
        "team": n => { group.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
        "theme": n => { group.theme = n.getStringValue(); },
        "threads": n => { group.threads = n.getCollectionOfObjectValues<ConversationThread>(createConversationThreadFromDiscriminatorValue); },
        "transitiveMemberOf": n => { group.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "transitiveMembers": n => { group.transitiveMembers = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "unseenCount": n => { group.unseenCount = n.getNumberValue(); },
        "visibility": n => { group.visibility = n.getStringValue(); },
    }
}
