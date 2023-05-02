import {deserializeIntoChannelMembersNotificationRecipient} from './deserializeIntoChannelMembersNotificationRecipient';
import {ChannelMembersNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelMembersNotificationRecipient;
}
