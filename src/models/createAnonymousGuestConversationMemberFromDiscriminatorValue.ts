import { deserializeIntoAnonymousGuestConversationMember } from './deserializeIntoAnonymousGuestConversationMember';
import { type AnonymousGuestConversationMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAnonymousGuestConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAnonymousGuestConversationMember;
}
