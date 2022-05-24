import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerTask} from './plannerTask';

export interface PlannerPlan extends Entity{
    /** Collection of buckets in the plan. Read-only. Nullable. */
    buckets?:PlannerBucket[] | undefined;
    /** Identifies the container of the plan. After it is set, this property can’t be updated. Required. */
    container?:PlannerPlanContainer | undefined;
    /** Read-only. The user who created the plan. */
    createdBy?:IdentitySet | undefined;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?:Date | undefined;
    /** Additional details about the plan. Read-only. Nullable. */
    details?:PlannerPlanDetails | undefined;
    /** The owner property */
    owner?:string | undefined;
    /** Collection of tasks in the plan. Read-only. Nullable. */
    tasks?:PlannerTask[] | undefined;
    /** Required. Title of the plan. */
    title?:string | undefined;
}
