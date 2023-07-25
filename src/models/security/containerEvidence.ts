import {AlertEvidence} from './alertEvidence';
import {ContainerImageEvidence} from './containerImageEvidence';
import {KubernetesPodEvidence} from './kubernetesPodEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContainerEvidence extends AlertEvidence, Parsable {
    /**
     * The args property
     */
    args?: string[] | undefined;
    /**
     * The command property
     */
    command?: string[] | undefined;
    /**
     * The containerId property
     */
    containerId?: string | undefined;
    /**
     * The image property
     */
    image?: ContainerImageEvidence | undefined;
    /**
     * The isPrivileged property
     */
    isPrivileged?: boolean | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The pod property
     */
    pod?: KubernetesPodEvidence | undefined;
}
