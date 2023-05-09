import {deserializeIntoConversation} from './deserializeIntoConversation';
import {Conversation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversation;
}
