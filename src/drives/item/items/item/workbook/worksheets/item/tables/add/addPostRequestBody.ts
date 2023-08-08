import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The address property
     */
    address?: string | undefined;
    /**
     * The hasHeaders property
     */
    hasHeaders?: boolean | undefined;
}
