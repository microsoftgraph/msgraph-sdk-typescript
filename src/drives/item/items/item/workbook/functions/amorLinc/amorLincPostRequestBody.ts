import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AmorLincPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The basis property
     */
    basis?: Json | undefined;
    /**
     * The cost property
     */
    cost?: Json | undefined;
    /**
     * The datePurchased property
     */
    datePurchased?: Json | undefined;
    /**
     * The firstPeriod property
     */
    firstPeriod?: Json | undefined;
    /**
     * The period property
     */
    period?: Json | undefined;
    /**
     * The rate property
     */
    rate?: Json | undefined;
    /**
     * The salvage property
     */
    salvage?: Json | undefined;
}
