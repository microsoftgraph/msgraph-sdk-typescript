import { type AlertEvidence } from './alertEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ContainerRegistryEvidence extends AlertEvidence, Parsable {
    /**
     * The registry URI.
     */
    registry?: string | undefined;
}
