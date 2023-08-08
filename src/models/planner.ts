import type {Entity} from './entity';
import type {PlannerBucket} from './plannerBucket';
import type {PlannerPlan} from './plannerPlan';
import type {PlannerTask} from './plannerTask';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
