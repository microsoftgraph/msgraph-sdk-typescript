import {deserializeIntoSimulationEventsContent} from './deserializeIntoSimulationEventsContent';
import {SimulationEventsContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationEventsContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationEventsContent;
}
