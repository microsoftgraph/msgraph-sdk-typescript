import {SimulationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationCollectionResponse();
}
