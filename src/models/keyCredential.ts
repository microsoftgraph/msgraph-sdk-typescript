import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface KeyCredential extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A 40-character binary type that can be used to identify the credential. Optional. When not provided in the payload, defaults to the thumbprint of the certificate.
     */
    customKeyIdentifier?: string | undefined;
    /**
     * Friendly name for the key. Optional.
     */
    displayName?: string | undefined;
    /**
     * The date and time at which the credential expires. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    endDateTime?: Date | undefined;
    /**
     * The certificate's raw data in byte array converted to Base64 string. Returned only on $select for a single object, that is, GET applications/{applicationId}?$select=keyCredentials or GET servicePrincipals/{servicePrincipalId}?$select=keyCredentials; otherwise, it is always null.  From a .cer certificate, you can read the key using the Convert.ToBase64String() method. For more information, see Get the certificate key.
     */
    key?: string | undefined;
    /**
     * The unique identifier (GUID) for the key.
     */
    keyId?: Guid | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    startDateTime?: Date | undefined;
    /**
     * The type of key credential; for example, Symmetric, AsymmetricX509Cert.
     */
    type?: string | undefined;
    /**
     * A string that describes the purpose for which the key can be used; for example, Verify.
     */
    usage?: string | undefined;
}
