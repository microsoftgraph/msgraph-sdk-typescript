import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContainerRegistryEvidence extends AlertEvidence, Parsable {
    /**
     * The registry property
     */
    registry?: string | undefined;
}
