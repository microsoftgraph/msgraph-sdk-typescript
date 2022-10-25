import {SimulationAutomationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationAutomationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationAutomationCollectionResponse();
}
