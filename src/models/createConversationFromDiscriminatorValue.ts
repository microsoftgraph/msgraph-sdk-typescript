import {ConversationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationImpl();
}
