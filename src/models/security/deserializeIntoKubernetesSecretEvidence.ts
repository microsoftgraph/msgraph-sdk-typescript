import { createKubernetesNamespaceEvidenceFromDiscriminatorValue } from './createKubernetesNamespaceEvidenceFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { type KubernetesSecretEvidence } from './kubernetesSecretEvidence';
import { serializeKubernetesNamespaceEvidence } from './serializeKubernetesNamespaceEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesSecretEvidence(kubernetesSecretEvidence: KubernetesSecretEvidence | undefined = {} as KubernetesSecretEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesSecretEvidence),
        "name": n => { kubernetesSecretEvidence.name = n.getStringValue(); },
        "namespace": n => { kubernetesSecretEvidence.namespace = n.getObjectValue<KubernetesNamespaceEvidence>(createKubernetesNamespaceEvidenceFromDiscriminatorValue); },
        "secretType": n => { kubernetesSecretEvidence.secretType = n.getStringValue(); },
    }
}
