import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerProgressTaskBoardTaskFormat extends Entity, Partial<Parsable> {
    /** Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here. */
    orderHint?: string | undefined;
}
