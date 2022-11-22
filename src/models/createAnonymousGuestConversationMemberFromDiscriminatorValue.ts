import {AnonymousGuestConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnonymousGuestConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnonymousGuestConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnonymousGuestConversationMember();
}
