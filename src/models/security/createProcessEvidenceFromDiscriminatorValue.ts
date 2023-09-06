import { deserializeIntoProcessEvidence } from './deserializeIntoProcessEvidence';
import { type ProcessEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProcessEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProcessEvidence;
}
