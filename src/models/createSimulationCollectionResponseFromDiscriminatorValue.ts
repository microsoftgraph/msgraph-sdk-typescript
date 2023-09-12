import { deserializeIntoSimulationCollectionResponse } from './deserializeIntoSimulationCollectionResponse';
import { type SimulationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationCollectionResponse;
}
