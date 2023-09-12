import { type ChatMembersNotificationRecipient } from './chatMembersNotificationRecipient';
import { deserializeIntoTeamworkNotificationRecipient } from './deserializeIntoTeamworkNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMembersNotificationRecipient(chatMembersNotificationRecipient: ChatMembersNotificationRecipient | undefined = {} as ChatMembersNotificationRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(chatMembersNotificationRecipient),
        "chatId": n => { chatMembersNotificationRecipient.chatId = n.getStringValue(); },
    }
}
