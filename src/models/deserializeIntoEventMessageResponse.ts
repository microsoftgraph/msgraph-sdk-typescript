import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {EventMessageResponse} from './eventMessageResponse';
import {ResponseType} from './responseType';
import {serializeTimeSlot} from './serializeTimeSlot';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageResponse(eventMessageResponse: EventMessageResponse | undefined = {} as EventMessageResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessage(eventMessageResponse),
        "proposedNewTime": n => { eventMessageResponse.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "responseType": n => { eventMessageResponse.responseType = n.getEnumValue<ResponseType>(ResponseType); },
    }
}
