import { deserializeIntoConversationThread } from './deserializeIntoConversationThread';
import { type ConversationThread } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConversationThreadFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversationThread;
}
