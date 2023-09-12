import { deserializeIntoConversationCollectionResponse } from './deserializeIntoConversationCollectionResponse';
import { type ConversationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConversationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversationCollectionResponse;
}
