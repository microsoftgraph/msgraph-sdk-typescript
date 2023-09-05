import { deserializeIntoChannelAddedEventMessageDetail } from './deserializeIntoChannelAddedEventMessageDetail';
import { type ChannelAddedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelAddedEventMessageDetail;
}
