import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketTaskBoardTaskFormat(plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {} as PlannerBucketTaskBoardTaskFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerBucketTaskBoardTaskFormat),
        "orderHint": n => { plannerBucketTaskBoardTaskFormat.orderHint = n.getStringValue(); },
    }
}
