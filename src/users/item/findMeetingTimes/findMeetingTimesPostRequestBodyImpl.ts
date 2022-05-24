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
export class FindMeetingTimesPostRequestBodyImpl implements AdditionalDataHolder, FindMeetingTimesPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The attendees property */
    public attendees?: AttendeeBase[] | undefined;
    /** The isOrganizerOptional property */
    public isOrganizerOptional?: boolean | undefined;
    /** The locationConstraint property */
    public locationConstraint?: LocationConstraint | undefined;
    /** The maxCandidates property */
    public maxCandidates?: number | undefined;
    /** The meetingDuration property */
    public meetingDuration?: Duration | undefined;
    /** The minimumAttendeePercentage property */
    public minimumAttendeePercentage?: number | undefined;
    /** The returnSuggestionReasons property */
    public returnSuggestionReasons?: boolean | undefined;
    /** The timeConstraint property */
    public timeConstraint?: TimeConstraint | undefined;
    /**
     * Instantiates a new findMeetingTimesPostRequestBody and sets the default values.
     * @param findMeetingTimesPostRequestBodyParameterValue 
     */
    public constructor(findMeetingTimesPostRequestBodyParameterValue?: FindMeetingTimesPostRequestBody | undefined) {
        this.additionalData = findMeetingTimesPostRequestBodyParameterValue?.additionalData ? findMeetingTimesPostRequestBodyParameterValue?.additionalData! : {}
        this.attendees = findMeetingTimesPostRequestBodyParameterValue?.attendees ;
        this.isOrganizerOptional = findMeetingTimesPostRequestBodyParameterValue?.isOrganizerOptional ;
        this.locationConstraint = findMeetingTimesPostRequestBodyParameterValue?.locationConstraint ;
        this.maxCandidates = findMeetingTimesPostRequestBodyParameterValue?.maxCandidates ;
        this.meetingDuration = findMeetingTimesPostRequestBodyParameterValue?.meetingDuration ;
        this.minimumAttendeePercentage = findMeetingTimesPostRequestBodyParameterValue?.minimumAttendeePercentage ;
        this.returnSuggestionReasons = findMeetingTimesPostRequestBodyParameterValue?.returnSuggestionReasons ;
        this.timeConstraint = findMeetingTimesPostRequestBodyParameterValue?.timeConstraint ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attendees && this.attendees.length != 0){        const attendeesArrValue: AttendeeBaseImpl[] = []; this.attendees?.forEach(element => {attendeesArrValue.push(new AttendeeBaseImpl(element));});
        writer.writeCollectionOfObjectValues<AttendeeBaseImpl>("attendees", attendeesArrValue);
        }
        if(this.isOrganizerOptional){
        writer.writeBooleanValue("isOrganizerOptional", this.isOrganizerOptional);
        }
        if(this.locationConstraint){
        writer.writeObjectValue<LocationConstraintImpl>("locationConstraint", new LocationConstraintImpl(this.locationConstraint));
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
        writer.writeObjectValue<TimeConstraintImpl>("timeConstraint", new TimeConstraintImpl(this.timeConstraint));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
