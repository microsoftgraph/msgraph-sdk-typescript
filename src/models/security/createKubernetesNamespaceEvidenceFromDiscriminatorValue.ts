import { deserializeIntoKubernetesNamespaceEvidence } from './deserializeIntoKubernetesNamespaceEvidence';
import { type KubernetesNamespaceEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesNamespaceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesNamespaceEvidence;
}
