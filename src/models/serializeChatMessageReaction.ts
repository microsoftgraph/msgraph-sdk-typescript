import { type ChatMessageReaction } from './chatMessageReaction';
import { type ChatMessageReactionIdentitySet } from './chatMessageReactionIdentitySet';
import { serializeChatMessageReactionIdentitySet } from './serializeChatMessageReactionIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageReaction(writer: SerializationWriter, chatMessageReaction: ChatMessageReaction | undefined = {} as ChatMessageReaction) : void {
        writer.writeDateValue("createdDateTime", chatMessageReaction.createdDateTime);
        writer.writeStringValue("@odata.type", chatMessageReaction.odataType);
        writer.writeStringValue("reactionType", chatMessageReaction.reactionType);
        writer.writeObjectValue<ChatMessageReactionIdentitySet>("user", chatMessageReaction.user, serializeChatMessageReactionIdentitySet);
        writer.writeAdditionalData(chatMessageReaction.additionalData);
}
