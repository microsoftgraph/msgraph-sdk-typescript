import {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessagePolicyViolationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessagePolicyViolation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessagePolicyViolation();
}
