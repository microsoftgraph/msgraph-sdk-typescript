import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UpdateDevicePropertiesPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The addressableUserName property
     */
    addressableUserName?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The groupTag property
     */
    groupTag?: string | undefined;
    /**
     * The userPrincipalName property
     */
    userPrincipalName?: string | undefined;
}
