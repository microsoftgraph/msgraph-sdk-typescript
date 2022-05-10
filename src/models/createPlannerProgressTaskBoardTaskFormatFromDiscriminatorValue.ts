import {PlannerProgressTaskBoardTaskFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerProgressTaskBoardTaskFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerProgressTaskBoardTaskFormatImpl();
}
