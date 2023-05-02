import {deserializeIntoAnonymousGuestConversationMember} from './deserializeIntoAnonymousGuestConversationMember';
import {AnonymousGuestConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnonymousGuestConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAnonymousGuestConversationMember;
}
