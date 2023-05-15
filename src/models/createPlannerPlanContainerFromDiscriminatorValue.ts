import {deserializeIntoPlannerPlanContainer} from './deserializeIntoPlannerPlanContainer';
import {PlannerPlanContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerPlanContainer;
}
