import {PatternedRecurrence} from './patternedRecurrence';
import {TimeRange} from './timeRange';

export interface ShiftAvailability{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Specifies the pattern for recurrence */
    recurrence?:PatternedRecurrence | undefined;
    /** The time slot(s) preferred by the user. */
    timeSlots?:TimeRange[] | undefined;
    /** Specifies the time zone for the indicated time. */
    timeZone?:string | undefined;
}
