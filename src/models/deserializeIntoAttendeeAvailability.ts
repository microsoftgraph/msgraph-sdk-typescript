import {AttendeeAvailability} from './attendeeAvailability';
import {AttendeeBase} from './attendeeBase';
import {createAttendeeBaseFromDiscriminatorValue} from './createAttendeeBaseFromDiscriminatorValue';
import {FreeBusyStatus} from './freeBusyStatus';
import {serializeAttendeeBase} from './serializeAttendeeBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeAvailability(attendeeAvailability: AttendeeAvailability | undefined = {} as AttendeeAvailability) : Record<string, (node: ParseNode) => void> {
    return {
        "attendee": n => { attendeeAvailability.attendee = n.getObjectValue<AttendeeBase>(createAttendeeBaseFromDiscriminatorValue); },
        "availability": n => { attendeeAvailability.availability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
        "@odata.type": n => { attendeeAvailability.odataType = n.getStringValue(); },
    }
}
