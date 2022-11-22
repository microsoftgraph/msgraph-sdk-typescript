import {SkypeUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkypeUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkypeUserConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkypeUserConversationMember();
}
