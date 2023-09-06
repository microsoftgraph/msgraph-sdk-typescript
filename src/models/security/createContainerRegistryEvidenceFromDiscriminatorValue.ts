import { deserializeIntoContainerRegistryEvidence } from './deserializeIntoContainerRegistryEvidence';
import { type ContainerRegistryEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContainerRegistryEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContainerRegistryEvidence;
}
