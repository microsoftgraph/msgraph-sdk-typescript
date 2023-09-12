import { deserializeIntoKubernetesServiceEvidence } from './deserializeIntoKubernetesServiceEvidence';
import { type KubernetesServiceEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesServiceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesServiceEvidence;
}
