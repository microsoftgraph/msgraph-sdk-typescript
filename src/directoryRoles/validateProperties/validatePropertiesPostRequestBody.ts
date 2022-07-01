import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ValidatePropertiesPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The displayName property */
    displayName?: string | undefined;
    /** The entityType property */
    entityType?: string | undefined;
    /** The mailNickname property */
    mailNickname?: string | undefined;
    /** The onBehalfOfUserId property */
    onBehalfOfUserId?: string | undefined;
}
