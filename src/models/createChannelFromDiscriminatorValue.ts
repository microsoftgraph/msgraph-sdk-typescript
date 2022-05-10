import {ChannelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelImpl();
}
