import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface MirrPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The financeRate property
     */
    financeRate?: Json | undefined;
    /**
     * The reinvestRate property
     */
    reinvestRate?: Json | undefined;
    /**
     * The values property
     */
    values?: Json | undefined;
}
