import {deserializeIntoChannelAddedEventMessageDetail} from './deserializeIntoChannelAddedEventMessageDetail';
import {ChannelAddedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelAddedEventMessageDetail;
}
