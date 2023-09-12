import { type AlertEvidence } from './alertEvidence';
import { type ContainerRegistryEvidence } from './containerRegistryEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ContainerImageEvidence extends AlertEvidence, Parsable {
    /**
     * The digest image entity, in case this is a tag image.
     */
    digestImage?: ContainerImageEvidence | undefined;
    /**
     * The unique identifier for the container image entity.
     */
    imageId?: string | undefined;
    /**
     * The container registry for this image.
     */
    registry?: ContainerRegistryEvidence | undefined;
}
