import {Initiator} from './initiator';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInitiatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : Initiator {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Initiator();
}
