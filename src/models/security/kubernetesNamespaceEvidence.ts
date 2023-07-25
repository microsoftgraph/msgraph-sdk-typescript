import {AlertEvidence} from './alertEvidence';
import {Dictionary} from './dictionary';
import {KubernetesClusterEvidence} from './kubernetesClusterEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesNamespaceEvidence extends AlertEvidence, Parsable {
    /**
     * The cluster property
     */
    cluster?: KubernetesClusterEvidence | undefined;
    /**
     * The labels property
     */
    labels?: Dictionary | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
}
