import { type EventPropagationResult } from './eventPropagationResult';
import { EventPropagationStatus } from './eventPropagationStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEventPropagationResult(eventPropagationResult: EventPropagationResult | undefined = {} as EventPropagationResult) : Record<string, (node: ParseNode) => void> {
    return {
        "location": n => { eventPropagationResult.location = n.getStringValue(); },
        "@odata.type": n => { eventPropagationResult.odataType = n.getStringValue(); },
        "serviceName": n => { eventPropagationResult.serviceName = n.getStringValue(); },
        "status": n => { eventPropagationResult.status = n.getEnumValue<EventPropagationStatus>(EventPropagationStatus); },
        "statusInformation": n => { eventPropagationResult.statusInformation = n.getStringValue(); },
    }
}
