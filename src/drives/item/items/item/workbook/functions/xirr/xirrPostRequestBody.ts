import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface XirrPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The dates property
     */
    dates?: Json | undefined;
    /**
     * The guess property
     */
    guess?: Json | undefined;
    /**
     * The values property
     */
    values?: Json | undefined;
}
