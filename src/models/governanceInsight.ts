import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GovernanceInsight extends Entity, Parsable {
    /**
     * The insightCreatedDateTime property
     */
    insightCreatedDateTime?: Date | undefined;
}
