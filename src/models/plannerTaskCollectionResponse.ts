import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PlannerTask} from './plannerTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTaskCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PlannerTask[] | undefined;
}
