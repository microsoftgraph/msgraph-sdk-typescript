import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface Expon_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cumulative property
     */
    cumulative?: Json | undefined;
    /**
     * The lambda property
     */
    lambda?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
