import {ChatMessageReactionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageReactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageReactionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageReactionImpl();
}
