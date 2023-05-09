import {ConversationThread} from './conversationThread';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Post} from './post';
import {Recipient} from './recipient';
import {serializePost} from './serializePost';
import {serializeRecipient} from './serializeRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationThread(conversationThread: ConversationThread | undefined = {} as ConversationThread) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conversationThread),
        "ccRecipients": n => { conversationThread.ccRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
        "hasAttachments": n => { conversationThread.hasAttachments = n.getBooleanValue(); },
        "isLocked": n => { conversationThread.isLocked = n.getBooleanValue(); },
        "lastDeliveredDateTime": n => { conversationThread.lastDeliveredDateTime = n.getDateValue(); },
        "posts": n => { conversationThread.posts = n.getCollectionOfObjectValues<Post>(createPostFromDiscriminatorValue); },
        "preview": n => { conversationThread.preview = n.getStringValue(); },
        "topic": n => { conversationThread.topic = n.getStringValue(); },
        "toRecipients": n => { conversationThread.toRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
        "uniqueSenders": n => { conversationThread.uniqueSenders = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
