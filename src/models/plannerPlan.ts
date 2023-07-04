import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerTask} from './plannerTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlan extends Entity, Parsable {
    /**
     * Read-only. Nullable. Collection of buckets in the plan.
     */
    buckets?: PlannerBucket[] | undefined;
    /**
     * Identifies the container of the plan. Specify only the url, the containerId and type, or all properties. After it is set, this property can’t be updated. Required.
     */
    container?: PlannerPlanContainer | undefined;
    /**
     * Read-only. The user who created the plan.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: Date | undefined;
    /**
     * Read-only. Nullable. Additional details about the plan.
     */
    details?: PlannerPlanDetails | undefined;
    /**
     * The owner property
     */
    owner?: string | undefined;
    /**
     * Read-only. Nullable. Collection of tasks in the plan.
     */
    tasks?: PlannerTask[] | undefined;
    /**
     * Required. Title of the plan.
     */
    title?: string | undefined;
}
