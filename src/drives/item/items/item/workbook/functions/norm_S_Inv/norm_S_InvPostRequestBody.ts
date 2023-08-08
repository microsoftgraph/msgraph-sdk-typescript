import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Norm_S_InvPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The probability property
     */
    probability?: Json | undefined;
}
