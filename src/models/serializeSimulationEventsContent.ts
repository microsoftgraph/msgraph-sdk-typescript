import {serializeSimulationEvent} from './serializeSimulationEvent';
import {SimulationEvent} from './simulationEvent';
import {SimulationEventsContent} from './simulationEventsContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationEventsContent(writer: SerializationWriter, simulationEventsContent: SimulationEventsContent | undefined = {} as SimulationEventsContent) : void {
        writer.writeNumberValue("compromisedRate", simulationEventsContent.compromisedRate);
        writer.writeCollectionOfObjectValues<SimulationEvent>("events", simulationEventsContent.events, serializeSimulationEvent);
        writer.writeStringValue("@odata.type", simulationEventsContent.odataType);
        writer.writeAdditionalData(simulationEventsContent.additionalData);
}
