import {ExpirationPattern} from './expirationPattern';
import {PatternedRecurrence} from './patternedRecurrence';

export interface RequestSchedule{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** When the access should expire. */
    expiration?:ExpirationPattern | undefined;
    /** For recurring access. Not used at present. */
    recurrence?:PatternedRecurrence | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    startDateTime?:Date | undefined;
}
