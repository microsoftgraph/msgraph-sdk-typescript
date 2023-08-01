import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PlannerPlan} from './plannerPlan';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PlannerPlan[] | undefined;
}
