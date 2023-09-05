import { deserializeIntoSkypeUserConversationMember } from './deserializeIntoSkypeUserConversationMember';
import { type SkypeUserConversationMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSkypeUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSkypeUserConversationMember;
}
