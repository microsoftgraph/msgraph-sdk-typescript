import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Binom_Dist_RangePostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The numberS property */
    numberS?: Json | undefined;
    /** The numberS2 property */
    numberS2?: Json | undefined;
    /** The probabilityS property */
    probabilityS?: Json | undefined;
    /** The trials property */
    trials?: Json | undefined;
}
