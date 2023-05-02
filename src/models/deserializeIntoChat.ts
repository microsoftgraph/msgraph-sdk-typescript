import {Chat} from './chat';
import {ChatMessage} from './chatMessage';
import {ChatMessageInfo} from './chatMessageInfo';
import {ChatType} from './chatType';
import {ChatViewpoint} from './chatViewpoint';
import {ConversationMember} from './conversationMember';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createChatMessageInfoFromDiscriminatorValue} from './createChatMessageInfoFromDiscriminatorValue';
import {createChatViewpointFromDiscriminatorValue} from './createChatViewpointFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createPinnedChatMessageInfoFromDiscriminatorValue} from './createPinnedChatMessageInfoFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {createTeamworkOnlineMeetingInfoFromDiscriminatorValue} from './createTeamworkOnlineMeetingInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeChatMessageInfo} from './serializeChatMessageInfo';
import {serializeChatViewpoint} from './serializeChatViewpoint';
import {serializeConversationMember} from './serializeConversationMember';
import {serializePinnedChatMessageInfo} from './serializePinnedChatMessageInfo';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {serializeTeamsTab} from './serializeTeamsTab';
import {serializeTeamworkOnlineMeetingInfo} from './serializeTeamworkOnlineMeetingInfo';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsTab} from './teamsTab';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
        "pinnedMessages": n => { chat.pinnedMessages = n.getCollectionOfObjectValues<PinnedChatMessageInfo>(createPinnedChatMessageInfoFromDiscriminatorValue); },
        "tabs": n => { chat.tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
        "tenantId": n => { chat.tenantId = n.getStringValue(); },
        "topic": n => { chat.topic = n.getStringValue(); },
        "viewpoint": n => { chat.viewpoint = n.getObjectValue<ChatViewpoint>(createChatViewpointFromDiscriminatorValue); },
        "webUrl": n => { chat.webUrl = n.getStringValue(); },
    }
}
