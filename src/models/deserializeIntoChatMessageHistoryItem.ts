import {ChatMessageActions} from './chatMessageActions';
import type {ChatMessageHistoryItem} from './chatMessageHistoryItem';
import type {ChatMessageReaction} from './chatMessageReaction';
import {createChatMessageReactionFromDiscriminatorValue} from './createChatMessageReactionFromDiscriminatorValue';
import {serializeChatMessageReaction} from './serializeChatMessageReaction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHistoryItem(chatMessageHistoryItem: ChatMessageHistoryItem | undefined = {} as ChatMessageHistoryItem) : Record<string, (node: ParseNode) => void> {
    return {
        "actions": n => { chatMessageHistoryItem.actions = n.getEnumValue<ChatMessageActions>(ChatMessageActions); },
        "modifiedDateTime": n => { chatMessageHistoryItem.modifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { chatMessageHistoryItem.odataType = n.getStringValue(); },
        "reaction": n => { chatMessageHistoryItem.reaction = n.getObjectValue<ChatMessageReaction>(createChatMessageReactionFromDiscriminatorValue); },
    }
}
