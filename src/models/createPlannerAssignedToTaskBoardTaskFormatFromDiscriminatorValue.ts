import { deserializeIntoPlannerAssignedToTaskBoardTaskFormat } from './deserializeIntoPlannerAssignedToTaskBoardTaskFormat';
import { type PlannerAssignedToTaskBoardTaskFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerAssignedToTaskBoardTaskFormat;
}
