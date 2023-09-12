import { type BlobContainerEvidence } from './blobContainerEvidence';
import { type BlobEvidence } from './blobEvidence';
import { type FileHash } from './fileHash';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { serializeBlobContainerEvidence } from './serializeBlobContainerEvidence';
import { serializeFileHash } from './serializeFileHash';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBlobEvidence(writer: SerializationWriter, blobEvidence: BlobEvidence | undefined = {} as BlobEvidence) : void {
        serializeAlertEvidence(writer, blobEvidence)
        writer.writeObjectValue<BlobContainerEvidence>("blobContainer", blobEvidence.blobContainer, serializeBlobContainerEvidence);
        writer.writeStringValue("etag", blobEvidence.etag);
        writer.writeCollectionOfObjectValues<FileHash>("fileHashes", blobEvidence.fileHashes, serializeFileHash);
        writer.writeStringValue("name", blobEvidence.name);
        writer.writeStringValue("url", blobEvidence.url);
}
