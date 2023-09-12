import { deserializeIntoCloudApplicationEvidence } from './deserializeIntoCloudApplicationEvidence';
import { type CloudApplicationEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCloudApplicationEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCloudApplicationEvidence;
}
