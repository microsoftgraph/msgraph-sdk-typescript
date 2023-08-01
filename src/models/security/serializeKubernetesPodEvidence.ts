import type {ContainerEvidence} from './containerEvidence';
import type {Dictionary} from './dictionary';
import type {IpEvidence} from './ipEvidence';
import type {KubernetesControllerEvidence} from './kubernetesControllerEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import type {KubernetesPodEvidence} from './kubernetesPodEvidence';
import type {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
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
