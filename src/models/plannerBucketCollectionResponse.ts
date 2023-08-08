import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PlannerBucket} from './plannerBucket';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucketCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PlannerBucket[] | undefined;
}
