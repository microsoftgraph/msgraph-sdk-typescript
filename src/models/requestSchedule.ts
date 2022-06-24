import {ExpirationPattern} from './expirationPattern';
import {PatternedRecurrence} from './patternedRecurrence';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RequestSchedule extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** In entitlement management, when the access should expire. */
    expiration?: ExpirationPattern | undefined;
    /** For recurring access, or eligible or active assignment. This property is currently unsupported in both PIM and entitlement management. */
    recurrence?: PatternedRecurrence | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. In PIM, when the  eligible or active assignment becomes active. */
    startDateTime?: Date | undefined;
}
