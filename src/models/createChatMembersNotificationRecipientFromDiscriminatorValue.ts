import {ChatMembersNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMembersNotificationRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMembersNotificationRecipient();
}
