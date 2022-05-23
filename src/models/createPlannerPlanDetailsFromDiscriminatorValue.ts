import {PlannerPlanDetailsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanDetailsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanDetailsImpl();
}
