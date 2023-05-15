import {Attendee} from './attendee';
import {createResponseStatusFromDiscriminatorValue} from './createResponseStatusFromDiscriminatorValue';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {deserializeIntoAttendeeBase} from './deserializeIntoAttendeeBase';
import {ResponseStatus} from './responseStatus';
import {serializeResponseStatus} from './serializeResponseStatus';
import {serializeTimeSlot} from './serializeTimeSlot';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendee(attendee: Attendee | undefined = {} as Attendee) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttendeeBase(attendee),
        "proposedNewTime": n => { attendee.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "status": n => { attendee.status = n.getObjectValue<ResponseStatus>(createResponseStatusFromDiscriminatorValue); },
    }
}
