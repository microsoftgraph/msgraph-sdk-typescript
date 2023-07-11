import {PatternedRecurrence} from './patternedRecurrence';
import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftAvailability extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies the pattern for recurrence
     */
    recurrence?: PatternedRecurrence | undefined;
    /**
     * The time slot(s) preferred by the user.
     */
    timeSlots?: TimeRange[] | undefined;
    /**
     * Specifies the time zone for the indicated time.
     */
    timeZone?: string | undefined;
}
