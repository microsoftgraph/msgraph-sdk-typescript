import type {AlertEvidence} from './alertEvidence';
import type {Dictionary} from './dictionary';
import type {IpEvidence} from './ipEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import type {KubernetesServicePort} from './kubernetesServicePort';
import {KubernetesServiceType} from './kubernetesServiceType';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesServiceEvidence extends AlertEvidence, Parsable {
    /**
     * The service cluster IP.
     */
    clusterIP?: IpEvidence | undefined;
    /**
     * The service external IPs.
     */
    externalIPs?: IpEvidence[] | undefined;
    /**
     * The service labels.
     */
    labels?: Dictionary | undefined;
    /**
     * The service name.
     */
    name?: string | undefined;
    /**
     * The service namespace.
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
    /**
     * The service selector.
     */
    selector?: Dictionary | undefined;
    /**
     * The list of service ports.
     */
    servicePorts?: KubernetesServicePort[] | undefined;
    /**
     * The serviceType property
     */
    serviceType?: KubernetesServiceType | undefined;
}
