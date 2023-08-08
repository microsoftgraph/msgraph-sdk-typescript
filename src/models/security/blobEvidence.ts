import type {AlertEvidence} from './alertEvidence';
import type {BlobContainerEvidence} from './blobContainerEvidence';
import type {FileHash} from './fileHash';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BlobEvidence extends AlertEvidence, Parsable {
    /**
     * The container which the blob belongs to.
     */
    blobContainer?: BlobContainerEvidence | undefined;
    /**
     * The Etag associated with this blob.
     */
    etag?: string | undefined;
    /**
     * The file hashes associated with this blob.
     */
    fileHashes?: FileHash[] | undefined;
    /**
     * The name of the blob.
     */
    name?: string | undefined;
    /**
     * The full URL representation of the blob.
     */
    url?: string | undefined;
}
