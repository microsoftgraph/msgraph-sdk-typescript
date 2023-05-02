import {deserializeIntoPlannerPlanDetails} from './deserializeIntoPlannerPlanDetails';
import {PlannerPlanDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerPlanDetails;
}
