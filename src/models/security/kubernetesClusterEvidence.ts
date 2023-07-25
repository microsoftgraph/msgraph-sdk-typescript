import {AlertEvidence} from './alertEvidence';
import {KubernetesPlatform} from './kubernetesPlatform';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KubernetesClusterEvidence extends AlertEvidence, Parsable {
    /**
     * The cloudResource property
     */
    cloudResource?: AlertEvidence | undefined;
    /**
     * The distribution property
     */
    distribution?: string | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The platform property
     */
    platform?: KubernetesPlatform | undefined;
    /**
     * The version property
     */
    version?: string | undefined;
}
