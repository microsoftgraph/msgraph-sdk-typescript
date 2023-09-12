import { deserializeIntoPlannerPlanContainer } from './deserializeIntoPlannerPlanContainer';
import { type PlannerPlanContainer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerPlanContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerPlanContainer;
}
