import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Identity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The display name of the identity. This property is read-only. */
    displayName?: string | undefined;
    /** The identifier of the identity. This property is read-only. */
    id?: string | undefined;
}
