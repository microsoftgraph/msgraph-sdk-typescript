import {createRecurrencePatternFromDiscriminatorValue} from './createRecurrencePatternFromDiscriminatorValue';
import {createRecurrenceRangeFromDiscriminatorValue} from './createRecurrenceRangeFromDiscriminatorValue';
import {RecurrencePattern, RecurrenceRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PatternedRecurrence implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.  */
    private _pattern?: RecurrencePattern | undefined;
    /** The duration of an event.  */
    private _range?: RecurrenceRange | undefined;
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
     * Instantiates a new patternedRecurrence and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "pattern": (o, n) => { (o as unknown as PatternedRecurrence).pattern = n.getObjectValue<RecurrencePattern>(createRecurrencePatternFromDiscriminatorValue); },
            "range": (o, n) => { (o as unknown as PatternedRecurrence).range = n.getObjectValue<RecurrenceRange>(createRecurrenceRangeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pattern property value. The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @returns a recurrencePattern
     */
    public get pattern() {
        return this._pattern;
    };
    /**
     * Sets the pattern property value. The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @param value Value to set for the pattern property.
     */
    public set pattern(value: RecurrencePattern | undefined) {
        this._pattern = value;
    };
    /**
     * Gets the range property value. The duration of an event.
     * @returns a recurrenceRange
     */
    public get range() {
        return this._range;
    };
    /**
     * Sets the range property value. The duration of an event.
     * @param value Value to set for the range property.
     */
    public set range(value: RecurrenceRange | undefined) {
        this._range = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<RecurrencePattern>("pattern", this.pattern);
        writer.writeObjectValue<RecurrenceRange>("range", this.range);
        writer.writeAdditionalData(this.additionalData);
    };
}
