import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Binom_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cumulative property
     */
    cumulative?: Json | undefined;
    /**
     * The numberS property
     */
    numberS?: Json | undefined;
    /**
     * The probabilityS property
     */
    probabilityS?: Json | undefined;
    /**
     * The trials property
     */
    trials?: Json | undefined;
}
