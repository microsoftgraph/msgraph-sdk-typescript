import {Attendee} from './attendee';
import {ResponseStatus} from './responseStatus';
import {serializeAttendeeBase} from './serializeAttendeeBase';
import {serializeResponseStatus} from './serializeResponseStatus';
import {serializeTimeSlot} from './serializeTimeSlot';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendee(writer: SerializationWriter, attendee: Attendee | undefined = {} as Attendee) : void {
        serializeAttendeeBase(writer, attendee)
        writer.writeObjectValue<TimeSlot>("proposedNewTime", attendee.proposedNewTime, serializeTimeSlot);
        writer.writeObjectValue<ResponseStatus>("status", attendee.status, serializeResponseStatus);
}
