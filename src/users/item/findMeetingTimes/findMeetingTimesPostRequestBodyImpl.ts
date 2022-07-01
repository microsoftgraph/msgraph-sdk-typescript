import {AttendeeBaseImpl, LocationConstraintImpl, TimeConstraintImpl} from '../../../models/';
import {AttendeeBase} from '../../../models/attendeeBase';
import {createAttendeeBaseFromDiscriminatorValue} from '../../../models/createAttendeeBaseFromDiscriminatorValue';
import {createLocationConstraintFromDiscriminatorValue} from '../../../models/createLocationConstraintFromDiscriminatorValue';
import {createTimeConstraintFromDiscriminatorValue} from '../../../models/createTimeConstraintFromDiscriminatorValue';
import {LocationConstraint} from '../../../models/locationConstraint';
import {TimeConstraint} from '../../../models/timeConstraint';
import {FindMeetingTimesPostRequestBody} from './findMeetingTimesPostRequestBody';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the findMeetingTimes method. */
export class FindMeetingTimesPostRequestBodyImpl implements FindMeetingTimesPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The attendees property */
    private _attendees?: AttendeeBase[] | undefined;
    /** The isOrganizerOptional property */
    private _isOrganizerOptional?: boolean | undefined;
    /** The locationConstraint property */
    private _locationConstraint?: LocationConstraint | undefined;
    /** The maxCandidates property */
    private _maxCandidates?: number | undefined;
    /** The meetingDuration property */
    private _meetingDuration?: Duration | undefined;
    /** The minimumAttendeePercentage property */
    private _minimumAttendeePercentage?: number | undefined;
    /** The returnSuggestionReasons property */
    private _returnSuggestionReasons?: boolean | undefined;
    /** The timeConstraint property */
    private _timeConstraint?: TimeConstraint | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the attendees property value. The attendees property
     * @returns a AttendeeBaseInterface
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Sets the attendees property value. The attendees property
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: AttendeeBase[] | undefined) {
        if(value) {
            const attendeesArrValue: AttendeeBaseImpl[] = [];
            this.attendees?.forEach(element => {
                attendeesArrValue.push((element instanceof AttendeeBaseImpl? element as AttendeeBaseImpl:new AttendeeBaseImpl(element)));
            });
            this._attendees = attendeesArrValue;
        }
    };
    /**
     * Instantiates a new findMeetingTimesPostRequestBody and sets the default values.
     * @param findMeetingTimesPostRequestBodyParameterValue 
     */
    public constructor(findMeetingTimesPostRequestBodyParameterValue?: FindMeetingTimesPostRequestBody | undefined) {
        this._additionalData = findMeetingTimesPostRequestBodyParameterValue?.additionalData ? findMeetingTimesPostRequestBodyParameterValue?.additionalData! : {};
        this._attendees = findMeetingTimesPostRequestBodyParameterValue?.attendees;
        this._isOrganizerOptional = findMeetingTimesPostRequestBodyParameterValue?.isOrganizerOptional;
        this._locationConstraint = findMeetingTimesPostRequestBodyParameterValue?.locationConstraint;
        this._maxCandidates = findMeetingTimesPostRequestBodyParameterValue?.maxCandidates;
        this._meetingDuration = findMeetingTimesPostRequestBodyParameterValue?.meetingDuration;
        this._minimumAttendeePercentage = findMeetingTimesPostRequestBodyParameterValue?.minimumAttendeePercentage;
        this._returnSuggestionReasons = findMeetingTimesPostRequestBodyParameterValue?.returnSuggestionReasons;
        this._timeConstraint = findMeetingTimesPostRequestBodyParameterValue?.timeConstraint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attendees": n => { this.attendees = n.getCollectionOfObjectValues<AttendeeBaseImpl>(createAttendeeBaseFromDiscriminatorValue); },
            "isOrganizerOptional": n => { this.isOrganizerOptional = n.getBooleanValue(); },
            "locationConstraint": n => { this.locationConstraint = n.getObjectValue<LocationConstraintImpl>(createLocationConstraintFromDiscriminatorValue); },
            "maxCandidates": n => { this.maxCandidates = n.getNumberValue(); },
            "meetingDuration": n => { this.meetingDuration = n.getDurationValue(); },
            "minimumAttendeePercentage": n => { this.minimumAttendeePercentage = n.getNumberValue(); },
            "returnSuggestionReasons": n => { this.returnSuggestionReasons = n.getBooleanValue(); },
            "timeConstraint": n => { this.timeConstraint = n.getObjectValue<TimeConstraintImpl>(createTimeConstraintFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isOrganizerOptional property value. The isOrganizerOptional property
     * @returns a boolean
     */
    public get isOrganizerOptional() {
        return this._isOrganizerOptional;
    };
    /**
     * Sets the isOrganizerOptional property value. The isOrganizerOptional property
     * @param value Value to set for the isOrganizerOptional property.
     */
    public set isOrganizerOptional(value: boolean | undefined) {
        if(value) {
            this._isOrganizerOptional = value;
        }
    };
    /**
     * Gets the locationConstraint property value. The locationConstraint property
     * @returns a LocationConstraintInterface
     */
    public get locationConstraint() {
        return this._locationConstraint;
    };
    /**
     * Sets the locationConstraint property value. The locationConstraint property
     * @param value Value to set for the locationConstraint property.
     */
    public set locationConstraint(value: LocationConstraint | undefined) {
        if(value) {
            this._locationConstraint = value instanceof LocationConstraintImpl? value as LocationConstraintImpl: new LocationConstraintImpl(value);
        }
    };
    /**
     * Gets the maxCandidates property value. The maxCandidates property
     * @returns a integer
     */
    public get maxCandidates() {
        return this._maxCandidates;
    };
    /**
     * Sets the maxCandidates property value. The maxCandidates property
     * @param value Value to set for the maxCandidates property.
     */
    public set maxCandidates(value: number | undefined) {
        if(value) {
            this._maxCandidates = value;
        }
    };
    /**
     * Gets the meetingDuration property value. The meetingDuration property
     * @returns a Duration
     */
    public get meetingDuration() {
        return this._meetingDuration;
    };
    /**
     * Sets the meetingDuration property value. The meetingDuration property
     * @param value Value to set for the meetingDuration property.
     */
    public set meetingDuration(value: Duration | undefined) {
        if(value) {
            this._meetingDuration = value;
        }
    };
    /**
     * Gets the minimumAttendeePercentage property value. The minimumAttendeePercentage property
     * @returns a double
     */
    public get minimumAttendeePercentage() {
        return this._minimumAttendeePercentage;
    };
    /**
     * Sets the minimumAttendeePercentage property value. The minimumAttendeePercentage property
     * @param value Value to set for the minimumAttendeePercentage property.
     */
    public set minimumAttendeePercentage(value: number | undefined) {
        if(value) {
            this._minimumAttendeePercentage = value;
        }
    };
    /**
     * Gets the returnSuggestionReasons property value. The returnSuggestionReasons property
     * @returns a boolean
     */
    public get returnSuggestionReasons() {
        return this._returnSuggestionReasons;
    };
    /**
     * Sets the returnSuggestionReasons property value. The returnSuggestionReasons property
     * @param value Value to set for the returnSuggestionReasons property.
     */
    public set returnSuggestionReasons(value: boolean | undefined) {
        if(value) {
            this._returnSuggestionReasons = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendees && this.attendees.length != 0){        const attendeesArrValue: AttendeeBaseImpl[] = [];
        this.attendees?.forEach(element => {
            attendeesArrValue.push((element instanceof AttendeeBaseImpl? element as AttendeeBaseImpl:new AttendeeBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AttendeeBaseImpl>("attendees", attendeesArrValue);
        }
        if(this.isOrganizerOptional){
            writer.writeBooleanValue("isOrganizerOptional", this.isOrganizerOptional);
        }
        if(this.locationConstraint){
            writer.writeObjectValue<LocationConstraintImpl>("locationConstraint", (this.locationConstraint instanceof LocationConstraintImpl? this.locationConstraint as LocationConstraintImpl: new LocationConstraintImpl(this.locationConstraint)));
        }
        if(this.maxCandidates){
            writer.writeNumberValue("maxCandidates", this.maxCandidates);
        }
        if(this.meetingDuration){
            writer.writeDurationValue("meetingDuration", this.meetingDuration);
        }
        if(this.minimumAttendeePercentage){
            writer.writeNumberValue("minimumAttendeePercentage", this.minimumAttendeePercentage);
        }
        if(this.returnSuggestionReasons){
            writer.writeBooleanValue("returnSuggestionReasons", this.returnSuggestionReasons);
        }
        if(this.timeConstraint){
            writer.writeObjectValue<TimeConstraintImpl>("timeConstraint", (this.timeConstraint instanceof TimeConstraintImpl? this.timeConstraint as TimeConstraintImpl: new TimeConstraintImpl(this.timeConstraint)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeConstraint property value. The timeConstraint property
     * @returns a TimeConstraintInterface
     */
    public get timeConstraint() {
        return this._timeConstraint;
    };
    /**
     * Sets the timeConstraint property value. The timeConstraint property
     * @param value Value to set for the timeConstraint property.
     */
    public set timeConstraint(value: TimeConstraint | undefined) {
        if(value) {
            this._timeConstraint = value instanceof TimeConstraintImpl? value as TimeConstraintImpl: new TimeConstraintImpl(value);
        }
    };
}
