import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerProgressTaskBoardTaskFormat extends Entity, Parsable {
    /**
     * Hint value used to order the task on the progress view of the task board. For details about the supported format, see Using order hints in Planner.
     */
    orderHint?: string | undefined;
}
