import { deserializeIntoChannelDeletedEventMessageDetail } from './deserializeIntoChannelDeletedEventMessageDetail';
import { type ChannelDeletedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelDeletedEventMessageDetail;
}
