import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface IntRatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json | undefined;
    /**
     * The investment property
     */
    investment?: Json | undefined;
    /**
     * The maturity property
     */
    maturity?: Json | undefined;
    /**
     * The redemption property
     */
    redemption?: Json | undefined;
    /**
     * The settlement property
     */
    settlement?: Json | undefined;
}
