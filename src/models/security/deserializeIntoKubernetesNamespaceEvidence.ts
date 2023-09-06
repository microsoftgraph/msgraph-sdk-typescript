import { createDictionaryFromDiscriminatorValue } from './createDictionaryFromDiscriminatorValue';
import { createKubernetesClusterEvidenceFromDiscriminatorValue } from './createKubernetesClusterEvidenceFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type Dictionary } from './dictionary';
import { type KubernetesClusterEvidence } from './kubernetesClusterEvidence';
import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { serializeDictionary } from './serializeDictionary';
import { serializeKubernetesClusterEvidence } from './serializeKubernetesClusterEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesNamespaceEvidence(kubernetesNamespaceEvidence: KubernetesNamespaceEvidence | undefined = {} as KubernetesNamespaceEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesNamespaceEvidence),
        "cluster": n => { kubernetesNamespaceEvidence.cluster = n.getObjectValue<KubernetesClusterEvidence>(createKubernetesClusterEvidenceFromDiscriminatorValue); },
        "labels": n => { kubernetesNamespaceEvidence.labels = n.getObjectValue<Dictionary>(createDictionaryFromDiscriminatorValue); },
        "name": n => { kubernetesNamespaceEvidence.name = n.getStringValue(); },
    }
}
