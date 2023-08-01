import type {AlertEvidence} from './alertEvidence';
import type {Dictionary} from './dictionary';
import type {KubernetesClusterEvidence} from './kubernetesClusterEvidence';
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
