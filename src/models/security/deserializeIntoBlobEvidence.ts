import { type BlobContainerEvidence } from './blobContainerEvidence';
import { type BlobEvidence } from './blobEvidence';
import { createBlobContainerEvidenceFromDiscriminatorValue } from './createBlobContainerEvidenceFromDiscriminatorValue';
import { createFileHashFromDiscriminatorValue } from './createFileHashFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type FileHash } from './fileHash';
import { serializeBlobContainerEvidence } from './serializeBlobContainerEvidence';
import { serializeFileHash } from './serializeFileHash';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBlobEvidence(blobEvidence: BlobEvidence | undefined = {} as BlobEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(blobEvidence),
        "blobContainer": n => { blobEvidence.blobContainer = n.getObjectValue<BlobContainerEvidence>(createBlobContainerEvidenceFromDiscriminatorValue); },
        "etag": n => { blobEvidence.etag = n.getStringValue(); },
        "fileHashes": n => { blobEvidence.fileHashes = n.getCollectionOfObjectValues<FileHash>(createFileHashFromDiscriminatorValue); },
        "name": n => { blobEvidence.name = n.getStringValue(); },
        "url": n => { blobEvidence.url = n.getStringValue(); },
    }
}
