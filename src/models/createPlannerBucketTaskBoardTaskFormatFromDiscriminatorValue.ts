import {PlannerBucketTaskBoardTaskFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerBucketTaskBoardTaskFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerBucketTaskBoardTaskFormatImpl();
}
