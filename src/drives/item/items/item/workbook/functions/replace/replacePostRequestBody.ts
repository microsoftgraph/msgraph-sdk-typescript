import type {Json} from '../../../../../../../models/json';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ReplacePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The newText property
     */
    newText?: Json | undefined;
    /**
     * The numChars property
     */
    numChars?: Json | undefined;
    /**
     * The oldText property
     */
    oldText?: Json | undefined;
    /**
     * The startNum property
     */
    startNum?: Json | undefined;
}
