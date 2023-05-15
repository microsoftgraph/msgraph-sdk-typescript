import {deserializeIntoChatMessagePolicyViolation} from './deserializeIntoChatMessagePolicyViolation';
import {ChatMessagePolicyViolation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessagePolicyViolation;
}
