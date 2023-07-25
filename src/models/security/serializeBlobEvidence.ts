import {BlobContainerEvidence} from './blobContainerEvidence';
import {BlobEvidence} from './blobEvidence';
import {FileHash} from './fileHash';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeBlobContainerEvidence} from './serializeBlobContainerEvidence';
import {serializeFileHash} from './serializeFileHash';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBlobEvidence(writer: SerializationWriter, blobEvidence: BlobEvidence | undefined = {} as BlobEvidence) : void {
        serializeAlertEvidence(writer, blobEvidence)
        writer.writeObjectValue<BlobContainerEvidence>("blobContainer", blobEvidence.blobContainer, serializeBlobContainerEvidence);
        writer.writeStringValue("etag", blobEvidence.etag);
        writer.writeCollectionOfObjectValues<FileHash>("fileHashes", blobEvidence.fileHashes, serializeFileHash);
        writer.writeStringValue("name", blobEvidence.name);
        writer.writeStringValue("url", blobEvidence.url);
}
