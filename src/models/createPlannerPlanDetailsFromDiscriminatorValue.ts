import { deserializeIntoPlannerPlanDetails } from './deserializeIntoPlannerPlanDetails';
import { type PlannerPlanDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerPlanDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerPlanDetails;
}
