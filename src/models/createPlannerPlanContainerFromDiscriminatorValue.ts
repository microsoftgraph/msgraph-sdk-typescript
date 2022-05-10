import {PlannerPlanContainerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanContainerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanContainerImpl();
}
