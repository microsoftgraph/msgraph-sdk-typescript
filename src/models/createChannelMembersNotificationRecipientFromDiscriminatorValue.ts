import { deserializeIntoChannelMembersNotificationRecipient } from './deserializeIntoChannelMembersNotificationRecipient';
import { type ChannelMembersNotificationRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelMembersNotificationRecipient;
}
