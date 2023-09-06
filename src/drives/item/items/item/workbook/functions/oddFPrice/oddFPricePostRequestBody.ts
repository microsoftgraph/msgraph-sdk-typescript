import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface OddFPricePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json | undefined;
    /**
     * The firstCoupon property
     */
    firstCoupon?: Json | undefined;
    /**
     * The frequency property
     */
    frequency?: Json | undefined;
    /**
     * The issue property
     */
    issue?: Json | undefined;
    /**
     * The maturity property
     */
    maturity?: Json | undefined;
    /**
     * The rate property
     */
    rate?: Json | undefined;
    /**
     * The redemption property
     */
    redemption?: Json | undefined;
    /**
     * The settlement property
     */
    settlement?: Json | undefined;
    /**
     * The yld property
     */
    yld?: Json | undefined;
}
