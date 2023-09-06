import { deserializeIntoAadUserConversationMember } from './deserializeIntoAadUserConversationMember';
import { type AadUserConversationMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAadUserConversationMember;
}
