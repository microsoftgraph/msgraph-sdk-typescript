import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewScheduleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AccessReviewScheduleDefinition[] | undefined;
}
