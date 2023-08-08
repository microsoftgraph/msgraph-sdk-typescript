import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PreviewPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The page property
     */
    page?: string | undefined;
    /**
     * The zoom property
     */
    zoom?: number | undefined;
}
