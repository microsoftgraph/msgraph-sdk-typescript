import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationProgress extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The completedUnits property */
    completedUnits?: number | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The progressObservationDateTime property */
    progressObservationDateTime?: Date | undefined;
    /** The totalUnits property */
    totalUnits?: number | undefined;
    /** The units property */
    units?: string | undefined;
}
