import type {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import type {PlannerOrderHintsByAssignee} from './plannerOrderHintsByAssignee';
import {serializeEntity} from './serializeEntity';
import {serializePlannerOrderHintsByAssignee} from './serializePlannerOrderHintsByAssignee';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerAssignedToTaskBoardTaskFormat(writer: SerializationWriter, plannerAssignedToTaskBoardTaskFormat: PlannerAssignedToTaskBoardTaskFormat | undefined = {} as PlannerAssignedToTaskBoardTaskFormat) : void {
        serializeEntity(writer, plannerAssignedToTaskBoardTaskFormat)
        writer.writeObjectValue<PlannerOrderHintsByAssignee>("orderHintsByAssignee", plannerAssignedToTaskBoardTaskFormat.orderHintsByAssignee, serializePlannerOrderHintsByAssignee);
        writer.writeStringValue("unassignedOrderHint", plannerAssignedToTaskBoardTaskFormat.unassignedOrderHint);
}
