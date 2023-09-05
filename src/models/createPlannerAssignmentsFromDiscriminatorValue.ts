import { deserializeIntoPlannerAssignments } from './deserializeIntoPlannerAssignments';
import { type PlannerAssignments } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerAssignmentsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerAssignments;
}
