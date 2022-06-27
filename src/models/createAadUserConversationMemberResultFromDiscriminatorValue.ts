import {AadUserConversationMemberResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : AadUserConversationMemberResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AadUserConversationMemberResultImpl();
}
