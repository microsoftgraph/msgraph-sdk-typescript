import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SubstitutePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The instanceNum property
     */
    instanceNum?: Json | undefined;
    /**
     * The newText property
     */
    newText?: Json | undefined;
    /**
     * The oldText property
     */
    oldText?: Json | undefined;
    /**
     * The text property
     */
    text?: Json | undefined;
}
