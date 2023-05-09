import {deserializeIntoSimulation} from './deserializeIntoSimulation';
import {Simulation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulation;
}
