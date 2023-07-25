import {AlertEvidence} from './alertEvidence';
import {ContainerEvidence} from './containerEvidence';
import {Dictionary} from './dictionary';
import {IpEvidence} from './ipEvidence';
import {KubernetesControllerEvidence} from './kubernetesControllerEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesServiceAccountEvidence} from './kubernetesServiceAccountEvidence';
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
