import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GovernanceInsight extends Entity, Parsable {
    /**
     * Indicates when the insight was created.
     */
    insightCreatedDateTime?: Date | undefined;
}
