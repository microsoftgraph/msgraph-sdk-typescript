import {createRecurrencePatternFromDiscriminatorValue} from './createRecurrencePatternFromDiscriminatorValue';
import {createRecurrenceRangeFromDiscriminatorValue} from './createRecurrenceRangeFromDiscriminatorValue';
import {RecurrencePatternImpl, RecurrenceRangeImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrenceRange} from './recurrenceRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PatternedRecurrenceImpl implements AdditionalDataHolder, Parsable, PatternedRecurrence {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The frequency of an event. Do not specify for a one-time access review.  For access reviews: Do not specify this property for a one-time access review.   Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported. */
    public pattern?: RecurrencePattern | undefined;
    /** The duration of an event. */
    public range?: RecurrenceRange | undefined;
    /**
     * Instantiates a new patternedRecurrence and sets the default values.
     * @param patternedRecurrenceParameterValue 
     */
    public constructor(patternedRecurrenceParameterValue?: PatternedRecurrence | undefined) {
        this.additionalData = patternedRecurrenceParameterValue?.additionalData ? patternedRecurrenceParameterValue?.additionalData! : {}
        this.pattern = patternedRecurrenceParameterValue?.pattern ;
        this.range = patternedRecurrenceParameterValue?.range ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.pattern){
        writer.writeObjectValue<RecurrencePatternImpl>("pattern", new RecurrencePatternImpl(this.pattern));
        }
        if(this.range){
        writer.writeObjectValue<RecurrenceRangeImpl>("range", new RecurrenceRangeImpl(this.range));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
