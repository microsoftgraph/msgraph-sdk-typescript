import {ChatMessageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageImpl();
}
