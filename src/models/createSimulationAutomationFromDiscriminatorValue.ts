import { deserializeIntoSimulationAutomation } from './deserializeIntoSimulationAutomation';
import { type SimulationAutomation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationAutomationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomation;
}
