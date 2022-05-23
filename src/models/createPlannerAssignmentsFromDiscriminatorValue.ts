import {PlannerAssignmentsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAssignmentsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerAssignmentsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerAssignmentsImpl();
}
