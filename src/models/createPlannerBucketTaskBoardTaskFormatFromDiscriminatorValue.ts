import {PlannerBucketTaskBoardTaskFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerBucketTaskBoardTaskFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerBucketTaskBoardTaskFormat();
}
