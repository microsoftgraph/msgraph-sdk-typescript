import {ChannelCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelCollectionResponseImpl();
}
