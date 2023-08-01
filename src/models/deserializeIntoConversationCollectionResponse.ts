import type {Conversation} from './conversation';
import type {ConversationCollectionResponse} from './conversationCollectionResponse';
import {createConversationFromDiscriminatorValue} from './createConversationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeConversation} from './serializeConversation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationCollectionResponse(conversationCollectionResponse: ConversationCollectionResponse | undefined = {} as ConversationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationCollectionResponse),
        "value": n => { conversationCollectionResponse.value = n.getCollectionOfObjectValues<Conversation>(createConversationFromDiscriminatorValue); },
    }
}
