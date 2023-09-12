import { deserializeIntoPlannerOrderHintsByAssignee } from './deserializeIntoPlannerOrderHintsByAssignee';
import { type PlannerOrderHintsByAssignee } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerOrderHintsByAssigneeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerOrderHintsByAssignee;
}
