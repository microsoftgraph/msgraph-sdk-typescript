import { deserializeIntoSimulationEvent } from './deserializeIntoSimulationEvent';
import { type SimulationEvent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationEvent;
}
