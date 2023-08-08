import type {Chat} from './chat';
import type {ChatMessage} from './chatMessage';
import type {ChatMessageInfo} from './chatMessageInfo';
import {ChatType} from './chatType';
import type {ChatViewpoint} from './chatViewpoint';
import type {ConversationMember} from './conversationMember';
import type {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import type {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeChatMessageInfo} from './serializeChatMessageInfo';
import {serializeChatViewpoint} from './serializeChatViewpoint';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeEntity} from './serializeEntity';
import {serializePinnedChatMessageInfo} from './serializePinnedChatMessageInfo';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {serializeTeamsTab} from './serializeTeamsTab';
import {serializeTeamworkOnlineMeetingInfo} from './serializeTeamworkOnlineMeetingInfo';
import type {TeamsAppInstallation} from './teamsAppInstallation';
import type {TeamsTab} from './teamsTab';
import type {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChat(writer: SerializationWriter, chat: Chat | undefined = {} as Chat) : void {
        serializeEntity(writer, chat)
        writer.writeEnumValue<ChatType>("chatType", chat.chatType);
        writer.writeDateValue("createdDateTime", chat.createdDateTime);
        writer.writeCollectionOfObjectValues<TeamsAppInstallation>("installedApps", chat.installedApps, serializeTeamsAppInstallation);
        writer.writeObjectValue<ChatMessageInfo>("lastMessagePreview", chat.lastMessagePreview, serializeChatMessageInfo);
        writer.writeDateValue("lastUpdatedDateTime", chat.lastUpdatedDateTime);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", chat.members, serializeConversationMember);
        writer.writeCollectionOfObjectValues<ChatMessage>("messages", chat.messages, serializeChatMessage);
        writer.writeObjectValue<TeamworkOnlineMeetingInfo>("onlineMeetingInfo", chat.onlineMeetingInfo, serializeTeamworkOnlineMeetingInfo);
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("permissionGrants", chat.permissionGrants, serializeResourceSpecificPermissionGrant);
        writer.writeCollectionOfObjectValues<PinnedChatMessageInfo>("pinnedMessages", chat.pinnedMessages, serializePinnedChatMessageInfo);
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", chat.tabs, serializeTeamsTab);
        writer.writeStringValue("tenantId", chat.tenantId);
        writer.writeStringValue("topic", chat.topic);
        writer.writeObjectValue<ChatViewpoint>("viewpoint", chat.viewpoint, serializeChatViewpoint);
        writer.writeStringValue("webUrl", chat.webUrl);
}
