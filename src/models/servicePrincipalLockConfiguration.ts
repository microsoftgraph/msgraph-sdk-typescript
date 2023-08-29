import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalLockConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Enables locking all sensitive properties. The sensitive properties are keyCredentials, passwordCredentials, and tokenEncryptionKeyId.
     */
    allProperties?: boolean | undefined;
    /**
     * Locks the keyCredentials and passwordCredentials properties for modification where credential usage type is Sign.
     */
    credentialsWithUsageSign?: boolean | undefined;
    /**
     * Locks the keyCredentials and passwordCredentials properties for modification where credential usage type is Verify. This locks OAuth service principals.
     */
    credentialsWithUsageVerify?: boolean | undefined;
    /**
     * Enables or disables service principal lock configuration. To allow the sensitive properties to be updated, update this property to false to disable the lock on the service principal.
     */
    isEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Locks the tokenEncryptionKeyId property for modification on the service principal.
     */
    tokenEncryptionKeyId?: boolean | undefined;
}
