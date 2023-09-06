import { createTimeSlotFromDiscriminatorValue } from './createTimeSlotFromDiscriminatorValue';
import { deserializeIntoEventMessage } from './deserializeIntoEventMessage';
import { type EventMessageResponse } from './eventMessageResponse';
import { ResponseType } from './responseType';
import { serializeTimeSlot } from './serializeTimeSlot';
import { type TimeSlot } from './timeSlot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageResponse(eventMessageResponse: EventMessageResponse | undefined = {} as EventMessageResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessage(eventMessageResponse),
        "proposedNewTime": n => { eventMessageResponse.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "responseType": n => { eventMessageResponse.responseType = n.getEnumValue<ResponseType>(ResponseType); },
    }
}
