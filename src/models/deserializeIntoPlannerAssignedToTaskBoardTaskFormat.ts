import {createPlannerOrderHintsByAssigneeFromDiscriminatorValue} from './createPlannerOrderHintsByAssigneeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import type {PlannerOrderHintsByAssignee} from './plannerOrderHintsByAssignee';
import {serializePlannerOrderHintsByAssignee} from './serializePlannerOrderHintsByAssignee';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerAssignedToTaskBoardTaskFormat(plannerAssignedToTaskBoardTaskFormat: PlannerAssignedToTaskBoardTaskFormat | undefined = {} as PlannerAssignedToTaskBoardTaskFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerAssignedToTaskBoardTaskFormat),
        "orderHintsByAssignee": n => { plannerAssignedToTaskBoardTaskFormat.orderHintsByAssignee = n.getObjectValue<PlannerOrderHintsByAssignee>(createPlannerOrderHintsByAssigneeFromDiscriminatorValue); },
        "unassignedOrderHint": n => { plannerAssignedToTaskBoardTaskFormat.unassignedOrderHint = n.getStringValue(); },
    }
}
