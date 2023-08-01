import type {AlertEvidence} from './alertEvidence';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesServiceAccountEvidence extends AlertEvidence, Parsable {
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The namespace property
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
}
