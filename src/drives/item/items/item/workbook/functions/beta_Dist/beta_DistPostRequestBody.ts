import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface Beta_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The A property
     */
    a?: Json | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The alpha property
     */
    alpha?: Json | undefined;
    /**
     * The B property
     */
    b?: Json | undefined;
    /**
     * The beta property
     */
    beta?: Json | undefined;
    /**
     * The cumulative property
     */
    cumulative?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
