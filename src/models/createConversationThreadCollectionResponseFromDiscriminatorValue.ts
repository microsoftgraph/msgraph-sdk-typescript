import { deserializeIntoConversationThreadCollectionResponse } from './deserializeIntoConversationThreadCollectionResponse';
import { type ConversationThreadCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConversationThreadCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversationThreadCollectionResponse;
}
