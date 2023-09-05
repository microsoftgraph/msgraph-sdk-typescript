import { type AlertEvidence } from './alertEvidence';
import { type ContainerEvidence } from './containerEvidence';
import { type Dictionary } from './dictionary';
import { type IpEvidence } from './ipEvidence';
import { type KubernetesControllerEvidence } from './kubernetesControllerEvidence';
import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { type KubernetesServiceAccountEvidence } from './kubernetesServiceAccountEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface KubernetesPodEvidence extends AlertEvidence, Parsable {
    /**
     * The list of pod containers which are not init or ephemeral containers.
     */
    containers?: ContainerEvidence[] | undefined;
    /**
     * The pod controller.
     */
    controller?: KubernetesControllerEvidence | undefined;
    /**
     * The list of pod ephemeral containers.
     */
    ephemeralContainers?: ContainerEvidence[] | undefined;
    /**
     * The list of pod init containers.
     */
    initContainers?: ContainerEvidence[] | undefined;
    /**
     * The pod labels.
     */
    labels?: Dictionary | undefined;
    /**
     * The pod name.
     */
    name?: string | undefined;
    /**
     * The pod namespace.
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
    /**
     * The pod IP.
     */
    podIp?: IpEvidence | undefined;
    /**
     * The pod service account.
     */
    serviceAccount?: KubernetesServiceAccountEvidence | undefined;
}
