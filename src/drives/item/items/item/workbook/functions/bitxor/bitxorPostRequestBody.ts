import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BitxorPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number1 property
     */
    number1?: Json | undefined;
    /**
     * The number2 property
     */
    number2?: Json | undefined;
}
