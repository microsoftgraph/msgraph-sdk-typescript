import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChiSq_Dist_RTPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The degFreedom property
     */
    degFreedom?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
