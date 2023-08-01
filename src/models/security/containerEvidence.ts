import type {AlertEvidence} from './alertEvidence';
import type {ContainerImageEvidence} from './containerImageEvidence';
import type {KubernetesPodEvidence} from './kubernetesPodEvidence';
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
