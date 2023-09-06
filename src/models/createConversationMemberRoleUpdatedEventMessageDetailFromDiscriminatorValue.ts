import { deserializeIntoConversationMemberRoleUpdatedEventMessageDetail } from './deserializeIntoConversationMemberRoleUpdatedEventMessageDetail';
import { type ConversationMemberRoleUpdatedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConversationMemberRoleUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversationMemberRoleUpdatedEventMessageDetail;
}
