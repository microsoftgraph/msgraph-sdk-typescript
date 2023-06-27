import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateAuthority extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Required. The base64 encoded string representing the public certificate.
     */
    certificate?: string | undefined;
    /**
     * The URL of the certificate revocation list.
     */
    certificateRevocationListUrl?: string | undefined;
    /**
     * The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
     */
    deltaCertificateRevocationListUrl?: string | undefined;
    /**
     * Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
     */
    isRootAuthority?: boolean | undefined;
    /**
     * The issuer of the certificate, calculated from the certificate value. Read-only.
     */
    issuer?: string | undefined;
    /**
     * The subject key identifier of the certificate, calculated from the certificate value. Read-only.
     */
    issuerSki?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
