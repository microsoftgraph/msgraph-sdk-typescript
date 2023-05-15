import {ChatMembersNotificationRecipient} from './chatMembersNotificationRecipient';
import {deserializeIntoTeamworkNotificationRecipient} from './deserializeIntoTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMembersNotificationRecipient(chatMembersNotificationRecipient: ChatMembersNotificationRecipient | undefined = {} as ChatMembersNotificationRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(chatMembersNotificationRecipient),
        "chatId": n => { chatMembersNotificationRecipient.chatId = n.getStringValue(); },
    }
}
