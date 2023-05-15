import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Binom_InvPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The alpha property */
    alpha?: Json | undefined;
    /** The probabilityS property */
    probabilityS?: Json | undefined;
    /** The trials property */
    trials?: Json | undefined;
}
