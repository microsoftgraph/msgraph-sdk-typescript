import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SlnPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The cost property */
    cost?: Json | undefined;
    /** The life property */
    life?: Json | undefined;
    /** The salvage property */
    salvage?: Json | undefined;
}
