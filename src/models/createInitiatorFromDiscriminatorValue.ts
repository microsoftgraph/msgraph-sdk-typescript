import {deserializeIntoInitiator} from './deserializeIntoInitiator';
import {Initiator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInitiatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInitiator;
}
