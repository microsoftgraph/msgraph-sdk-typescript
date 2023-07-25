import {AlertEvidence} from './alertEvidence';
import {Dictionary} from './dictionary';
import {IpEvidence} from './ipEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {KubernetesServicePort} from './kubernetesServicePort';
import {KubernetesServiceType} from './kubernetesServiceType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesServiceEvidence extends AlertEvidence, Parsable {
    /**
     * The clusterIP property
     */
    clusterIP?: IpEvidence | undefined;
    /**
     * The externalIPs property
     */
    externalIPs?: IpEvidence[] | undefined;
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
     * The selector property
     */
    selector?: Dictionary | undefined;
    /**
     * The servicePorts property
     */
    servicePorts?: KubernetesServicePort[] | undefined;
    /**
     * The serviceType property
     */
    serviceType?: KubernetesServiceType | undefined;
}
