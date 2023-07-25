import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKubernetesServiceAccountEvidence(writer: SerializationWriter, kubernetesServiceAccountEvidence: KubernetesServiceAccountEvidence | undefined = {} as KubernetesServiceAccountEvidence) : void {
        serializeAlertEvidence(writer, kubernetesServiceAccountEvidence)
        writer.writeStringValue("name", kubernetesServiceAccountEvidence.name);
        writer.writeObjectValue<KubernetesNamespaceEvidence>("namespace", kubernetesServiceAccountEvidence.namespace, serializeKubernetesNamespaceEvidence);
}
