import { deserializeIntoSimulationAutomationRun } from './deserializeIntoSimulationAutomationRun';
import { type SimulationAutomationRun } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationAutomationRunFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomationRun;
}
