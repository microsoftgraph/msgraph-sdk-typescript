import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface Floor_MathPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mode property
     */
    mode?: Json | undefined;
    /**
     * The number property
     */
    number?: Json | undefined;
    /**
     * The significance property
     */
    significance?: Json | undefined;
}
