import {SkypeForBusinessUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkypeForBusinessUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkypeForBusinessUserConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkypeForBusinessUserConversationMember();
}
