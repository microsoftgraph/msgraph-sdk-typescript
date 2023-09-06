import { AppLogDecryptionAlgorithm } from './appLogDecryptionAlgorithm';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AppLogCollectionDownloadDetails extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The appLogDecryptionAlgorithm property
     */
    appLogDecryptionAlgorithm?: AppLogDecryptionAlgorithm | undefined;
    /**
     * Decryption key that used to decrypt the log.
     */
    decryptionKey?: string | undefined;
    /**
     * Download SAS (Shared Access Signature) Url for completed app log request.
     */
    downloadUrl?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
