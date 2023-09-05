import { createKubernetesNamespaceEvidenceFromDiscriminatorValue } from './createKubernetesNamespaceEvidenceFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { type KubernetesServiceAccountEvidence } from './kubernetesServiceAccountEvidence';
import { serializeKubernetesNamespaceEvidence } from './serializeKubernetesNamespaceEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesServiceAccountEvidence(kubernetesServiceAccountEvidence: KubernetesServiceAccountEvidence | undefined = {} as KubernetesServiceAccountEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesServiceAccountEvidence),
        "name": n => { kubernetesServiceAccountEvidence.name = n.getStringValue(); },
        "namespace": n => { kubernetesServiceAccountEvidence.namespace = n.getObjectValue<KubernetesNamespaceEvidence>(createKubernetesNamespaceEvidenceFromDiscriminatorValue); },
    }
}
