import { deserializeIntoFileEvidence } from './deserializeIntoFileEvidence';
import { type FileEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileEvidence;
}
