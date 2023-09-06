import { type ChatMessageReaction } from './chatMessageReaction';
import { type ChatMessageReactionIdentitySet } from './chatMessageReactionIdentitySet';
import { createChatMessageReactionIdentitySetFromDiscriminatorValue } from './createChatMessageReactionIdentitySetFromDiscriminatorValue';
import { serializeChatMessageReactionIdentitySet } from './serializeChatMessageReactionIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageReaction(chatMessageReaction: ChatMessageReaction | undefined = {} as ChatMessageReaction) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { chatMessageReaction.createdDateTime = n.getDateValue(); },
        "@odata.type": n => { chatMessageReaction.odataType = n.getStringValue(); },
        "reactionType": n => { chatMessageReaction.reactionType = n.getStringValue(); },
        "user": n => { chatMessageReaction.user = n.getObjectValue<ChatMessageReactionIdentitySet>(createChatMessageReactionIdentitySetFromDiscriminatorValue); },
    }
}
