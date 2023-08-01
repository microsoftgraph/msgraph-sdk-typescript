import type {AzureResourceEvidence} from './azureResourceEvidence';
import type {BlobContainerEvidence} from './blobContainerEvidence';
import {createAzureResourceEvidenceFromDiscriminatorValue} from './createAzureResourceEvidenceFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {serializeAzureResourceEvidence} from './serializeAzureResourceEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBlobContainerEvidence(blobContainerEvidence: BlobContainerEvidence | undefined = {} as BlobContainerEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(blobContainerEvidence),
        "name": n => { blobContainerEvidence.name = n.getStringValue(); },
        "storageResource": n => { blobContainerEvidence.storageResource = n.getObjectValue<AzureResourceEvidence>(createAzureResourceEvidenceFromDiscriminatorValue); },
        "url": n => { blobContainerEvidence.url = n.getStringValue(); },
    }
}
