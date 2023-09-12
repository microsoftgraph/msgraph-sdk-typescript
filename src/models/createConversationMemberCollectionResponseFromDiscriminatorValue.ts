import { deserializeIntoConversationMemberCollectionResponse } from './deserializeIntoConversationMemberCollectionResponse';
import { type ConversationMemberCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversationMemberCollectionResponse;
}
