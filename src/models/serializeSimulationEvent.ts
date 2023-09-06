import { type SimulationEvent } from './simulationEvent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSimulationEvent(writer: SerializationWriter, simulationEvent: SimulationEvent | undefined = {} as SimulationEvent) : void {
        writer.writeNumberValue("count", simulationEvent.count);
        writer.writeStringValue("eventName", simulationEvent.eventName);
        writer.writeStringValue("@odata.type", simulationEvent.odataType);
        writer.writeAdditionalData(simulationEvent.additionalData);
}
