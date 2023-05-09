import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FixedPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The decimals property */
    decimals?: Json | undefined;
    /** The noCommas property */
    noCommas?: Json | undefined;
    /** The number property */
    number?: Json | undefined;
}
