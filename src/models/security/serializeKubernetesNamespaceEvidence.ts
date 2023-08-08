import type {Dictionary} from './dictionary';
import type {KubernetesClusterEvidence} from './kubernetesClusterEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeDictionary} from './serializeDictionary';
import {serializeKubernetesClusterEvidence} from './serializeKubernetesClusterEvidence';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKubernetesNamespaceEvidence(writer: SerializationWriter, kubernetesNamespaceEvidence: KubernetesNamespaceEvidence | undefined = {} as KubernetesNamespaceEvidence) : void {
        serializeAlertEvidence(writer, kubernetesNamespaceEvidence)
        writer.writeObjectValue<KubernetesClusterEvidence>("cluster", kubernetesNamespaceEvidence.cluster, serializeKubernetesClusterEvidence);
        writer.writeObjectValue<Dictionary>("labels", kubernetesNamespaceEvidence.labels, serializeDictionary);
        writer.writeStringValue("name", kubernetesNamespaceEvidence.name);
}
