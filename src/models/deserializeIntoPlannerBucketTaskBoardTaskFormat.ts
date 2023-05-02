import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketTaskBoardTaskFormat(plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {} as PlannerBucketTaskBoardTaskFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerBucketTaskBoardTaskFormat),
        "orderHint": n => { plannerBucketTaskBoardTaskFormat.orderHint = n.getStringValue(); },
    }
}
