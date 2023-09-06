import { type Json } from '../../../../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SetDataPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The seriesBy property
     */
    seriesBy?: string | undefined;
    /**
     * The sourceData property
     */
    sourceData?: Json | undefined;
}
