import {createTimeZoneBaseFromDiscriminatorValue} from './createTimeZoneBaseFromDiscriminatorValue';
import {DayOfWeek} from './dayOfWeek';
import {TimeZoneBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WorkingHours implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The days of the week on which the user works. */
    private _daysOfWeek?: DayOfWeek[] | undefined;
    /** The time of the day that the user stops working. */
    private _endTime?: TimeOnly | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new workingHours and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.workingHours";
    };
    /**
     * Gets the daysOfWeek property value. The days of the week on which the user works.
     * @returns a dayOfWeek
     */
    public get daysOfWeek() {
        return this._daysOfWeek;
    };
    /**
     * Sets the daysOfWeek property value. The days of the week on which the user works.
     * @param value Value to set for the daysOfWeek property.
     */
    public set daysOfWeek(value: DayOfWeek[] | undefined) {
        this._daysOfWeek = value;
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
        this._endTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "daysOfWeek": n => { this.daysOfWeek = n.getEnumValues<DayOfWeek>(DayOfWeek); },
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
            "timeZone": n => { this.timeZone = n.getObjectValue<TimeZoneBase>(createTimeZoneBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        this.daysOfWeek && writer.writeEnumValue<DayOfWeek>("daysOfWeek", ...this.daysOfWeek);
        writer.writeTimeOnlyValue("endTime", this.endTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeTimeOnlyValue("startTime", this.startTime);
        writer.writeObjectValue<TimeZoneBase>("timeZone", this.timeZone);
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
        this._startTime = value;
    };
    /**
     * Gets the timeZone property value. The time zone to which the working hours apply.
     * @returns a timeZoneBase
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The time zone to which the working hours apply.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: TimeZoneBase | undefined) {
        this._timeZone = value;
    };
}
