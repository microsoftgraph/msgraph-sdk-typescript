import { type ConversationThread } from './conversationThread';
import { type ConversationThreadCollectionResponse } from './conversationThreadCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeConversationThread } from './serializeConversationThread';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConversationThreadCollectionResponse(writer: SerializationWriter, conversationThreadCollectionResponse: ConversationThreadCollectionResponse | undefined = {} as ConversationThreadCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationThreadCollectionResponse)
        writer.writeCollectionOfObjectValues<ConversationThread>("value", conversationThreadCollectionResponse.value, serializeConversationThread);
}
