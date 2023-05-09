import {deserializeIntoAadUserConversationMemberResult} from './deserializeIntoAadUserConversationMemberResult';
import {AadUserConversationMemberResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAadUserConversationMemberResult;
}
