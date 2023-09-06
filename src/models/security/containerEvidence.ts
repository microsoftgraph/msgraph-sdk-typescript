import { type AlertEvidence } from './alertEvidence';
import { type ContainerImageEvidence } from './containerImageEvidence';
import { type KubernetesPodEvidence } from './kubernetesPodEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ContainerEvidence extends AlertEvidence, Parsable {
    /**
     * The list of arguments.
     */
    args?: string[] | undefined;
    /**
     * The list of commands.
     */
    command?: string[] | undefined;
    /**
     * The container ID.
     */
    containerId?: string | undefined;
    /**
     * The image used to run the container.
     */
    image?: ContainerImageEvidence | undefined;
    /**
     * The privileged status.
     */
    isPrivileged?: boolean | undefined;
    /**
     * The container name.
     */
    name?: string | undefined;
    /**
     * The pod this container belongs to.
     */
    pod?: KubernetesPodEvidence | undefined;
}
