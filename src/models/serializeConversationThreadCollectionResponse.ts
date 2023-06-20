import {ConversationThread} from './conversationThread';
import {ConversationThreadCollectionResponse} from './conversationThreadCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversationThread} from './serializeConversationThread';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationThreadCollectionResponse(conversationThreadCollectionResponse: ConversationThreadCollectionResponse | undefined = {} as ConversationThreadCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationThreadCollectionResponse)
        writer.writeCollectionOfObjectValues<ConversationThread>("value", conversationThreadCollectionResponse.value, serializeConversationThread);
}
