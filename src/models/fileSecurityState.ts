import {FileHash} from './fileHash';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileSecurityState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Complex type containing file hashes (cryptographic and location-sensitive).
     */
    fileHash?: FileHash | undefined;
    /**
     * File name (without path).
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Full file path of the file/imageFile.
     */
    path?: string | undefined;
    /**
     * Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     */
    riskScore?: string | undefined;
}
