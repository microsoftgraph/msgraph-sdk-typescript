import {deserializeIntoAzureResourceEvidence} from './deserializeIntoAzureResourceEvidence';
import {AzureResourceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAzureResourceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAzureResourceEvidence;
}
