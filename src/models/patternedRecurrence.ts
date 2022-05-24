import {RecurrencePattern} from './recurrencePattern';
import {RecurrenceRange} from './recurrenceRange';

export interface PatternedRecurrence{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The frequency of an event. Do not specify for a one-time access review.  For access reviews: Do not specify this property for a one-time access review.   Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported. */
    pattern?:RecurrencePattern | undefined;
    /** The duration of an event. */
    range?:RecurrenceRange | undefined;
}
