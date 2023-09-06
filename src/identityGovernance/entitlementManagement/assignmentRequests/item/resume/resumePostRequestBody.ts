import { type CustomExtensionData } from '../../../../../models/customExtensionData';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ResumePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The data property
     */
    data?: CustomExtensionData | undefined;
    /**
     * The source property
     */
    source?: string | undefined;
    /**
     * The type property
     */
    type?: string | undefined;
}
