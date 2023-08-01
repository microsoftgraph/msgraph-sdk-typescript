import type {AttendeeAvailability} from './attendeeAvailability';
import {createAttendeeAvailabilityFromDiscriminatorValue} from './createAttendeeAvailabilityFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {FreeBusyStatus} from './freeBusyStatus';
import type {Location} from './location';
import type {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {serializeAttendeeAvailability} from './serializeAttendeeAvailability';
import {serializeLocation} from './serializeLocation';
import {serializeTimeSlot} from './serializeTimeSlot';
import type {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingTimeSuggestion(meetingTimeSuggestion: MeetingTimeSuggestion | undefined = {} as MeetingTimeSuggestion) : Record<string, (node: ParseNode) => void> {
    return {
        "attendeeAvailability": n => { meetingTimeSuggestion.attendeeAvailability = n.getCollectionOfObjectValues<AttendeeAvailability>(createAttendeeAvailabilityFromDiscriminatorValue); },
        "confidence": n => { meetingTimeSuggestion.confidence = n.getNumberValue(); },
        "locations": n => { meetingTimeSuggestion.locations = n.getCollectionOfObjectValues<Location>(createLocationFromDiscriminatorValue); },
        "meetingTimeSlot": n => { meetingTimeSuggestion.meetingTimeSlot = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "@odata.type": n => { meetingTimeSuggestion.odataType = n.getStringValue(); },
        "order": n => { meetingTimeSuggestion.order = n.getNumberValue(); },
        "organizerAvailability": n => { meetingTimeSuggestion.organizerAvailability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
        "suggestionReason": n => { meetingTimeSuggestion.suggestionReason = n.getStringValue(); },
    }
}
