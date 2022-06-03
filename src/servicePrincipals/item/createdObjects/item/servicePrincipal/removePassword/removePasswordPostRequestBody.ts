import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RemovePasswordPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The keyId property */
    keyId?: string | undefined;
}
