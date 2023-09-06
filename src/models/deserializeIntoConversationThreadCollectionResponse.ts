import { type ConversationThread } from './conversationThread';
import { type ConversationThreadCollectionResponse } from './conversationThreadCollectionResponse';
import { createConversationThreadFromDiscriminatorValue } from './createConversationThreadFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeConversationThread } from './serializeConversationThread';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationThreadCollectionResponse(conversationThreadCollectionResponse: ConversationThreadCollectionResponse | undefined = {} as ConversationThreadCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationThreadCollectionResponse),
        "value": n => { conversationThreadCollectionResponse.value = n.getCollectionOfObjectValues<ConversationThread>(createConversationThreadFromDiscriminatorValue); },
    }
}
