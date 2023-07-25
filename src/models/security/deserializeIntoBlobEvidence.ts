import {BlobContainerEvidence} from './blobContainerEvidence';
import {BlobEvidence} from './blobEvidence';
import {createBlobContainerEvidenceFromDiscriminatorValue} from './createBlobContainerEvidenceFromDiscriminatorValue';
import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {FileHash} from './fileHash';
import {serializeBlobContainerEvidence} from './serializeBlobContainerEvidence';
import {serializeFileHash} from './serializeFileHash';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
