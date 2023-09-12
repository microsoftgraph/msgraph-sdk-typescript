import { deserializeIntoPlannerBucketTaskBoardTaskFormat } from './deserializeIntoPlannerBucketTaskBoardTaskFormat';
import { type PlannerBucketTaskBoardTaskFormat } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerBucketTaskBoardTaskFormat;
}
