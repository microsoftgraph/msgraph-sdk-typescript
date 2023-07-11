import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileDetails extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the file.
     */
    fileName?: string | undefined;
    /**
     * The file path (location) of the file instance.
     */
    filePath?: string | undefined;
    /**
     * The publisher of the file.
     */
    filePublisher?: string | undefined;
    /**
     * The size of the file in bytes.
     */
    fileSize?: number | undefined;
    /**
     * The certificate authority (CA) that issued the certificate.
     */
    issuer?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The Sha1 cryptographic hash of the file content.
     */
    sha1?: string | undefined;
    /**
     * The Sha256 cryptographic hash of the file content.
     */
    sha256?: string | undefined;
    /**
     * The signer of the signed file.
     */
    signer?: string | undefined;
}
