import {AttendeeAvailability} from './attendeeAvailability';
import {AttendeeBase} from './attendeeBase';
import {FreeBusyStatus} from './freeBusyStatus';
import {serializeAttendeeBase} from './serializeAttendeeBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendeeAvailability(attendeeAvailability: AttendeeAvailability | undefined = {} as AttendeeAvailability, writer: SerializationWriter) : void {
        writer.writeObjectValue<AttendeeBase>("attendee", attendeeAvailability.attendee, serializeAttendeeBase);
        writer.writeEnumValue<FreeBusyStatus>("availability", attendeeAvailability.availability);
        writer.writeStringValue("@odata.type", attendeeAvailability.odataType);
        writer.writeAdditionalData(attendeeAvailability.additionalData);
}
