import { deserializeIntoSimulationAutomationCollectionResponse } from './deserializeIntoSimulationAutomationCollectionResponse';
import { type SimulationAutomationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationAutomationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomationCollectionResponse;
}
