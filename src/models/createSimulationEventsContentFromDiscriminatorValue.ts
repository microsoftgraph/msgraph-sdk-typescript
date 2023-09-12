import { deserializeIntoSimulationEventsContent } from './deserializeIntoSimulationEventsContent';
import { type SimulationEventsContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSimulationEventsContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSimulationEventsContent;
}
