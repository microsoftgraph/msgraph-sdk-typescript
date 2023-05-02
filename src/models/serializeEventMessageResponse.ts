import {EventMessageResponse} from './eventMessageResponse';
import {ResponseType} from './responseType';
import {serializeEventMessage} from './serializeEventMessage';
import {serializeTimeSlot} from './serializeTimeSlot';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageResponse(writer: SerializationWriter, eventMessageResponse: EventMessageResponse | undefined = {} as EventMessageResponse) : void {
        serializeEventMessage(writer, eventMessageResponse)
        writer.writeObjectValue<TimeSlot>("proposedNewTime", eventMessageResponse.proposedNewTime, serializeTimeSlot);
        writer.writeEnumValue<ResponseType>("responseType", eventMessageResponse.responseType);
}
