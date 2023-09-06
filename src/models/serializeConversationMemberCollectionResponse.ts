import { type ConversationMember } from './conversationMember';
import { type ConversationMemberCollectionResponse } from './conversationMemberCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeConversationMember } from './serializeConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConversationMemberCollectionResponse(writer: SerializationWriter, conversationMemberCollectionResponse: ConversationMemberCollectionResponse | undefined = {} as ConversationMemberCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationMemberCollectionResponse)
        writer.writeCollectionOfObjectValues<ConversationMember>("value", conversationMemberCollectionResponse.value, serializeConversationMember);
}
