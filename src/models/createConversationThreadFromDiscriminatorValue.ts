import {ConversationThreadImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationThreadFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationThreadImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationThreadImpl();
}
