import {deserializeIntoSimulationEvent} from './deserializeIntoSimulationEvent';
import {SimulationEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationEvent;
}
