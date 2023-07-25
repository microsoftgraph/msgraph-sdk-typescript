import {createKubernetesNamespaceEvidenceFromDiscriminatorValue} from './createKubernetesNamespaceEvidenceFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesServiceAccountEvidence(kubernetesServiceAccountEvidence: KubernetesServiceAccountEvidence | undefined = {} as KubernetesServiceAccountEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesServiceAccountEvidence),
        "name": n => { kubernetesServiceAccountEvidence.name = n.getStringValue(); },
        "namespace": n => { kubernetesServiceAccountEvidence.namespace = n.getObjectValue<KubernetesNamespaceEvidence>(createKubernetesNamespaceEvidenceFromDiscriminatorValue); },
    }
}
