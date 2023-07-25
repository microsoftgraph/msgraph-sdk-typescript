import {AlertEvidence} from './alertEvidence';
import {Dictionary} from './dictionary';
import {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesControllerEvidence extends AlertEvidence, Parsable {
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
     * The type property
     */
    type?: string | undefined;
}
