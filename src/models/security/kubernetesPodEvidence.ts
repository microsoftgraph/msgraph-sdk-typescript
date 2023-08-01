import type {AlertEvidence} from './alertEvidence';
import type {ContainerEvidence} from './containerEvidence';
import type {Dictionary} from './dictionary';
import type {IpEvidence} from './ipEvidence';
import type {KubernetesControllerEvidence} from './kubernetesControllerEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import type {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesPodEvidence extends AlertEvidence, Parsable {
    /**
     * The containers property
     */
    containers?: ContainerEvidence[] | undefined;
    /**
     * The controller property
     */
    controller?: KubernetesControllerEvidence | undefined;
    /**
     * The ephemeralContainers property
     */
    ephemeralContainers?: ContainerEvidence[] | undefined;
    /**
     * The initContainers property
     */
    initContainers?: ContainerEvidence[] | undefined;
    /**
     * The labels property
     */
    labels?: Dictionary | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The namespace property
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
    /**
     * The podIp property
     */
    podIp?: IpEvidence | undefined;
    /**
     * The serviceAccount property
     */
    serviceAccount?: KubernetesServiceAccountEvidence | undefined;
}
