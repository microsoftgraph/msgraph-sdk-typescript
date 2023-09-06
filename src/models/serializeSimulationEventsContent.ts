import { serializeSimulationEvent } from './serializeSimulationEvent';
import { type SimulationEvent } from './simulationEvent';
import { type SimulationEventsContent } from './simulationEventsContent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSimulationEventsContent(writer: SerializationWriter, simulationEventsContent: SimulationEventsContent | undefined = {} as SimulationEventsContent) : void {
        writer.writeNumberValue("compromisedRate", simulationEventsContent.compromisedRate);
        writer.writeCollectionOfObjectValues<SimulationEvent>("events", simulationEventsContent.events, serializeSimulationEvent);
        writer.writeStringValue("@odata.type", simulationEventsContent.odataType);
        writer.writeAdditionalData(simulationEventsContent.additionalData);
}
