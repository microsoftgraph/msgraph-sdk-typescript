import type {Channel} from './channel';
import {ChannelMembershipType} from './channelMembershipType';
import type {ChatMessage} from './chatMessage';
import type {ConversationMember} from './conversationMember';
import type {DriveItem} from './driveItem';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeEntity} from './serializeEntity';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import {serializeTeamsTab} from './serializeTeamsTab';
import type {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import type {TeamsTab} from './teamsTab';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannel(writer: SerializationWriter, channel: Channel | undefined = {} as Channel) : void {
        serializeEntity(writer, channel)
        writer.writeDateValue("createdDateTime", channel.createdDateTime);
        writer.writeStringValue("description", channel.description);
        writer.writeStringValue("displayName", channel.displayName);
        writer.writeStringValue("email", channel.email);
        writer.writeObjectValue<DriveItem>("filesFolder", channel.filesFolder, serializeDriveItem);
        writer.writeBooleanValue("isFavoriteByDefault", channel.isFavoriteByDefault);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", channel.members, serializeConversationMember);
        writer.writeEnumValue<ChannelMembershipType>("membershipType", channel.membershipType);
        writer.writeCollectionOfObjectValues<ChatMessage>("messages", channel.messages, serializeChatMessage);
        writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfo>("sharedWithTeams", channel.sharedWithTeams, serializeSharedWithChannelTeamInfo);
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", channel.tabs, serializeTeamsTab);
        writer.writeStringValue("tenantId", channel.tenantId);
        writer.writeStringValue("webUrl", channel.webUrl);
}
