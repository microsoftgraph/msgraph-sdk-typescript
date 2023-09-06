import { type Json } from '../../../../../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The index property
     */
    index?: number | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The values property
     */
    values?: Json | undefined;
}
