import {QuarantineReason} from './quarantineReason';
import {SynchronizationError} from './synchronizationError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationQuarantine extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The currentBegan property */
    currentBegan?: Date | undefined;
    /** The error property */
    errorEscaped?: SynchronizationError | undefined;
    /** The nextAttempt property */
    nextAttempt?: Date | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The reason property */
    reason?: QuarantineReason | undefined;
    /** The seriesBegan property */
    seriesBegan?: Date | undefined;
    /** The seriesCount property */
    seriesCount?: number | undefined;
}
