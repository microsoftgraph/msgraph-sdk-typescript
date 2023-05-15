import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BasePostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The minLength property */
    minLength?: Json | undefined;
    /** The number property */
    number?: Json | undefined;
    /** The radix property */
    radix?: Json | undefined;
}
