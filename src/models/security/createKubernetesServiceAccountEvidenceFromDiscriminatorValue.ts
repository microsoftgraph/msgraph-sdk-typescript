import { deserializeIntoKubernetesServiceAccountEvidence } from './deserializeIntoKubernetesServiceAccountEvidence';
import { type KubernetesServiceAccountEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesServiceAccountEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesServiceAccountEvidence;
}
