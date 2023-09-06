import { type ConversationMember } from './conversationMember';
import { type ConversationMemberCollectionResponse } from './conversationMemberCollectionResponse';
import { createConversationMemberFromDiscriminatorValue } from './createConversationMemberFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeConversationMember } from './serializeConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMemberCollectionResponse(conversationMemberCollectionResponse: ConversationMemberCollectionResponse | undefined = {} as ConversationMemberCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationMemberCollectionResponse),
        "value": n => { conversationMemberCollectionResponse.value = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
    }
}
