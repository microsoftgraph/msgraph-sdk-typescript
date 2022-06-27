import {ScheduleChangeRequestImpl} from './index';
import {TimeOffRequest} from './timeOffRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffRequestImpl extends ScheduleChangeRequestImpl implements TimeOffRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public endDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public startDateTime?: Date | undefined;
    /** The reason for the time off. */
    public timeOffReasonId?: string | undefined;
    /**
     * Instantiates a new TimeOffRequest and sets the default values.
     * @param timeOffRequestParameterValue 
     */
    public constructor(timeOffRequestParameterValue?: TimeOffRequest | undefined) {
        super(timeOffRequestParameterValue);
        this.additionalData = timeOffRequestParameterValue?.additionalData ? timeOffRequestParameterValue?.additionalData! : {};
        this.endDateTime = timeOffRequestParameterValue?.endDateTime;
        this.startDateTime = timeOffRequestParameterValue?.startDateTime;
        this.timeOffReasonId = timeOffRequestParameterValue?.timeOffReasonId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "timeOffReasonId": n => { this.timeOffReasonId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.timeOffReasonId){
            writer.writeStringValue("timeOffReasonId", this.timeOffReasonId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
