import {SimulationEventsContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimulationEventsContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : SimulationEventsContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SimulationEventsContent();
}
