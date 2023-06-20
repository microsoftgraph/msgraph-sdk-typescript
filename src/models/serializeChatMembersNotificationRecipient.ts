import {ChatMembersNotificationRecipient} from './chatMembersNotificationRecipient';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMembersNotificationRecipient(chatMembersNotificationRecipient: ChatMembersNotificationRecipient | undefined = {} as ChatMembersNotificationRecipient, writer: SerializationWriter) : void {
        serializeTeamworkNotificationRecipient(writer, chatMembersNotificationRecipient)
        writer.writeStringValue("chatId", chatMembersNotificationRecipient.chatId);
}
