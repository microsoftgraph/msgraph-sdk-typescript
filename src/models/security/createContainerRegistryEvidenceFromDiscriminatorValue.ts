import {deserializeIntoContainerRegistryEvidence} from './deserializeIntoContainerRegistryEvidence';
import {ContainerRegistryEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContainerRegistryEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContainerRegistryEvidence;
}
