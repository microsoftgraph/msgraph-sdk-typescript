import { type AccessReviewScheduleDefinition } from '../../../../models/accessReviewScheduleDefinition';
import { type BaseCollectionPaginationCountResponse } from '../../../../models/baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessReviewScheduleDefinition[] | undefined;
}
