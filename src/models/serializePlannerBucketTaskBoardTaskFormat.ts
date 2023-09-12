import { type PlannerBucketTaskBoardTaskFormat } from './plannerBucketTaskBoardTaskFormat';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerBucketTaskBoardTaskFormat(writer: SerializationWriter, plannerBucketTaskBoardTaskFormat: PlannerBucketTaskBoardTaskFormat | undefined = {} as PlannerBucketTaskBoardTaskFormat) : void {
        serializeEntity(writer, plannerBucketTaskBoardTaskFormat)
        writer.writeStringValue("orderHint", plannerBucketTaskBoardTaskFormat.orderHint);
}
