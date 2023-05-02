import {deserializeIntoPlannerAssignments} from './deserializeIntoPlannerAssignments';
import {PlannerAssignments} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAssignmentsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerAssignments;
}
