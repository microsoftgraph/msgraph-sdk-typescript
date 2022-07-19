import {ChannelAddedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelAddedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelAddedEventMessageDetail();
}
