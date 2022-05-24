
export interface SelfSignedCertificate{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Custom key identifier. */
    customKeyIdentifier?:string | undefined;
    /** The friendly name for the key. */
    displayName?:string | undefined;
    /** The date and time at which the credential expires. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    endDateTime?:Date | undefined;
    /** The value for the key credential. Should be a base-64 encoded value. */
    key?:string | undefined;
    /** The unique identifier (GUID) for the key. */
    keyId?:string | undefined;
    /** The date and time at which the credential becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    startDateTime?:Date | undefined;
    /** The thumbprint value for the key. */
    thumbprint?:string | undefined;
    /** The type of key credential. 'AsymmetricX509Cert'. */
    type?:string | undefined;
    /** A string that describes the purpose for which the key can be used. For example, 'Verify'. */
    usage?:string | undefined;
}
