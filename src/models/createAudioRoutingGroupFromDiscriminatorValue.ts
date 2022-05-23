import {AudioRoutingGroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioRoutingGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : AudioRoutingGroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AudioRoutingGroupImpl();
}
