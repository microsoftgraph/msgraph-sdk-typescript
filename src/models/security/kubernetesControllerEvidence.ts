import type {AlertEvidence} from './alertEvidence';
import type {Dictionary} from './dictionary';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesControllerEvidence extends AlertEvidence, Parsable {
    /**
     * The labels for the Kubernetes pod.
     */
    labels?: Dictionary | undefined;
    /**
     * The controller name.
     */
    name?: string | undefined;
    /**
     * The service account namespace.
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
    /**
     * The controller type.
     */
    type?: string | undefined;
}
