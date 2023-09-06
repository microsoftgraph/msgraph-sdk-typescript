import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { type KubernetesSecretEvidence } from './kubernetesSecretEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { serializeKubernetesNamespaceEvidence } from './serializeKubernetesNamespaceEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeKubernetesSecretEvidence(writer: SerializationWriter, kubernetesSecretEvidence: KubernetesSecretEvidence | undefined = {} as KubernetesSecretEvidence) : void {
        serializeAlertEvidence(writer, kubernetesSecretEvidence)
        writer.writeStringValue("name", kubernetesSecretEvidence.name);
        writer.writeObjectValue<KubernetesNamespaceEvidence>("namespace", kubernetesSecretEvidence.namespace, serializeKubernetesNamespaceEvidence);
        writer.writeStringValue("secretType", kubernetesSecretEvidence.secretType);
}
