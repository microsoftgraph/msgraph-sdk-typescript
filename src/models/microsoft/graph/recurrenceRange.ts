import {RecurrenceRangeType} from './recurrenceRangeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecurrenceRange implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate.  */
    private _endDate?: string | undefined;
    /** The number of times to repeat the event. Required and must be positive if type is numbered.  */
    private _numberOfOccurrences?: number | undefined;
    /** Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.  */
    private _recurrenceTimeZone?: string | undefined;
    /** The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required.  */
    private _startDate?: string | undefined;
    /** The recurrence range. Possible values are: endDate, noEnd, numbered. Required.  */
    private _type?: RecurrenceRangeType | undefined;
    /**
     * Instantiates a new recurrenceRange and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the endDate property value. The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate.
     * @returns a string
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Gets the numberOfOccurrences property value. The number of times to repeat the event. Required and must be positive if type is numbered.
     * @returns a integer
     */
    public get numberOfOccurrences() {
        return this._numberOfOccurrences;
    };
    /**
     * Gets the recurrenceTimeZone property value. Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.
     * @returns a string
     */
    public get recurrenceTimeZone() {
        return this._recurrenceTimeZone;
    };
    /**
     * Gets the startDate property value. The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required.
     * @returns a string
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Gets the type property value. The recurrence range. Possible values are: endDate, noEnd, numbered. Required.
     * @returns a recurrenceRangeType
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endDate", (o, n) => { (o as unknown as RecurrenceRange).endDate = n.getStringValue(); }],
            ["numberOfOccurrences", (o, n) => { (o as unknown as RecurrenceRange).numberOfOccurrences = n.getNumberValue(); }],
            ["recurrenceTimeZone", (o, n) => { (o as unknown as RecurrenceRange).recurrenceTimeZone = n.getStringValue(); }],
            ["startDate", (o, n) => { (o as unknown as RecurrenceRange).startDate = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as RecurrenceRange).type = n.getEnumValue<RecurrenceRangeType>(RecurrenceRangeType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("endDate", this.endDate);
        writer.writeNumberValue("numberOfOccurrences", this.numberOfOccurrences);
        writer.writeStringValue("recurrenceTimeZone", this.recurrenceTimeZone);
        writer.writeStringValue("startDate", this.startDate);
        writer.writeEnumValue<RecurrenceRangeType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the endDate property value. The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate.
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: string | undefined) {
        this._endDate = value;
    };
    /**
     * Sets the numberOfOccurrences property value. The number of times to repeat the event. Required and must be positive if type is numbered.
     * @param value Value to set for the numberOfOccurrences property.
     */
    public set numberOfOccurrences(value: number | undefined) {
        this._numberOfOccurrences = value;
    };
    /**
     * Sets the recurrenceTimeZone property value. Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.
     * @param value Value to set for the recurrenceTimeZone property.
     */
    public set recurrenceTimeZone(value: string | undefined) {
        this._recurrenceTimeZone = value;
    };
    /**
     * Sets the startDate property value. The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required.
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: string | undefined) {
        this._startDate = value;
    };
    /**
     * Sets the type property value. The recurrence range. Possible values are: endDate, noEnd, numbered. Required.
     * @param value Value to set for the type property.
     */
    public set type(value: RecurrenceRangeType | undefined) {
        this._type = value;
    };
}
