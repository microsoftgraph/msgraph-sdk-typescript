import {deserializeIntoSimulationAutomation} from './deserializeIntoSimulationAutomation';
import {SimulationAutomation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomation;
}
