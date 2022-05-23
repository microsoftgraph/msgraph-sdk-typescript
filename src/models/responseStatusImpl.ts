import {ResponseStatus} from './responseStatus';
import {ResponseType} from './responseType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResponseStatusImpl implements AdditionalDataHolder, Parsable, ResponseStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The response type. Possible values are: none, organizer, tentativelyAccepted, accepted, declined, notResponded.To differentiate between none and notResponded:  none – from organizer's perspective. This value is used when the status of an attendee/participant is reported to the organizer of a meeting.  notResponded – from attendde's perspective. Indicates the attendee has not responded to the meeting request.  Clients can treat notResponded == none.  As an example, if attendee Alex hasn't responded to a meeting request, getting Alex' response status for that event in Alex' calendar returns notResponded. Getting Alex' response from the calendar of any other attendee or the organizer's returns none. Getting the organizer's response for the event in anybody's calendar also returns none. */
    public response?: ResponseType | undefined;
    /** The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public time?: Date | undefined;
    /**
     * Instantiates a new responseStatus and sets the default values.
     * @param responseStatusParameterValue 
     */
    public constructor(responseStatusParameterValue?: ResponseStatus | undefined) {
        this.additionalData = responseStatusParameterValue?.additionalData ? responseStatusParameterValue?.additionalData! : {}
        this.response = responseStatusParameterValue?.response ;
        this.time = responseStatusParameterValue?.time ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "response": n => { this.response = n.getEnumValue<ResponseType>(ResponseType); },
            "time": n => { this.time = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.response){
        writer.writeEnumValue<ResponseType>("response", this.response);
        }
        if(this.time){
        writer.writeDateValue("time", this.time);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
