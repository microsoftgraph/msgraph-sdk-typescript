import {AlertEvidence} from './alertEvidence';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesSecretEvidence extends AlertEvidence, Parsable {
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The namespace property
     */
    namespace?: KubernetesNamespaceEvidence | undefined;
    /**
     * The secretType property
     */
    secretType?: string | undefined;
}
