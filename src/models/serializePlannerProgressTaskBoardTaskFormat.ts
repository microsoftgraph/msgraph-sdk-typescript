import { type PlannerProgressTaskBoardTaskFormat } from './plannerProgressTaskBoardTaskFormat';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerProgressTaskBoardTaskFormat(writer: SerializationWriter, plannerProgressTaskBoardTaskFormat: PlannerProgressTaskBoardTaskFormat | undefined = {} as PlannerProgressTaskBoardTaskFormat) : void {
        serializeEntity(writer, plannerProgressTaskBoardTaskFormat)
        writer.writeStringValue("orderHint", plannerProgressTaskBoardTaskFormat.orderHint);
}
