import {Entity} from './entity';

export interface PlannerProgressTaskBoardTaskFormat extends Entity{
    /** Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here. */
    orderHint?:string | undefined;
}
