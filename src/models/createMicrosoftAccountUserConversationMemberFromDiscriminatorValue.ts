import {MicrosoftAccountUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAccountUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAccountUserConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAccountUserConversationMember();
}
