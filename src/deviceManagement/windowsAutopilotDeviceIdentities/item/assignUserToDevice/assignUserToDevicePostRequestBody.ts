import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignUserToDevicePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The addressableUserName property */
    addressableUserName?: string | undefined;
    /** The userPrincipalName property */
    userPrincipalName?: string | undefined;
}
