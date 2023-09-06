import { deserializeIntoAadUserConversationMemberResult } from './deserializeIntoAadUserConversationMemberResult';
import { type AadUserConversationMemberResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAadUserConversationMemberResult;
}
