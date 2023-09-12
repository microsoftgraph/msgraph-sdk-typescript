import { deserializeIntoAssignedPlan } from './deserializeIntoAssignedPlan';
import { type AssignedPlan } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignedPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignedPlan;
}
