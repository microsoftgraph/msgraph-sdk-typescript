import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface F_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cumulative property
     */
    cumulative?: Json | undefined;
    /**
     * The degFreedom1 property
     */
    degFreedom1?: Json | undefined;
    /**
     * The degFreedom2 property
     */
    degFreedom2?: Json | undefined;
    /**
     * The x property
     */
    x?: Json | undefined;
}
