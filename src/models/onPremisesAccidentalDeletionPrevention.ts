import {OnPremisesDirectorySynchronizationDeletionPreventionType} from './onPremisesDirectorySynchronizationDeletionPreventionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesAccidentalDeletionPrevention extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Threshold value which triggers accidental deletion prevention. The threshold is either an absolute number of objects or a percentage number of objects.
     */
    alertThreshold?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The status of the accidental deletion prevention feature. The possible values are: disabled, enabledForCount, enabledForPercentage, unknownFutureValue.
     */
    synchronizationPreventionType?: OnPremisesDirectorySynchronizationDeletionPreventionType | undefined;
}
