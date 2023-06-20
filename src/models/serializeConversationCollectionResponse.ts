import {Conversation} from './conversation';
import {ConversationCollectionResponse} from './conversationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversation} from './serializeConversation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationCollectionResponse(conversationCollectionResponse: ConversationCollectionResponse | undefined = {} as ConversationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationCollectionResponse)
        writer.writeCollectionOfObjectValues<Conversation>("value", conversationCollectionResponse.value, serializeConversation);
}
