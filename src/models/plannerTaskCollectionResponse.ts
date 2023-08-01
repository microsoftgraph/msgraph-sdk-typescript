import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PlannerTask} from './plannerTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PlannerTask[] | undefined;
}
