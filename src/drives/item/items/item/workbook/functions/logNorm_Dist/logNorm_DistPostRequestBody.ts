import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LogNorm_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cumulative property
     */
    cumulative?: Json | undefined;
    /**
     * The mean property
     */
    mean?: Json | undefined;
    /**
     * The standardDev property
     */
    standardDev?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
