import {deserializeIntoSkypeForBusinessUserConversationMember} from './deserializeIntoSkypeForBusinessUserConversationMember';
import {SkypeForBusinessUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkypeForBusinessUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSkypeForBusinessUserConversationMember;
}
