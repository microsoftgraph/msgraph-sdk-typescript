import { deserializeIntoAzureResourceEvidence } from './deserializeIntoAzureResourceEvidence';
import { type AzureResourceEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAzureResourceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAzureResourceEvidence;
}
