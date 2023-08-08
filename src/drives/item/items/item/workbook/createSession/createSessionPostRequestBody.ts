import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateSessionPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The persistChanges property
     */
    persistChanges?: boolean | undefined;
}
