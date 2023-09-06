import { deserializeIntoSimulation } from './deserializeIntoSimulation';
import { type Simulation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulation;
}
