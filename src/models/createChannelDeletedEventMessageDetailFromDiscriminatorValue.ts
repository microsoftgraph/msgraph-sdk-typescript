import {deserializeIntoChannelDeletedEventMessageDetail} from './deserializeIntoChannelDeletedEventMessageDetail';
import {ChannelDeletedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelDeletedEventMessageDetail;
}
