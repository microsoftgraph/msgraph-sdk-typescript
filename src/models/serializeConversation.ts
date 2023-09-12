import { type Conversation } from './conversation';
import { type ConversationThread } from './conversationThread';
import { serializeConversationThread } from './serializeConversationThread';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConversation(writer: SerializationWriter, conversation: Conversation | undefined = {} as Conversation) : void {
        serializeEntity(writer, conversation)
        writer.writeBooleanValue("hasAttachments", conversation.hasAttachments);
        writer.writeDateValue("lastDeliveredDateTime", conversation.lastDeliveredDateTime);
        writer.writeStringValue("preview", conversation.preview);
        writer.writeCollectionOfObjectValues<ConversationThread>("threads", conversation.threads, serializeConversationThread);
        writer.writeStringValue("topic", conversation.topic);
        writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", conversation.uniqueSenders);
}
