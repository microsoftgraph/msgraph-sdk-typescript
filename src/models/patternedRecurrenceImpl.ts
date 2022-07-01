import {createRecurrencePatternFromDiscriminatorValue} from './createRecurrencePatternFromDiscriminatorValue';
import {createRecurrenceRangeFromDiscriminatorValue} from './createRecurrenceRangeFromDiscriminatorValue';
import {RecurrencePatternImpl, RecurrenceRangeImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrenceRange} from './recurrenceRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PatternedRecurrenceImpl implements PatternedRecurrence {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The frequency of an event. Do not specify for a one-time access review.  For access reviews: Do not specify this property for a one-time access review.   Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported. */
    private _pattern?: RecurrencePattern | undefined;
    /** The duration of an event. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new patternedRecurrence and sets the default values.
     * @param patternedRecurrenceParameterValue 
     */
    public constructor(patternedRecurrenceParameterValue?: PatternedRecurrence | undefined) {
        this._additionalData = patternedRecurrenceParameterValue?.additionalData ? patternedRecurrenceParameterValue?.additionalData! : {};
        this._pattern = patternedRecurrenceParameterValue?.pattern;
        this._range = patternedRecurrenceParameterValue?.range;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "pattern": n => { this.pattern = n.getObjectValue<RecurrencePatternImpl>(createRecurrencePatternFromDiscriminatorValue); },
            "range": n => { this.range = n.getObjectValue<RecurrenceRangeImpl>(createRecurrenceRangeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pattern property value. The frequency of an event. Do not specify for a one-time access review.  For access reviews: Do not specify this property for a one-time access review.   Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @returns a RecurrencePatternInterface
     */
    public get pattern() {
        return this._pattern;
    };
    /**
     * Sets the pattern property value. The frequency of an event. Do not specify for a one-time access review.  For access reviews: Do not specify this property for a one-time access review.   Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @param value Value to set for the pattern property.
     */
    public set pattern(value: RecurrencePattern | undefined) {
        if(value) {
            this._pattern = value instanceof RecurrencePatternImpl? value : new RecurrencePatternImpl(value);
        }
    };
    /**
     * Gets the range property value. The duration of an event.
     * @returns a RecurrenceRangeInterface
     */
    public get range() {
        return this._range;
    };
    /**
     * Sets the range property value. The duration of an event.
     * @param value Value to set for the range property.
     */
    public set range(value: RecurrenceRange | undefined) {
        if(value) {
            this._range = value instanceof RecurrenceRangeImpl? value : new RecurrenceRangeImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.pattern){
            writer.writeObjectValue<RecurrencePatternImpl>("pattern", (!this.pattern || this.pattern instanceof RecurrencePatternImpl? this.pattern : new RecurrencePatternImpl(this.pattern)));
        }
        if(this.range){
            writer.writeObjectValue<RecurrenceRangeImpl>("range", (!this.range || this.range instanceof RecurrenceRangeImpl? this.range : new RecurrenceRangeImpl(this.range)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
