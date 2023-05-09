import {deserializeIntoMicrosoftAccountUserConversationMember} from './deserializeIntoMicrosoftAccountUserConversationMember';
import {MicrosoftAccountUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAccountUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAccountUserConversationMember;
}
