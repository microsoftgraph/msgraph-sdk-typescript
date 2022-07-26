import {AadUserConversationMemberResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : AadUserConversationMemberResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AadUserConversationMemberResult();
}
