import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SumIfPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The criteria property
     */
    criteria?: Json | undefined;
    /**
     * The range property
     */
    range?: Json | undefined;
    /**
     * The sumRange property
     */
    sumRange?: Json | undefined;
}
