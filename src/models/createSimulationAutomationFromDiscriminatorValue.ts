import {SimulationAutomation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationAutomation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationAutomation();
}
