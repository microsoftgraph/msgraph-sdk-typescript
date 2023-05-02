import {deserializeIntoAudioRoutingGroup} from './deserializeIntoAudioRoutingGroup';
import {AudioRoutingGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioRoutingGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAudioRoutingGroup;
}
