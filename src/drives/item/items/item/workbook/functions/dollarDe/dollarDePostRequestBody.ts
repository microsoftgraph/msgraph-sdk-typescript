import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DollarDePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The fraction property
     */
    fraction?: Json | undefined;
    /**
     * The fractionalDollar property
     */
    fractionalDollar?: Json | undefined;
}
