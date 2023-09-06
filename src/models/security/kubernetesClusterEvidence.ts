import { type AlertEvidence } from './alertEvidence';
import { KubernetesPlatform } from './kubernetesPlatform';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface KubernetesClusterEvidence extends AlertEvidence, Parsable {
    /**
     * The cloud identifier of the cluster. Can be either an amazonResourceEvidence, azureResourceEvidence, or googleCloudResourceEvidence object.
     */
    cloudResource?: AlertEvidence | undefined;
    /**
     * The distribution type of the cluster.
     */
    distribution?: string | undefined;
    /**
     * The cluster name.
     */
    name?: string | undefined;
    /**
     * The platform the cluster runs on. Possible values are: unknown, aks, eks, gke, arc, unknownFutureValue.
     */
    platform?: KubernetesPlatform | undefined;
    /**
     * The kubernetes version of the cluster.
     */
    version?: string | undefined;
}
