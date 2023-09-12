import { deserializeIntoChannelCollectionResponse } from './deserializeIntoChannelCollectionResponse';
import { type ChannelCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelCollectionResponse;
}
