import {createTimeZoneBaseFromDiscriminatorValue} from './createTimeZoneBaseFromDiscriminatorValue';
import {TimeZoneBaseImpl} from './index';
import {TimeZoneBase} from './timeZoneBase';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WorkingHoursImpl implements WorkingHours {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The days of the week on which the user works. */
    private _daysOfWeek?: string[] | undefined;
    /** The time of the day that the user stops working. */
    private _endTime?: TimeOnly | undefined;
    /** The time of the day that the user starts working. */
    private _startTime?: TimeOnly | undefined;
    /** The time zone to which the working hours apply. */
    private _timeZone?: TimeZoneBase | undefined;
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
     * Instantiates a new workingHours and sets the default values.
     * @param workingHoursParameterValue 
     */
    public constructor(workingHoursParameterValue?: WorkingHours | undefined) {
        this._additionalData = workingHoursParameterValue?.additionalData ? workingHoursParameterValue?.additionalData! : {};
        this._daysOfWeek = workingHoursParameterValue?.daysOfWeek;
        this._endTime = workingHoursParameterValue?.endTime;
        this._startTime = workingHoursParameterValue?.startTime;
        this._timeZone = workingHoursParameterValue?.timeZone;
    };
    /**
     * Gets the daysOfWeek property value. The days of the week on which the user works.
     * @returns a string
     */
    public get daysOfWeek() {
        return this._daysOfWeek;
    };
    /**
     * Sets the daysOfWeek property value. The days of the week on which the user works.
     * @param value Value to set for the daysOfWeek property.
     */
    public set daysOfWeek(value: string[] | undefined) {
        if(value) {
            this._daysOfWeek = value;
        }
    };
    /**
     * Gets the endTime property value. The time of the day that the user stops working.
     * @returns a TimeOnly
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. The time of the day that the user stops working.
     * @param value Value to set for the endTime property.
     */
    public set endTime(value: TimeOnly | undefined) {
        if(value) {
            this._endTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "daysOfWeek": n => { this.daysOfWeek = n.getCollectionOfPrimitiveValues<string>(); },
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
            "timeZone": n => { this.timeZone = n.getObjectValue<TimeZoneBaseImpl>(createTimeZoneBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.daysOfWeek){
            writer.writeCollectionOfPrimitiveValues<string>("daysOfWeek", this.daysOfWeek);
        }
        if(this.endTime){
            writer.writeTimeOnlyValue("endTime", this.endTime);
        }
        if(this.startTime){
            writer.writeTimeOnlyValue("startTime", this.startTime);
        }
        if(this.timeZone){
            writer.writeObjectValue<TimeZoneBaseImpl>("timeZone", (!this.timeZone || this.timeZone instanceof TimeZoneBaseImpl? this.timeZone : new TimeZoneBaseImpl(this.timeZone)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startTime property value. The time of the day that the user starts working.
     * @returns a TimeOnly
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. The time of the day that the user starts working.
     * @param value Value to set for the startTime property.
     */
    public set startTime(value: TimeOnly | undefined) {
        if(value) {
            this._startTime = value;
        }
    };
    /**
     * Gets the timeZone property value. The time zone to which the working hours apply.
     * @returns a TimeZoneBaseInterface
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The time zone to which the working hours apply.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: TimeZoneBase | undefined) {
        if(value) {
            this._timeZone = value instanceof TimeZoneBaseImpl? value : new TimeZoneBaseImpl(value);
        }
    };
}
