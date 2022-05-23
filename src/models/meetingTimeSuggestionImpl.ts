import {AttendeeAvailability} from './attendeeAvailability';
import {createAttendeeAvailabilityFromDiscriminatorValue} from './createAttendeeAvailabilityFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeAvailabilityImpl, LocationImpl, TimeSlotImpl} from './index';
import {Location} from './location';
import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingTimeSuggestionImpl implements AdditionalDataHolder, MeetingTimeSuggestion, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** An array that shows the availability status of each attendee for this meeting suggestion. */
    public attendeeAvailability?: AttendeeAvailability[] | undefined;
    /** A percentage that represents the likelhood of all the attendees attending. */
    public confidence?: number | undefined;
    /** An array that specifies the name and geographic location of each meeting location for this meeting suggestion. */
    public locations?: Location[] | undefined;
    /** A time period suggested for the meeting. */
    public meetingTimeSlot?: TimeSlot | undefined;
    /** Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence. */
    public order?: number | undefined;
    /** Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    public organizerAvailability?: FreeBusyStatus | undefined;
    /** Reason for suggesting the meeting time. */
    public suggestionReason?: string | undefined;
    /**
     * Instantiates a new meetingTimeSuggestion and sets the default values.
     * @param meetingTimeSuggestionParameterValue 
     */
    public constructor(meetingTimeSuggestionParameterValue?: MeetingTimeSuggestion | undefined) {
        this.additionalData = meetingTimeSuggestionParameterValue?.additionalData ? meetingTimeSuggestionParameterValue?.additionalData! : {}
        this.attendeeAvailability = meetingTimeSuggestionParameterValue?.attendeeAvailability ;
        this.confidence = meetingTimeSuggestionParameterValue?.confidence ;
        this.locations = meetingTimeSuggestionParameterValue?.locations ;
        this.meetingTimeSlot = meetingTimeSuggestionParameterValue?.meetingTimeSlot ;
        this.order = meetingTimeSuggestionParameterValue?.order ;
        this.organizerAvailability = meetingTimeSuggestionParameterValue?.organizerAvailability ;
        this.suggestionReason = meetingTimeSuggestionParameterValue?.suggestionReason ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attendeeAvailability": n => { this.attendeeAvailability = n.getCollectionOfObjectValues<AttendeeAvailabilityImpl>(createAttendeeAvailabilityFromDiscriminatorValue); },
            "confidence": n => { this.confidence = n.getNumberValue(); },
            "locations": n => { this.locations = n.getCollectionOfObjectValues<LocationImpl>(createLocationFromDiscriminatorValue); },
            "meetingTimeSlot": n => { this.meetingTimeSlot = n.getObjectValue<TimeSlotImpl>(createTimeSlotFromDiscriminatorValue); },
            "order": n => { this.order = n.getNumberValue(); },
            "organizerAvailability": n => { this.organizerAvailability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
            "suggestionReason": n => { this.suggestionReason = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendeeAvailability && this.attendeeAvailability.length != 0){        const attendeeAvailabilityArrValue: AttendeeAvailabilityImpl[] = []; this.attendeeAvailability?.forEach(element => {attendeeAvailabilityArrValue.push(new AttendeeAvailabilityImpl(element));});
        writer.writeCollectionOfObjectValues<AttendeeAvailabilityImpl>("attendeeAvailability", attendeeAvailabilityArrValue);
        }
        if(this.confidence){
        writer.writeNumberValue("confidence", this.confidence);
        }
        if(this.locations && this.locations.length != 0){        const locationsArrValue: LocationImpl[] = []; this.locations?.forEach(element => {locationsArrValue.push(new LocationImpl(element));});
        writer.writeCollectionOfObjectValues<LocationImpl>("locations", locationsArrValue);
        }
        if(this.meetingTimeSlot){
        writer.writeObjectValue<TimeSlotImpl>("meetingTimeSlot", new TimeSlotImpl(this.meetingTimeSlot));
        }
        if(this.order){
        writer.writeNumberValue("order", this.order);
        }
        if(this.organizerAvailability){
        writer.writeEnumValue<FreeBusyStatus>("organizerAvailability", this.organizerAvailability);
        }
        if(this.suggestionReason){
        writer.writeStringValue("suggestionReason", this.suggestionReason);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
