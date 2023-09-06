import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PlannerBucketTaskBoardTaskFormat extends Entity, Parsable {
    /**
     * Hint used to order tasks in the bucket view of the task board. For details about the supported format, see Using order hints in Planner.
     */
    orderHint?: string | undefined;
}
