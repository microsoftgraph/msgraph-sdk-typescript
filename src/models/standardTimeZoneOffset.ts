import {DayOfWeek} from './dayOfWeek';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class StandardTimeZoneOffset implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs. */
    private _dayOccurrence?: number | undefined;
    /** Represents the day of the week when the transition from daylight saving time to standard time. */
    private _dayOfWeek?: DayOfWeek | undefined;
    /** Represents the month of the year when the transition from daylight saving time to standard time occurs. */
    private _month?: number | undefined;
    private _odataType?: string | undefined;
    /** Represents the time of day when the transition from daylight saving time to standard time occurs. */
    private _time?: TimeOnly | undefined;
    /** Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example, a value of 0 means every year. */
    private _year?: number | undefined;
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
     * Instantiates a new standardTimeZoneOffset and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dayOccurrence property value. Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs.
     * @returns a integer
     */
    public get dayOccurrence() {
        return this._dayOccurrence;
    };
    /**
     * Sets the dayOccurrence property value. Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs.
     * @param value Value to set for the dayOccurrence property.
     */
    public set dayOccurrence(value: number | undefined) {
        this._dayOccurrence = value;
    };
    /**
     * Gets the dayOfWeek property value. Represents the day of the week when the transition from daylight saving time to standard time.
     * @returns a dayOfWeek
     */
    public get dayOfWeek() {
        return this._dayOfWeek;
    };
    /**
     * Sets the dayOfWeek property value. Represents the day of the week when the transition from daylight saving time to standard time.
     * @param value Value to set for the dayOfWeek property.
     */
    public set dayOfWeek(value: DayOfWeek | undefined) {
        this._dayOfWeek = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dayOccurrence": n => { this.dayOccurrence = n.getNumberValue(); },
            "dayOfWeek": n => { this.dayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek); },
            "month": n => { this.month = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "time": n => { this.time = n.getTimeOnlyValue(); },
            "year": n => { this.year = n.getNumberValue(); },
        };
    };
    /**
     * Gets the month property value. Represents the month of the year when the transition from daylight saving time to standard time occurs.
     * @returns a integer
     */
    public get month() {
        return this._month;
    };
    /**
     * Sets the month property value. Represents the month of the year when the transition from daylight saving time to standard time occurs.
     * @param value Value to set for the month property.
     */
    public set month(value: number | undefined) {
        this._month = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
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
        writer.writeNumberValue("dayOccurrence", this.dayOccurrence);
        writer.writeEnumValue<DayOfWeek>("dayOfWeek", this.dayOfWeek);
        writer.writeNumberValue("month", this.month);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeTimeOnlyValue("time", this.time);
        writer.writeNumberValue("year", this.year);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the time property value. Represents the time of day when the transition from daylight saving time to standard time occurs.
     * @returns a TimeOnly
     */
    public get time() {
        return this._time;
    };
    /**
     * Sets the time property value. Represents the time of day when the transition from daylight saving time to standard time occurs.
     * @param value Value to set for the time property.
     */
    public set time(value: TimeOnly | undefined) {
        this._time = value;
    };
    /**
     * Gets the year property value. Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example, a value of 0 means every year.
     * @returns a integer
     */
    public get year() {
        return this._year;
    };
    /**
     * Sets the year property value. Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example, a value of 0 means every year.
     * @param value Value to set for the year property.
     */
    public set year(value: number | undefined) {
        this._year = value;
    };
}
