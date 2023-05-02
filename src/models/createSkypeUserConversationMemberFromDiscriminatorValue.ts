import {deserializeIntoSkypeUserConversationMember} from './deserializeIntoSkypeUserConversationMember';
import {SkypeUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkypeUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSkypeUserConversationMember;
}
