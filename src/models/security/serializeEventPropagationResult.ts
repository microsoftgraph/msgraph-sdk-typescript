import {EventPropagationResult} from './eventPropagationResult';
import {EventPropagationStatus} from './eventPropagationStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventPropagationResult(writer: SerializationWriter, eventPropagationResult: EventPropagationResult | undefined = {} as EventPropagationResult) : void {
        writer.writeStringValue("location", eventPropagationResult.location);
        writer.writeStringValue("@odata.type", eventPropagationResult.odataType);
        writer.writeStringValue("serviceName", eventPropagationResult.serviceName);
        writer.writeEnumValue<EventPropagationStatus>("status", eventPropagationResult.status);
        writer.writeStringValue("statusInformation", eventPropagationResult.statusInformation);
        writer.writeAdditionalData(eventPropagationResult.additionalData);
}
