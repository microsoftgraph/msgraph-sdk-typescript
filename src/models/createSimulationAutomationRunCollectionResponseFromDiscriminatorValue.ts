import {deserializeIntoSimulationAutomationRunCollectionResponse} from './deserializeIntoSimulationAutomationRunCollectionResponse';
import {SimulationAutomationRunCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationRunCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomationRunCollectionResponse;
}
