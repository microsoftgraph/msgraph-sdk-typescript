import {deserializeIntoPlannerProgressTaskBoardTaskFormat} from './deserializeIntoPlannerProgressTaskBoardTaskFormat';
import {PlannerProgressTaskBoardTaskFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerProgressTaskBoardTaskFormat;
}
