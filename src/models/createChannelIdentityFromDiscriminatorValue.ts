import {ChannelIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelIdentityImpl();
}
