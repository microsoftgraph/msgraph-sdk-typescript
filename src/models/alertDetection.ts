import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertDetection extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The detectionType property
     */
    detectionType?: string | undefined;
    /**
     * The method property
     */
    method?: string | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
