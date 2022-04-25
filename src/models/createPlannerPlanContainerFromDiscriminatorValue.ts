import {PlannerPlanContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanContainer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanContainer();
}
