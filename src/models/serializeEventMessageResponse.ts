import { type EventMessageResponse } from './eventMessageResponse';
import { ResponseType } from './responseType';
import { serializeEventMessage } from './serializeEventMessage';
import { serializeTimeSlot } from './serializeTimeSlot';
import { type TimeSlot } from './timeSlot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEventMessageResponse(writer: SerializationWriter, eventMessageResponse: EventMessageResponse | undefined = {} as EventMessageResponse) : void {
        serializeEventMessage(writer, eventMessageResponse)
        writer.writeObjectValue<TimeSlot>("proposedNewTime", eventMessageResponse.proposedNewTime, serializeTimeSlot);
        writer.writeEnumValue<ResponseType>("responseType", eventMessageResponse.responseType);
}
