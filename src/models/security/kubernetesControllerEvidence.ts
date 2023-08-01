import type {AlertEvidence} from './alertEvidence';
import type {Dictionary} from './dictionary';
import type {KubernetesNamespaceEvidence} from './kubernetesNamespaceEvidence';
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
