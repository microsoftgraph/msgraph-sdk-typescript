import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplyTopItemsFilterPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The count property
     */
    count?: number | undefined;
}
