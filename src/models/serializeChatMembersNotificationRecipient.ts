import { type ChatMembersNotificationRecipient } from './chatMembersNotificationRecipient';
import { serializeTeamworkNotificationRecipient } from './serializeTeamworkNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMembersNotificationRecipient(writer: SerializationWriter, chatMembersNotificationRecipient: ChatMembersNotificationRecipient | undefined = {} as ChatMembersNotificationRecipient) : void {
        serializeTeamworkNotificationRecipient(writer, chatMembersNotificationRecipient)
        writer.writeStringValue("chatId", chatMembersNotificationRecipient.chatId);
}
