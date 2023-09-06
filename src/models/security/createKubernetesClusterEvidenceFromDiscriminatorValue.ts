import { deserializeIntoKubernetesClusterEvidence } from './deserializeIntoKubernetesClusterEvidence';
import { type KubernetesClusterEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesClusterEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesClusterEvidence;
}
