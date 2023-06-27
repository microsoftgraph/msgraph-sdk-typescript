import {FileHashType} from './fileHashType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileHash extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
     */
    hashType?: FileHashType | undefined;
    /**
     * Value of the file hash.
     */
    hashValue?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
