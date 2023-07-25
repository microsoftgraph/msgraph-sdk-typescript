import {Dictionary} from './dictionary';
import {KubernetesControllerEvidence} from './kubernetesControllerEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeDictionary} from './serializeDictionary';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKubernetesControllerEvidence(writer: SerializationWriter, kubernetesControllerEvidence: KubernetesControllerEvidence | undefined = {} as KubernetesControllerEvidence) : void {
        serializeAlertEvidence(writer, kubernetesControllerEvidence)
        writer.writeObjectValue<Dictionary>("labels", kubernetesControllerEvidence.labels, serializeDictionary);
        writer.writeStringValue("name", kubernetesControllerEvidence.name);
        writer.writeObjectValue<KubernetesNamespaceEvidence>("namespace", kubernetesControllerEvidence.namespace, serializeKubernetesNamespaceEvidence);
        writer.writeStringValue("type", kubernetesControllerEvidence.type);
}
