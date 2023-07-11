import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualitySelectedColumnModel extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * ID of the selected level for this quality.
     */
    columnId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * ID of the associated quality.
     */
    qualityId?: string | undefined;
}
