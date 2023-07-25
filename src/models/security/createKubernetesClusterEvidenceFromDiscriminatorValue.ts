import {deserializeIntoKubernetesClusterEvidence} from './deserializeIntoKubernetesClusterEvidence';
import {KubernetesClusterEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKubernetesClusterEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesClusterEvidence;
}
