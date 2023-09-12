import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AccrIntMPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json | undefined;
    /**
     * The issue property
     */
    issue?: Json | undefined;
    /**
     * The par property
     */
    par?: Json | undefined;
    /**
     * The rate property
     */
    rate?: Json | undefined;
    /**
     * The settlement property
     */
    settlement?: Json | undefined;
}
