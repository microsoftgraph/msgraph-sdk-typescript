import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PlannerPlan} from './plannerPlan';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PlannerPlan[] | undefined;
}
