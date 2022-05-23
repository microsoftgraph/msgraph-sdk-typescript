import {PlannerOrderHintsByAssigneeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerOrderHintsByAssigneeFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerOrderHintsByAssigneeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerOrderHintsByAssigneeImpl();
}
