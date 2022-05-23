import {AudioRoutingGroupCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioRoutingGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AudioRoutingGroupCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AudioRoutingGroupCollectionResponseImpl();
}
