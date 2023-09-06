import { deserializeIntoKubernetesSecretEvidence } from './deserializeIntoKubernetesSecretEvidence';
import { type KubernetesSecretEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKubernetesSecretEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKubernetesSecretEvidence;
}
