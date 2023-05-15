import {deserializeIntoPlannerAssignedToTaskBoardTaskFormat} from './deserializeIntoPlannerAssignedToTaskBoardTaskFormat';
import {PlannerAssignedToTaskBoardTaskFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerAssignedToTaskBoardTaskFormat;
}
