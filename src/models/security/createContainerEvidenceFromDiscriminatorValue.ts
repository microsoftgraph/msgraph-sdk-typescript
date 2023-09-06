import { deserializeIntoContainerEvidence } from './deserializeIntoContainerEvidence';
import { type ContainerEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContainerEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContainerEvidence;
}
