import { deserializeIntoConversation } from './deserializeIntoConversation';
import { type Conversation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConversationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversation;
}
