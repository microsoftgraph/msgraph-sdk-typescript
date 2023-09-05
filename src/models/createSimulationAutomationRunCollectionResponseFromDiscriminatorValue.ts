import { deserializeIntoSimulationAutomationRunCollectionResponse } from './deserializeIntoSimulationAutomationRunCollectionResponse';
import { type SimulationAutomationRunCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationAutomationRunCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomationRunCollectionResponse;
}
