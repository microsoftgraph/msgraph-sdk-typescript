import {AlertEvidence} from './alertEvidence';
import {ContainerRegistryEvidence} from './containerRegistryEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContainerImageEvidence extends AlertEvidence, Parsable {
    /**
     * The digestImage property
     */
    digestImage?: ContainerImageEvidence | undefined;
    /**
     * The imageId property
     */
    imageId?: string | undefined;
    /**
     * The registry property
     */
    registry?: ContainerRegistryEvidence | undefined;
}
