import {deserializeIntoSimulationAutomationCollectionResponse} from './deserializeIntoSimulationAutomationCollectionResponse';
import {SimulationAutomationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationAutomationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationAutomationCollectionResponse;
}
