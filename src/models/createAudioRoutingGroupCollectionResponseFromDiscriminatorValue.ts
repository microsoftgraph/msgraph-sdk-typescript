import { deserializeIntoAudioRoutingGroupCollectionResponse } from './deserializeIntoAudioRoutingGroupCollectionResponse';
import { type AudioRoutingGroupCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAudioRoutingGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAudioRoutingGroupCollectionResponse;
}
