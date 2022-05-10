import {AttendeeBaseImpl, LocationConstraintImpl, TimeConstraintImpl} from '../../../models/';
import {AttendeeBase} from '../../../models/attendeeBase';
import {createAttendeeBaseFromDiscriminatorValue} from '../../../models/createAttendeeBaseFromDiscriminatorValue';
import {createLocationConstraintFromDiscriminatorValue} from '../../../models/createLocationConstraintFromDiscriminatorValue';
import {createTimeConstraintFromDiscriminatorValue} from '../../../models/createTimeConstraintFromDiscriminatorValue';
import {LocationConstraint} from '../../../models/locationConstraint';
import {TimeConstraint} from '../../../models/timeConstraint';
import {FindMeetingTimesRequestBody} from './findMeetingTimesRequestBody';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the findMeetingTimes method.  */
export class FindMeetingTimesRequestBodyImpl implements AdditionalDataHolder, FindMeetingTimesRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The attendees property  */
    attendees?: AttendeeBase[] | undefined;
    /** The isOrganizerOptional property  */
    isOrganizerOptional?: boolean | undefined;
    /** The locationConstraint property  */
    locationConstraint?: LocationConstraint | undefined;
    /** The maxCandidates property  */
    maxCandidates?: number | undefined;
    /** The meetingDuration property  */
    meetingDuration?: Duration | undefined;
    /** The minimumAttendeePercentage property  */
    minimumAttendeePercentage?: number | undefined;
    /** The returnSuggestionReasons property  */
    returnSuggestionReasons?: boolean | undefined;
    /** The timeConstraint property  */
    timeConstraint?: TimeConstraint | undefined;
    /**
     * Instantiates a new findMeetingTimesRequestBody and sets the default values.
     * @param findMeetingTimesRequestBodyParameterValue 
     */
    public constructor(findMeetingTimesRequestBodyParameterValue?: FindMeetingTimesRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = findMeetingTimesRequestBodyParameterValue?.additionalData ? {} : findMeetingTimesRequestBodyParameterValue?.additionalData!
        this.attendees = findMeetingTimesRequestBodyParameterValue?.attendees ;
        this.isOrganizerOptional = findMeetingTimesRequestBodyParameterValue?.isOrganizerOptional ;
        this.locationConstraint = findMeetingTimesRequestBodyParameterValue?.locationConstraint ;
        this.maxCandidates = findMeetingTimesRequestBodyParameterValue?.maxCandidates ;
        this.meetingDuration = findMeetingTimesRequestBodyParameterValue?.meetingDuration ;
        this.minimumAttendeePercentage = findMeetingTimesRequestBodyParameterValue?.minimumAttendeePercentage ;
        this.returnSuggestionReasons = findMeetingTimesRequestBodyParameterValue?.returnSuggestionReasons ;
        this.timeConstraint = findMeetingTimesRequestBodyParameterValue?.timeConstraint ;
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
        if(this.attendees){
        const attendeesArrValue: AttendeeBaseImpl[] = []; this.attendees?.forEach(element => {attendeesArrValue.push(new AttendeeBaseImpl(element));});
        writer.writeCollectionOfObjectValues<AttendeeBaseImpl>("attendees", attendeesArrValue);
        }
        if(this.isOrganizerOptional){
        if(this.isOrganizerOptional)
        writer.writeBooleanValue("isOrganizerOptional", this.isOrganizerOptional);
        }
        if(this.locationConstraint){
        if(this.locationConstraint)
        writer.writeObjectValue<LocationConstraintImpl>("locationConstraint", new LocationConstraintImpl(this.locationConstraint));
        }
        if(this.maxCandidates){
        if(this.maxCandidates)
        writer.writeNumberValue("maxCandidates", this.maxCandidates);
        }
        if(this.meetingDuration){
        if(this.meetingDuration)
        writer.writeDurationValue("meetingDuration", this.meetingDuration);
        }
        if(this.minimumAttendeePercentage){
        if(this.minimumAttendeePercentage)
        writer.writeNumberValue("minimumAttendeePercentage", this.minimumAttendeePercentage);
        }
        if(this.returnSuggestionReasons){
        if(this.returnSuggestionReasons)
        writer.writeBooleanValue("returnSuggestionReasons", this.returnSuggestionReasons);
        }
        if(this.timeConstraint){
        if(this.timeConstraint)
        writer.writeObjectValue<TimeConstraintImpl>("timeConstraint", new TimeConstraintImpl(this.timeConstraint));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
