import type {ContainerEvidence} from './containerEvidence';
import {createContainerEvidenceFromDiscriminatorValue} from './createContainerEvidenceFromDiscriminatorValue';
import {createDictionaryFromDiscriminatorValue} from './createDictionaryFromDiscriminatorValue';
import {createIpEvidenceFromDiscriminatorValue} from './createIpEvidenceFromDiscriminatorValue';
import {createKubernetesControllerEvidenceFromDiscriminatorValue} from './createKubernetesControllerEvidenceFromDiscriminatorValue';
import {createKubernetesNamespaceEvidenceFromDiscriminatorValue} from './createKubernetesNamespaceEvidenceFromDiscriminatorValue';
import {createKubernetesServiceAccountEvidenceFromDiscriminatorValue} from './createKubernetesServiceAccountEvidenceFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import type {Dictionary} from './dictionary';
import type {IpEvidence} from './ipEvidence';
import type {KubernetesControllerEvidence} from './kubernetesControllerEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import type {KubernetesPodEvidence} from './kubernetesPodEvidence';
import type {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
import {serializeContainerEvidence} from './serializeContainerEvidence';
import {serializeDictionary} from './serializeDictionary';
import {serializeIpEvidence} from './serializeIpEvidence';
import {serializeKubernetesControllerEvidence} from './serializeKubernetesControllerEvidence';
import {serializeKubernetesNamespaceEvidence} from './serializeKubernetesNamespaceEvidence';
import {serializeKubernetesServiceAccountEvidence} from './serializeKubernetesServiceAccountEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKubernetesPodEvidence(kubernetesPodEvidence: KubernetesPodEvidence | undefined = {} as KubernetesPodEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(kubernetesPodEvidence),
        "containers": n => { kubernetesPodEvidence.containers = n.getCollectionOfObjectValues<ContainerEvidence>(createContainerEvidenceFromDiscriminatorValue); },
        "controller": n => { kubernetesPodEvidence.controller = n.getObjectValue<KubernetesControllerEvidence>(createKubernetesControllerEvidenceFromDiscriminatorValue); },
        "ephemeralContainers": n => { kubernetesPodEvidence.ephemeralContainers = n.getCollectionOfObjectValues<ContainerEvidence>(createContainerEvidenceFromDiscriminatorValue); },
        "initContainers": n => { kubernetesPodEvidence.initContainers = n.getCollectionOfObjectValues<ContainerEvidence>(createContainerEvidenceFromDiscriminatorValue); },
        "labels": n => { kubernetesPodEvidence.labels = n.getObjectValue<Dictionary>(createDictionaryFromDiscriminatorValue); },
        "name": n => { kubernetesPodEvidence.name = n.getStringValue(); },
        "namespace": n => { kubernetesPodEvidence.namespace = n.getObjectValue<KubernetesNamespaceEvidence>(createKubernetesNamespaceEvidenceFromDiscriminatorValue); },
        "podIp": n => { kubernetesPodEvidence.podIp = n.getObjectValue<IpEvidence>(createIpEvidenceFromDiscriminatorValue); },
        "serviceAccount": n => { kubernetesPodEvidence.serviceAccount = n.getObjectValue<KubernetesServiceAccountEvidence>(createKubernetesServiceAccountEvidenceFromDiscriminatorValue); },
    }
}
