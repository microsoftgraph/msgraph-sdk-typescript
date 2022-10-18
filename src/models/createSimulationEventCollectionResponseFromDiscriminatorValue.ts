import {SimulationEventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationEventCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationEventCollectionResponse();
}
