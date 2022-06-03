import {Entity} from './entity';
import {PlannerTask} from './plannerTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucket extends Entity, Partial<Parsable> {
    /** Name of the bucket. */
    name?: string | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    orderHint?: string | undefined;
    /** Plan ID to which the bucket belongs. */
    planId?: string | undefined;
    /** Read-only. Nullable. The collection of tasks in the bucket. */
    tasks?: PlannerTask[] | undefined;
}
