import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export interface RemovePasswordPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The keyId property
     */
    keyId?: Guid | undefined;
}
