import { deserializeIntoPlannerProgressTaskBoardTaskFormat } from './deserializeIntoPlannerProgressTaskBoardTaskFormat';
import { type PlannerProgressTaskBoardTaskFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerProgressTaskBoardTaskFormat;
}
