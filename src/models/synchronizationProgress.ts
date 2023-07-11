import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationProgress extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The numerator of a progress ratio; the number of units of changes already processed.
     */
    completedUnits?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The time of a progress observation as an offset in minutes from UTC.
     */
    progressObservationDateTime?: Date | undefined;
    /**
     * The denominator of a progress ratio; a number of units of changes to be processed to accomplish synchronization.
     */
    totalUnits?: number | undefined;
    /**
     * An optional description of the units.
     */
    units?: string | undefined;
}
