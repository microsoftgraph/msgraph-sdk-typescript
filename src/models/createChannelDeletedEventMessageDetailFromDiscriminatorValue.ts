import {ChannelDeletedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelDeletedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelDeletedEventMessageDetailImpl();
}
