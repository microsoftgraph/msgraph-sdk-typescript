import { deserializeIntoKubernetesControllerEvidence } from './deserializeIntoKubernetesControllerEvidence';
import { type KubernetesControllerEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesControllerEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesControllerEvidence;
}
