import {PlannerPlanImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanImpl();
}
