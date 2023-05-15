import {Conversation} from './conversation';
import {ConversationCollectionResponse} from './conversationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversation} from './serializeConversation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationCollectionResponse(writer: SerializationWriter, conversationCollectionResponse: ConversationCollectionResponse | undefined = {} as ConversationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationCollectionResponse)
        writer.writeCollectionOfObjectValues<Conversation>("value", conversationCollectionResponse.value, serializeConversation);
}
