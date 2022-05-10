import {ChatMessagePolicyViolationPolicyTipImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessagePolicyViolationPolicyTipImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessagePolicyViolationPolicyTipImpl();
}
