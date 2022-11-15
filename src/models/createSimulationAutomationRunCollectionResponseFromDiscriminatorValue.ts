import {SimulationAutomationRunCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationRunCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationAutomationRunCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationAutomationRunCollectionResponse();
}
