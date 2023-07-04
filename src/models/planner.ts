import {Entity} from './entity';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Planner extends Entity, Parsable {
    /**
     * Read-only. Nullable. Returns a collection of the specified buckets
     */
    buckets?: PlannerBucket[] | undefined;
    /**
     * Read-only. Nullable. Returns a collection of the specified plans
     */
    plans?: PlannerPlan[] | undefined;
    /**
     * Read-only. Nullable. Returns a collection of the specified tasks
     */
    tasks?: PlannerTask[] | undefined;
}
