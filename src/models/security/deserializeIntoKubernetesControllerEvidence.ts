import { createDictionaryFromDiscriminatorValue } from './createDictionaryFromDiscriminatorValue';
import { createKubernetesNamespaceEvidenceFromDiscriminatorValue } from './createKubernetesNamespaceEvidenceFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type Dictionary } from './dictionary';
import { type KubernetesControllerEvidence } from './kubernetesControllerEvidence';
import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { serializeDictionary } from './serializeDictionary';
import { serializeKubernetesNamespaceEvidence } from './serializeKubernetesNamespaceEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesControllerEvidence(kubernetesControllerEvidence: KubernetesControllerEvidence | undefined = {} as KubernetesControllerEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesControllerEvidence),
        "labels": n => { kubernetesControllerEvidence.labels = n.getObjectValue<Dictionary>(createDictionaryFromDiscriminatorValue); },
        "name": n => { kubernetesControllerEvidence.name = n.getStringValue(); },
        "namespace": n => { kubernetesControllerEvidence.namespace = n.getObjectValue<KubernetesNamespaceEvidence>(createKubernetesNamespaceEvidenceFromDiscriminatorValue); },
        "type": n => { kubernetesControllerEvidence.type = n.getStringValue(); },
    }
}
