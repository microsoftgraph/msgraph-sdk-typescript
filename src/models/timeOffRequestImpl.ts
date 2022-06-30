import {ScheduleChangeRequestImpl} from './index';
import {TimeOffRequest} from './timeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffRequestImpl extends ScheduleChangeRequestImpl implements TimeOffRequest {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _endDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _startDateTime?: Date | undefined;
    /** The reason for the time off. */
    private _timeOffReasonId?: string | undefined;
    /**
     * Instantiates a new TimeOffRequest and sets the default values.
     * @param timeOffRequestParameterValue 
     */
    public constructor(timeOffRequestParameterValue?: TimeOffRequest | undefined) {
        super(timeOffRequestParameterValue);
        this._endDateTime = timeOffRequestParameterValue?.endDateTime;
        this._startDateTime = timeOffRequestParameterValue?.startDateTime;
        this._timeOffReasonId = timeOffRequestParameterValue?.timeOffReasonId;
    };
    /**
     * Gets the endDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
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
    };
    /**
     * Gets the startDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
    /**
     * Gets the timeOffReasonId property value. The reason for the time off.
     * @returns a string
     */
    public get timeOffReasonId() {
        return this._timeOffReasonId;
    };
    /**
     * Sets the timeOffReasonId property value. The reason for the time off.
     * @param value Value to set for the timeOffReasonId property.
     */
    public set timeOffReasonId(value: string | undefined) {
        if(value) {
            this._timeOffReasonId = value;
        }
    };
}
