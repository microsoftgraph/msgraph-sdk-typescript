import { type AttendeeAvailability } from './attendeeAvailability';
import { type AttendeeBase } from './attendeeBase';
import { FreeBusyStatus } from './freeBusyStatus';
import { serializeAttendeeBase } from './serializeAttendeeBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttendeeAvailability(writer: SerializationWriter, attendeeAvailability: AttendeeAvailability | undefined = {} as AttendeeAvailability) : void {
        writer.writeObjectValue<AttendeeBase>("attendee", attendeeAvailability.attendee, serializeAttendeeBase);
        writer.writeEnumValue<FreeBusyStatus>("availability", attendeeAvailability.availability);
        writer.writeStringValue("@odata.type", attendeeAvailability.odataType);
        writer.writeAdditionalData(attendeeAvailability.additionalData);
}
