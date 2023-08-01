import type {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewScheduleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessReviewScheduleDefinition[] | undefined;
}
