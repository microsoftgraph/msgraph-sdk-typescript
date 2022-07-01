import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FavoritePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The messageIds property */
    messageIds?: string[] | undefined;
}
