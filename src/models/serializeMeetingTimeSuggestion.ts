import {AttendeeAvailability} from './attendeeAvailability';
import {FreeBusyStatus} from './freeBusyStatus';
import {Location} from './location';
import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {serializeAttendeeAvailability} from './serializeAttendeeAvailability';
import {serializeLocation} from './serializeLocation';
import {serializeTimeSlot} from './serializeTimeSlot';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingTimeSuggestion(writer: SerializationWriter, meetingTimeSuggestion: MeetingTimeSuggestion | undefined = {} as MeetingTimeSuggestion) : void {
        writer.writeCollectionOfObjectValues<AttendeeAvailability>("attendeeAvailability", meetingTimeSuggestion.attendeeAvailability, serializeAttendeeAvailability);
        writer.writeNumberValue("confidence", meetingTimeSuggestion.confidence);
        writer.writeCollectionOfObjectValues<Location>("locations", meetingTimeSuggestion.locations, serializeLocation);
        writer.writeObjectValue<TimeSlot>("meetingTimeSlot", meetingTimeSuggestion.meetingTimeSlot, serializeTimeSlot);
        writer.writeStringValue("@odata.type", meetingTimeSuggestion.odataType);
        writer.writeNumberValue("order", meetingTimeSuggestion.order);
        writer.writeEnumValue<FreeBusyStatus>("organizerAvailability", meetingTimeSuggestion.organizerAvailability);
        writer.writeStringValue("suggestionReason", meetingTimeSuggestion.suggestionReason);
        writer.writeAdditionalData(meetingTimeSuggestion.additionalData);
}
