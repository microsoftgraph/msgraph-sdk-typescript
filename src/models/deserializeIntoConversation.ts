import {Conversation} from './conversation';
import {ConversationThread} from './conversationThread';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeConversationThread} from './serializeConversationThread';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversation(conversation: Conversation | undefined = {} as Conversation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conversation),
        "hasAttachments": n => { conversation.hasAttachments = n.getBooleanValue(); },
        "lastDeliveredDateTime": n => { conversation.lastDeliveredDateTime = n.getDateValue(); },
        "preview": n => { conversation.preview = n.getStringValue(); },
        "threads": n => { conversation.threads = n.getCollectionOfObjectValues<ConversationThread>(createConversationThreadFromDiscriminatorValue); },
        "topic": n => { conversation.topic = n.getStringValue(); },
        "uniqueSenders": n => { conversation.uniqueSenders = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
