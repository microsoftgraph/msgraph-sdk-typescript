import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerBucketTaskBoardTaskFormat extends Entity, Partial<Parsable> {
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
    orderHint?: string | undefined;
}
