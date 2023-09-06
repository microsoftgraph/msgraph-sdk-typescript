import { deserializeIntoChatMessagePolicyViolationPolicyTip } from './deserializeIntoChatMessagePolicyViolationPolicyTip';
import { type ChatMessagePolicyViolationPolicyTip } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessagePolicyViolationPolicyTip;
}
