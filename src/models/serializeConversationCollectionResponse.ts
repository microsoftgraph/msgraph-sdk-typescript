import { type Conversation } from './conversation';
import { type ConversationCollectionResponse } from './conversationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeConversation } from './serializeConversation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConversationCollectionResponse(writer: SerializationWriter, conversationCollectionResponse: ConversationCollectionResponse | undefined = {} as ConversationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationCollectionResponse)
        writer.writeCollectionOfObjectValues<Conversation>("value", conversationCollectionResponse.value, serializeConversation);
}
