import { type Site } from '../../models/site';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface RemovePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: Site[] | undefined;
}
