import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucketTaskBoardTaskFormat(writer: SerializationWriter, plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {} as PlannerBucketTaskBoardTaskFormat) : void {
        serializeEntity(writer, plannerBucketTaskBoardTaskFormat)
        writer.writeStringValue("orderHint", plannerBucketTaskBoardTaskFormat.orderHint);
}
