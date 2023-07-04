import {OnPremisesAccidentalDeletionPrevention} from './onPremisesAccidentalDeletionPrevention';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesDirectorySynchronizationConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Contains the accidental deletion prevention configuration for a tenant.
     */
    accidentalDeletionPrevention?: OnPremisesAccidentalDeletionPrevention | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
