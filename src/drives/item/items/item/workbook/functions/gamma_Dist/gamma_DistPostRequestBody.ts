import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Gamma_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The alpha property
     */
    alpha?: Json | undefined;
    /**
     * The beta property
     */
    beta?: Json | undefined;
    /**
     * The cumulative property
     */
    cumulative?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
