import {deserializeIntoSimulationCollectionResponse} from './deserializeIntoSimulationCollectionResponse';
import {SimulationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationCollectionResponse;
}
