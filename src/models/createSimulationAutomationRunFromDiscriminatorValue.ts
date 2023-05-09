import {deserializeIntoSimulationAutomationRun} from './deserializeIntoSimulationAutomationRun';
import {SimulationAutomationRun} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationRunFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomationRun;
}
