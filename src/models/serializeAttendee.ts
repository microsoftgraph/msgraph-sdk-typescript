import type {Attendee} from './attendee';
import type {ResponseStatus} from './responseStatus';
import {serializeAttendeeBase} from './serializeAttendeeBase';
import {serializeResponseStatus} from './serializeResponseStatus';
import {serializeTimeSlot} from './serializeTimeSlot';
import type {TimeSlot} from './timeSlot';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendee(writer: SerializationWriter, attendee: Attendee | undefined = {} as Attendee) : void {
        serializeAttendeeBase(writer, attendee)
        writer.writeObjectValue<TimeSlot>("proposedNewTime", attendee.proposedNewTime, serializeTimeSlot);
        writer.writeObjectValue<ResponseStatus>("status", attendee.status, serializeResponseStatus);
}
