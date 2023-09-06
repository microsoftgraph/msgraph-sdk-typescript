import { deserializeIntoChatMessagePolicyViolation } from './deserializeIntoChatMessagePolicyViolation';
import { type ChatMessagePolicyViolation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessagePolicyViolation;
}
