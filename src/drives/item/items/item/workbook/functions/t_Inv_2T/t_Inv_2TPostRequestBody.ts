import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface T_Inv_2TPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The degFreedom property
     */
    degFreedom?: Json | undefined;
    /**
     * The probability property
     */
    probability?: Json | undefined;
}
