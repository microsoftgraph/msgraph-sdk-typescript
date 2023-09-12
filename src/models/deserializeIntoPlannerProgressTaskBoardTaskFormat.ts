import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PlannerProgressTaskBoardTaskFormat } from './plannerProgressTaskBoardTaskFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerProgressTaskBoardTaskFormat(plannerProgressTaskBoardTaskFormat: PlannerProgressTaskBoardTaskFormat | undefined = {} as PlannerProgressTaskBoardTaskFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerProgressTaskBoardTaskFormat),
        "orderHint": n => { plannerProgressTaskBoardTaskFormat.orderHint = n.getStringValue(); },
    }
}
