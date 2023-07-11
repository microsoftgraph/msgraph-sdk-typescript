import {QuarantineReason} from './quarantineReason';
import {SynchronizationError} from './synchronizationError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationQuarantine extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Date and time when the quarantine was last evaluated and imposed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    currentBegan?: Date | undefined;
    /**
     * Describes the error(s) that occurred when putting the synchronization job into quarantine.
     */
    errorEscaped?: SynchronizationError | undefined;
    /**
     * Date and time when the next attempt to re-evaluate the quarantine will be made. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    nextAttempt?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The reason property
     */
    reason?: QuarantineReason | undefined;
    /**
     * Date and time when the quarantine was first imposed in this series (a series starts when a quarantine is first imposed, and is reset as soon as the quarantine is lifted). The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    seriesBegan?: Date | undefined;
    /**
     * Number of times in this series the quarantine was re-evaluated and left in effect (a series starts when quarantine is first imposed, and is reset as soon as quarantine is lifted).
     */
    seriesCount?: number | undefined;
}
