import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerProgressTaskBoardTaskFormat} from './plannerProgressTaskBoardTaskFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerProgressTaskBoardTaskFormat(plannerProgressTaskBoardTaskFormat: PlannerProgressTaskBoardTaskFormat | undefined = {} as PlannerProgressTaskBoardTaskFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerProgressTaskBoardTaskFormat),
        "orderHint": n => { plannerProgressTaskBoardTaskFormat.orderHint = n.getStringValue(); },
    }
}
