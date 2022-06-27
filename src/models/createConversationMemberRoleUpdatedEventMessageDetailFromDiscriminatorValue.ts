import {ConversationMemberRoleUpdatedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberRoleUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMemberRoleUpdatedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationMemberRoleUpdatedEventMessageDetailImpl();
}
