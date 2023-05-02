import {ConversationMember} from './conversationMember';
import {ConversationMemberCollectionResponse} from './conversationMemberCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationMemberCollectionResponse(writer: SerializationWriter, conversationMemberCollectionResponse: ConversationMemberCollectionResponse | undefined = {} as ConversationMemberCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationMemberCollectionResponse)
        writer.writeCollectionOfObjectValues<ConversationMember>("value", conversationMemberCollectionResponse.value, serializeConversationMember);
}
