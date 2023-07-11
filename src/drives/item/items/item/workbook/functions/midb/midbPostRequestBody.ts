import {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MidbPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The numBytes property
     */
    numBytes?: Json | undefined;
    /**
     * The startNum property
     */
    startNum?: Json | undefined;
    /**
     * The text property
     */
    text?: Json | undefined;
}
