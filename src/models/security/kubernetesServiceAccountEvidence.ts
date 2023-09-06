import { type AlertEvidence } from './alertEvidence';
import { type KubernetesNamespaceEvidence } from './kubernetesNamespaceEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface KubernetesServiceAccountEvidence extends AlertEvidence, Parsable {
    /**
     * The service account name.
     */
    name?: string | undefined;
    /**
     * The service account namespace.
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
}
