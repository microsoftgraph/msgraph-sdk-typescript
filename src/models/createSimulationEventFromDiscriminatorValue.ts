import {SimulationEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationEvent();
}
