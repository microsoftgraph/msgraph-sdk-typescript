import { deserializeIntoSkypeForBusinessUserConversationMember } from './deserializeIntoSkypeForBusinessUserConversationMember';
import { type SkypeForBusinessUserConversationMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSkypeForBusinessUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSkypeForBusinessUserConversationMember;
}
