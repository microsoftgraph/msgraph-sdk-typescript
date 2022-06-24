import {AadUserConversationMemberImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : AadUserConversationMemberImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AadUserConversationMemberImpl();
}
