import {AzureResourceEvidence} from './azureResourceEvidence';
import {BlobContainerEvidence} from './blobContainerEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeAzureResourceEvidence} from './serializeAzureResourceEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBlobContainerEvidence(writer: SerializationWriter, blobContainerEvidence: BlobContainerEvidence | undefined = {} as BlobContainerEvidence) : void {
        serializeAlertEvidence(writer, blobContainerEvidence)
        writer.writeStringValue("name", blobContainerEvidence.name);
        writer.writeObjectValue<AzureResourceEvidence>("storageResource", blobContainerEvidence.storageResource, serializeAzureResourceEvidence);
        writer.writeStringValue("url", blobContainerEvidence.url);
}
