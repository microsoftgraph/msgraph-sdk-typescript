import { type ConversationThread } from './conversationThread';
import { type Post } from './post';
import { type Recipient } from './recipient';
import { serializeEntity } from './serializeEntity';
import { serializePost } from './serializePost';
import { serializeRecipient } from './serializeRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConversationThread(writer: SerializationWriter, conversationThread: ConversationThread | undefined = {} as ConversationThread) : void {
        serializeEntity(writer, conversationThread)
        writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", conversationThread.ccRecipients, serializeRecipient);
        writer.writeBooleanValue("hasAttachments", conversationThread.hasAttachments);
        writer.writeBooleanValue("isLocked", conversationThread.isLocked);
        writer.writeDateValue("lastDeliveredDateTime", conversationThread.lastDeliveredDateTime);
        writer.writeCollectionOfObjectValues<Post>("posts", conversationThread.posts, serializePost);
        writer.writeStringValue("preview", conversationThread.preview);
        writer.writeStringValue("topic", conversationThread.topic);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", conversationThread.toRecipients, serializeRecipient);
        writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", conversationThread.uniqueSenders);
}
