import {ChannelMembersNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelMembersNotificationRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelMembersNotificationRecipient();
}
