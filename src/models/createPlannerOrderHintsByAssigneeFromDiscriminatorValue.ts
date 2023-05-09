import {deserializeIntoPlannerOrderHintsByAssignee} from './deserializeIntoPlannerOrderHintsByAssignee';
import {PlannerOrderHintsByAssignee} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerOrderHintsByAssigneeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerOrderHintsByAssignee;
}
