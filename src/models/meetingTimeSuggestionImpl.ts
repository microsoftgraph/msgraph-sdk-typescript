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

export class MeetingTimeSuggestionImpl implements MeetingTimeSuggestion {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** An array that shows the availability status of each attendee for this meeting suggestion. */
    private _attendeeAvailability?: AttendeeAvailability[] | undefined;
    /** A percentage that represents the likelhood of all the attendees attending. */
    private _confidence?: number | undefined;
    /** An array that specifies the name and geographic location of each meeting location for this meeting suggestion. */
    private _locations?: Location[] | undefined;
    /** A time period suggested for the meeting. */
    private _meetingTimeSlot?: TimeSlot | undefined;
    /** Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence. */
    private _order?: number | undefined;
    /** Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    private _organizerAvailability?: FreeBusyStatus | undefined;
    /** Reason for suggesting the meeting time. */
    private _suggestionReason?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the attendeeAvailability property value. An array that shows the availability status of each attendee for this meeting suggestion.
     * @returns a AttendeeAvailabilityInterface
     */
    public get attendeeAvailability() {
        return this._attendeeAvailability;
    };
    /**
     * Sets the attendeeAvailability property value. An array that shows the availability status of each attendee for this meeting suggestion.
     * @param value Value to set for the attendeeAvailability property.
     */
    public set attendeeAvailability(value: AttendeeAvailability[] | undefined) {
        if(value) {
            const attendeeAvailabilityArrValue: AttendeeAvailabilityImpl[] = [];
            this.attendeeAvailability?.forEach(element => {
                attendeeAvailabilityArrValue.push((element instanceof AttendeeAvailabilityImpl? element:new AttendeeAvailabilityImpl(element)));
            });
            this._attendeeAvailability = attendeeAvailabilityArrValue;
        }
    };
    /**
     * Gets the confidence property value. A percentage that represents the likelhood of all the attendees attending.
     * @returns a double
     */
    public get confidence() {
        return this._confidence;
    };
    /**
     * Sets the confidence property value. A percentage that represents the likelhood of all the attendees attending.
     * @param value Value to set for the confidence property.
     */
    public set confidence(value: number | undefined) {
        if(value) {
            this._confidence = value;
        }
    };
    /**
     * Instantiates a new meetingTimeSuggestion and sets the default values.
     * @param meetingTimeSuggestionParameterValue 
     */
    public constructor(meetingTimeSuggestionParameterValue?: MeetingTimeSuggestion | undefined) {
        this._additionalData = meetingTimeSuggestionParameterValue?.additionalData ? meetingTimeSuggestionParameterValue?.additionalData! : {};
        this._attendeeAvailability = meetingTimeSuggestionParameterValue?.attendeeAvailability;
        this._confidence = meetingTimeSuggestionParameterValue?.confidence;
        this._locations = meetingTimeSuggestionParameterValue?.locations;
        this._meetingTimeSlot = meetingTimeSuggestionParameterValue?.meetingTimeSlot;
        this._order = meetingTimeSuggestionParameterValue?.order;
        this._organizerAvailability = meetingTimeSuggestionParameterValue?.organizerAvailability;
        this._suggestionReason = meetingTimeSuggestionParameterValue?.suggestionReason;
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
     * Gets the locations property value. An array that specifies the name and geographic location of each meeting location for this meeting suggestion.
     * @returns a LocationInterface
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Sets the locations property value. An array that specifies the name and geographic location of each meeting location for this meeting suggestion.
     * @param value Value to set for the locations property.
     */
    public set locations(value: Location[] | undefined) {
        if(value) {
            const locationsArrValue: LocationImpl[] = [];
            this.locations?.forEach(element => {
                locationsArrValue.push((element instanceof LocationImpl? element:new LocationImpl(element)));
            });
            this._locations = locationsArrValue;
        }
    };
    /**
     * Gets the meetingTimeSlot property value. A time period suggested for the meeting.
     * @returns a TimeSlotInterface
     */
    public get meetingTimeSlot() {
        return this._meetingTimeSlot;
    };
    /**
     * Sets the meetingTimeSlot property value. A time period suggested for the meeting.
     * @param value Value to set for the meetingTimeSlot property.
     */
    public set meetingTimeSlot(value: TimeSlot | undefined) {
        if(value) {
            this._meetingTimeSlot = value instanceof TimeSlotImpl? value : new TimeSlotImpl(value);
        }
    };
    /**
     * Gets the order property value. Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence.
     * @returns a integer
     */
    public get order() {
        return this._order;
    };
    /**
     * Sets the order property value. Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence.
     * @param value Value to set for the order property.
     */
    public set order(value: number | undefined) {
        if(value) {
            this._order = value;
        }
    };
    /**
     * Gets the organizerAvailability property value. Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @returns a freeBusyStatus
     */
    public get organizerAvailability() {
        return this._organizerAvailability;
    };
    /**
     * Sets the organizerAvailability property value. Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @param value Value to set for the organizerAvailability property.
     */
    public set organizerAvailability(value: FreeBusyStatus | undefined) {
        if(value) {
            this._organizerAvailability = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendeeAvailability && this.attendeeAvailability.length != 0){        const attendeeAvailabilityArrValue: AttendeeAvailabilityImpl[] = [];
        this.attendeeAvailability?.forEach(element => {
            attendeeAvailabilityArrValue.push((element instanceof AttendeeAvailabilityImpl? element:new AttendeeAvailabilityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AttendeeAvailabilityImpl>("attendeeAvailability", attendeeAvailabilityArrValue);
        }
        if(this.confidence){
            writer.writeNumberValue("confidence", this.confidence);
        }
        if(this.locations && this.locations.length != 0){        const locationsArrValue: LocationImpl[] = [];
        this.locations?.forEach(element => {
            locationsArrValue.push((element instanceof LocationImpl? element:new LocationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LocationImpl>("locations", locationsArrValue);
        }
        if(this.meetingTimeSlot){
            writer.writeObjectValue<TimeSlotImpl>("meetingTimeSlot", (!this.meetingTimeSlot || this.meetingTimeSlot instanceof TimeSlotImpl? this.meetingTimeSlot : new TimeSlotImpl(this.meetingTimeSlot)));
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
    /**
     * Gets the suggestionReason property value. Reason for suggesting the meeting time.
     * @returns a string
     */
    public get suggestionReason() {
        return this._suggestionReason;
    };
    /**
     * Sets the suggestionReason property value. Reason for suggesting the meeting time.
     * @param value Value to set for the suggestionReason property.
     */
    public set suggestionReason(value: string | undefined) {
        if(value) {
            this._suggestionReason = value;
        }
    };
}
