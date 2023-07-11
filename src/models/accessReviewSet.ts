import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewSet extends Entity, Parsable {
    /**
     * Represents the template and scheduling for an access review.
     */
    definitions?: AccessReviewScheduleDefinition[] | undefined;
    /**
     * Represents a collection of access review history data and the scopes used to collect that data.
     */
    historyDefinitions?: AccessReviewHistoryDefinition[] | undefined;
}
