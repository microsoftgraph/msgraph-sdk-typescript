import {deserializeIntoBlobContainerEvidence} from './deserializeIntoBlobContainerEvidence';
import {BlobContainerEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBlobContainerEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBlobContainerEvidence;
}
