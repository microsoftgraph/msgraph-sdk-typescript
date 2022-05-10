import {ChatMessagePolicyViolationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessagePolicyViolationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessagePolicyViolationImpl();
}
