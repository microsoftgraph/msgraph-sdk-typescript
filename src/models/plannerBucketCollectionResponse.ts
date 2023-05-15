import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PlannerBucket} from './plannerBucket';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucketCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PlannerBucket[] | undefined;
}
