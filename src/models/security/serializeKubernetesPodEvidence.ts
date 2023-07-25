import {ContainerEvidence} from './containerEvidence';
import {Dictionary} from './dictionary';
import {IpEvidence} from './ipEvidence';
import {KubernetesControllerEvidence} from './kubernetesControllerEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesPodEvidence} from './kubernetesPodEvidence';
import {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeContainerEvidence} from './serializeContainerEvidence';
import {serializeDictionary} from './serializeDictionary';
import {serializeIpEvidence} from './serializeIpEvidence';
import {serializeKubernetesControllerEvidence} from './serializeKubernetesControllerEvidence';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {serializeKubernetesServiceAccountEvidence} from './serializeKubernetesServiceAccountEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKubernetesPodEvidence(writer: SerializationWriter, kubernetesPodEvidence: KubernetesPodEvidence | undefined = {} as KubernetesPodEvidence) : void {
        serializeAlertEvidence(writer, kubernetesPodEvidence)
        writer.writeCollectionOfObjectValues<ContainerEvidence>("containers", kubernetesPodEvidence.containers, serializeContainerEvidence);
        writer.writeObjectValue<KubernetesControllerEvidence>("controller", kubernetesPodEvidence.controller, serializeKubernetesControllerEvidence);
        writer.writeCollectionOfObjectValues<ContainerEvidence>("ephemeralContainers", kubernetesPodEvidence.ephemeralContainers, serializeContainerEvidence);
        writer.writeCollectionOfObjectValues<ContainerEvidence>("initContainers", kubernetesPodEvidence.initContainers, serializeContainerEvidence);
        writer.writeObjectValue<Dictionary>("labels", kubernetesPodEvidence.labels, serializeDictionary);
        writer.writeStringValue("name", kubernetesPodEvidence.name);
        writer.writeObjectValue<KubernetesNamespaceEvidence>("namespace", kubernetesPodEvidence.namespace, serializeKubernetesNamespaceEvidence);
        writer.writeObjectValue<IpEvidence>("podIp", kubernetesPodEvidence.podIp, serializeIpEvidence);
        writer.writeObjectValue<KubernetesServiceAccountEvidence>("serviceAccount", kubernetesPodEvidence.serviceAccount, serializeKubernetesServiceAccountEvidence);
}
