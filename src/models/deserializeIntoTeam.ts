import type {Channel} from './channel';
import type {ConversationMember} from './conversationMember';
import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {createScheduleFromDiscriminatorValue} from './createScheduleFromDiscriminatorValue';
import {createTeamFunSettingsFromDiscriminatorValue} from './createTeamFunSettingsFromDiscriminatorValue';
import {createTeamGuestSettingsFromDiscriminatorValue} from './createTeamGuestSettingsFromDiscriminatorValue';
import {createTeamMemberSettingsFromDiscriminatorValue} from './createTeamMemberSettingsFromDiscriminatorValue';
import {createTeamMessagingSettingsFromDiscriminatorValue} from './createTeamMessagingSettingsFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {createTeamsTemplateFromDiscriminatorValue} from './createTeamsTemplateFromDiscriminatorValue';
import {createTeamSummaryFromDiscriminatorValue} from './createTeamSummaryFromDiscriminatorValue';
import {createTeamworkTagFromDiscriminatorValue} from './createTeamworkTagFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {Group} from './group';
import type {ProfilePhoto} from './profilePhoto';
import type {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import type {Schedule} from './schedule';
import {serializeChannel} from './serializeChannel';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeGroup} from './serializeGroup';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {serializeSchedule} from './serializeSchedule';
import {serializeTeamFunSettings} from './serializeTeamFunSettings';
import {serializeTeamGuestSettings} from './serializeTeamGuestSettings';
import {serializeTeamMemberSettings} from './serializeTeamMemberSettings';
import {serializeTeamMessagingSettings} from './serializeTeamMessagingSettings';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import {serializeTeamsTemplate} from './serializeTeamsTemplate';
import {serializeTeamSummary} from './serializeTeamSummary';
import {serializeTeamworkTag} from './serializeTeamworkTag';
import type {Team} from './team';
import type {TeamFunSettings} from './teamFunSettings';
import type {TeamGuestSettings} from './teamGuestSettings';
import type {TeamMemberSettings} from './teamMemberSettings';
import type {TeamMessagingSettings} from './teamMessagingSettings';
import type {TeamsAppInstallation} from './teamsAppInstallation';
import type {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamSpecialization} from './teamSpecialization';
import type {TeamsTemplate} from './teamsTemplate';
import type {TeamSummary} from './teamSummary';
import {TeamVisibilityType} from './teamVisibilityType';
import type {TeamworkTag} from './teamworkTag';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeam(team: Team | undefined = {} as Team) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(team),
        "allChannels": n => { team.allChannels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
        "channels": n => { team.channels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
        "classification": n => { team.classification = n.getStringValue(); },
        "createdDateTime": n => { team.createdDateTime = n.getDateValue(); },
        "description": n => { team.description = n.getStringValue(); },
        "displayName": n => { team.displayName = n.getStringValue(); },
        "funSettings": n => { team.funSettings = n.getObjectValue<TeamFunSettings>(createTeamFunSettingsFromDiscriminatorValue); },
        "group": n => { team.group = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
        "guestSettings": n => { team.guestSettings = n.getObjectValue<TeamGuestSettings>(createTeamGuestSettingsFromDiscriminatorValue); },
        "incomingChannels": n => { team.incomingChannels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
        "installedApps": n => { team.installedApps = n.getCollectionOfObjectValues<TeamsAppInstallation>(createTeamsAppInstallationFromDiscriminatorValue); },
        "internalId": n => { team.internalId = n.getStringValue(); },
        "isArchived": n => { team.isArchived = n.getBooleanValue(); },
        "members": n => { team.members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
        "memberSettings": n => { team.memberSettings = n.getObjectValue<TeamMemberSettings>(createTeamMemberSettingsFromDiscriminatorValue); },
        "messagingSettings": n => { team.messagingSettings = n.getObjectValue<TeamMessagingSettings>(createTeamMessagingSettingsFromDiscriminatorValue); },
        "operations": n => { team.operations = n.getCollectionOfObjectValues<TeamsAsyncOperation>(createTeamsAsyncOperationFromDiscriminatorValue); },
        "permissionGrants": n => { team.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
        "photo": n => { team.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
        "primaryChannel": n => { team.primaryChannel = n.getObjectValue<Channel>(createChannelFromDiscriminatorValue); },
        "schedule": n => { team.schedule = n.getObjectValue<Schedule>(createScheduleFromDiscriminatorValue); },
        "specialization": n => { team.specialization = n.getEnumValue<TeamSpecialization>(TeamSpecialization); },
        "summary": n => { team.summary = n.getObjectValue<TeamSummary>(createTeamSummaryFromDiscriminatorValue); },
        "tags": n => { team.tags = n.getCollectionOfObjectValues<TeamworkTag>(createTeamworkTagFromDiscriminatorValue); },
        "template": n => { team.template = n.getObjectValue<TeamsTemplate>(createTeamsTemplateFromDiscriminatorValue); },
        "tenantId": n => { team.tenantId = n.getStringValue(); },
        "visibility": n => { team.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); },
        "webUrl": n => { team.webUrl = n.getStringValue(); },
    }
}
