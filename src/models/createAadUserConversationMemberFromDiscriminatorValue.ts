import {AadUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : AadUserConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AadUserConversationMember();
}
