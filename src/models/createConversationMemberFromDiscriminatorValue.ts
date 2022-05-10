import {ConversationMemberImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMemberImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationMemberImpl();
}
