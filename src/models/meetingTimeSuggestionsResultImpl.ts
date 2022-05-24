import {createMeetingTimeSuggestionFromDiscriminatorValue} from './createMeetingTimeSuggestionFromDiscriminatorValue';
import {MeetingTimeSuggestionImpl} from './index';
import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {MeetingTimeSuggestionsResult} from './meetingTimeSuggestionsResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingTimeSuggestionsResultImpl implements AdditionalDataHolder, MeetingTimeSuggestionsResult, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A reason for not returning any meeting suggestions. Possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions. */
    public emptySuggestionsReason?: string | undefined;
    /** An array of meeting suggestions. */
    public meetingTimeSuggestions?: MeetingTimeSuggestion[] | undefined;
    /**
     * Instantiates a new MeetingTimeSuggestionsResult and sets the default values.
     * @param meetingTimeSuggestionsResultParameterValue 
     */
    public constructor(meetingTimeSuggestionsResultParameterValue?: MeetingTimeSuggestionsResult | undefined) {
        this.additionalData = meetingTimeSuggestionsResultParameterValue?.additionalData ? meetingTimeSuggestionsResultParameterValue?.additionalData! : {}
        this.emptySuggestionsReason = meetingTimeSuggestionsResultParameterValue?.emptySuggestionsReason ;
        this.meetingTimeSuggestions = meetingTimeSuggestionsResultParameterValue?.meetingTimeSuggestions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "emptySuggestionsReason": n => { this.emptySuggestionsReason = n.getStringValue(); },
            "meetingTimeSuggestions": n => { this.meetingTimeSuggestions = n.getCollectionOfObjectValues<MeetingTimeSuggestionImpl>(createMeetingTimeSuggestionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.emptySuggestionsReason){
        writer.writeStringValue("emptySuggestionsReason", this.emptySuggestionsReason);
        }
        if(this.meetingTimeSuggestions && this.meetingTimeSuggestions.length != 0){        const meetingTimeSuggestionsArrValue: MeetingTimeSuggestionImpl[] = []; this.meetingTimeSuggestions?.forEach(element => {meetingTimeSuggestionsArrValue.push(new MeetingTimeSuggestionImpl(element));});
        writer.writeCollectionOfObjectValues<MeetingTimeSuggestionImpl>("meetingTimeSuggestions", meetingTimeSuggestionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
