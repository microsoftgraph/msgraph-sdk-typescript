import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface XnpvPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The dates property */
    dates?: Json | undefined;
    /** The rate property */
    rate?: Json | undefined;
    /** The values property */
    values?: Json | undefined;
}
