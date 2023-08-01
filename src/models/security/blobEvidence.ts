import type {AlertEvidence} from './alertEvidence';
import type {BlobContainerEvidence} from './blobContainerEvidence';
import type {FileHash} from './fileHash';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BlobEvidence extends AlertEvidence, Parsable {
    /**
     * The blobContainer property
     */
    blobContainer?: BlobContainerEvidence | undefined;
    /**
     * The etag property
     */
    etag?: string | undefined;
    /**
     * The fileHashes property
     */
    fileHashes?: FileHash[] | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The url property
     */
    url?: string | undefined;
}
