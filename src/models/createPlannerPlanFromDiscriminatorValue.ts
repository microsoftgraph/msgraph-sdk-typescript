import { deserializeIntoPlannerPlan } from './deserializeIntoPlannerPlan';
import { type PlannerPlan } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerPlan;
}
