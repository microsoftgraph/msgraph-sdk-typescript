import { deserializeIntoBlobEvidence } from './deserializeIntoBlobEvidence';
import { type BlobEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBlobEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBlobEvidence;
}
