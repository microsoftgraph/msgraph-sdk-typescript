import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FindBPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The findText property
     */
    findText?: Json | undefined;
    /**
     * The startNum property
     */
    startNum?: Json | undefined;
    /**
     * The withinText property
     */
    withinText?: Json | undefined;
}
