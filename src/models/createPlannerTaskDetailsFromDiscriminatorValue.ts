import { deserializeIntoPlannerTaskDetails } from './deserializeIntoPlannerTaskDetails';
import { type PlannerTaskDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerTaskDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerTaskDetails;
}
