import {PlannerAssignedToTaskBoardTaskFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerAssignedToTaskBoardTaskFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerAssignedToTaskBoardTaskFormatImpl();
}
