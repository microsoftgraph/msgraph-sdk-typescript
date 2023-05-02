import {ConversationMember} from './conversationMember';
import {ConversationMemberCollectionResponse} from './conversationMemberCollectionResponse';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMemberCollectionResponse(conversationMemberCollectionResponse: ConversationMemberCollectionResponse | undefined = {} as ConversationMemberCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conversationMemberCollectionResponse),
        "value": n => { conversationMemberCollectionResponse.value = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
    }
}
