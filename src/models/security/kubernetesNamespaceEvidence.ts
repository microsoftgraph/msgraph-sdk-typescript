import { type AlertEvidence } from './alertEvidence';
import { type Dictionary } from './dictionary';
import { type KubernetesClusterEvidence } from './kubernetesClusterEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface KubernetesNamespaceEvidence extends AlertEvidence, Parsable {
    /**
     * The namespace cluster.
     */
    cluster?: KubernetesClusterEvidence | undefined;
    /**
     * The labels for the Kubernetes pod.
     */
    labels?: Dictionary | undefined;
    /**
     * The namespace name.
     */
    name?: string | undefined;
}
