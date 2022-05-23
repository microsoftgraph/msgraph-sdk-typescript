import {Entity} from './entity';

export interface PlannerBucketTaskBoardTaskFormat extends Entity{
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
    orderHint?:string | undefined;
}
