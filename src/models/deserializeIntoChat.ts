import { type Chat } from './chat';
import { type ChatMessage } from './chatMessage';
import { type ChatMessageInfo } from './chatMessageInfo';
import { ChatType } from './chatType';
import { type ChatViewpoint } from './chatViewpoint';
import { type ConversationMember } from './conversationMember';
import { createChatMessageFromDiscriminatorValue } from './createChatMessageFromDiscriminatorValue';
import { createChatMessageInfoFromDiscriminatorValue } from './createChatMessageInfoFromDiscriminatorValue';
import { createChatViewpointFromDiscriminatorValue } from './createChatViewpointFromDiscriminatorValue';
import { createConversationMemberFromDiscriminatorValue } from './createConversationMemberFromDiscriminatorValue';
import { createPinnedChatMessageInfoFromDiscriminatorValue } from './createPinnedChatMessageInfoFromDiscriminatorValue';
import { createResourceSpecificPermissionGrantFromDiscriminatorValue } from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import { createTeamsAppInstallationFromDiscriminatorValue } from './createTeamsAppInstallationFromDiscriminatorValue';
import { createTeamsTabFromDiscriminatorValue } from './createTeamsTabFromDiscriminatorValue';
import { createTeamworkOnlineMeetingInfoFromDiscriminatorValue } from './createTeamworkOnlineMeetingInfoFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PinnedChatMessageInfo } from './pinnedChatMessageInfo';
import { type ResourceSpecificPermissionGrant } from './resourceSpecificPermissionGrant';
import { serializeChatMessage } from './serializeChatMessage';
import { serializeChatMessageInfo } from './serializeChatMessageInfo';
import { serializeChatViewpoint } from './serializeChatViewpoint';
import { serializeConversationMember } from './serializeConversationMember';
import { serializePinnedChatMessageInfo } from './serializePinnedChatMessageInfo';
import { serializeResourceSpecificPermissionGrant } from './serializeResourceSpecificPermissionGrant';
import { serializeTeamsAppInstallation } from './serializeTeamsAppInstallation';
import { serializeTeamsTab } from './serializeTeamsTab';
import { serializeTeamworkOnlineMeetingInfo } from './serializeTeamworkOnlineMeetingInfo';
import { type TeamsAppInstallation } from './teamsAppInstallation';
import { type TeamsTab } from './teamsTab';
import { type TeamworkOnlineMeetingInfo } from './teamworkOnlineMeetingInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChat(chat: Chat | undefined = {} as Chat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(chat),
        "chatType": n => { chat.chatType = n.getEnumValue<ChatType>(ChatType); },
        "createdDateTime": n => { chat.createdDateTime = n.getDateValue(); },
        "installedApps": n => { chat.installedApps = n.getCollectionOfObjectValues<TeamsAppInstallation>(createTeamsAppInstallationFromDiscriminatorValue); },
        "lastMessagePreview": n => { chat.lastMessagePreview = n.getObjectValue<ChatMessageInfo>(createChatMessageInfoFromDiscriminatorValue); },
        "lastUpdatedDateTime": n => { chat.lastUpdatedDateTime = n.getDateValue(); },
        "members": n => { chat.members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
        "messages": n => { chat.messages = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
        "onlineMeetingInfo": n => { chat.onlineMeetingInfo = n.getObjectValue<TeamworkOnlineMeetingInfo>(createTeamworkOnlineMeetingInfoFromDiscriminatorValue); },
        "permissionGrants": n => { chat.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
        "pinnedMessages": n => { chat.pinnedMessages = n.getCollectionOfObjectValues<PinnedChatMessageInfo>(createPinnedChatMessageInfoFromDiscriminatorValue); },
        "tabs": n => { chat.tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
        "tenantId": n => { chat.tenantId = n.getStringValue(); },
        "topic": n => { chat.topic = n.getStringValue(); },
        "viewpoint": n => { chat.viewpoint = n.getObjectValue<ChatViewpoint>(createChatViewpointFromDiscriminatorValue); },
        "webUrl": n => { chat.webUrl = n.getStringValue(); },
    }
}
