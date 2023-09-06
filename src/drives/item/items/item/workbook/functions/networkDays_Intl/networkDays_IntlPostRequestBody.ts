import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface NetworkDays_IntlPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endDate property
     */
    endDate?: Json | undefined;
    /**
     * The holidays property
     */
    holidays?: Json | undefined;
    /**
     * The startDate property
     */
    startDate?: Json | undefined;
    /**
     * The weekend property
     */
    weekend?: Json | undefined;
}
