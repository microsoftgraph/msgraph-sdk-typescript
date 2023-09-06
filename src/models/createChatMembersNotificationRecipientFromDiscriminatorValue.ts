import { deserializeIntoChatMembersNotificationRecipient } from './deserializeIntoChatMembersNotificationRecipient';
import { type ChatMembersNotificationRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMembersNotificationRecipient;
}
