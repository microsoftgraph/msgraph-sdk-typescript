import { type AzureResourceEvidence } from './azureResourceEvidence';
import { type BlobContainerEvidence } from './blobContainerEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { serializeAzureResourceEvidence } from './serializeAzureResourceEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBlobContainerEvidence(writer: SerializationWriter, blobContainerEvidence: BlobContainerEvidence | undefined = {} as BlobContainerEvidence) : void {
        serializeAlertEvidence(writer, blobContainerEvidence)
        writer.writeStringValue("name", blobContainerEvidence.name);
        writer.writeObjectValue<AzureResourceEvidence>("storageResource", blobContainerEvidence.storageResource, serializeAzureResourceEvidence);
        writer.writeStringValue("url", blobContainerEvidence.url);
}
