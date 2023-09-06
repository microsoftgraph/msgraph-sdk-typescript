import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AccrIntPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json | undefined;
    /**
     * The calcMethod property
     */
    calcMethod?: Json | undefined;
    /**
     * The firstInterest property
     */
    firstInterest?: Json | undefined;
    /**
     * The frequency property
     */
    frequency?: Json | undefined;
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
