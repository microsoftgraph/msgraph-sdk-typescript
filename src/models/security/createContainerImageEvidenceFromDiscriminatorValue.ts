import { deserializeIntoContainerImageEvidence } from './deserializeIntoContainerImageEvidence';
import { type ContainerImageEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContainerImageEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContainerImageEvidence;
}
