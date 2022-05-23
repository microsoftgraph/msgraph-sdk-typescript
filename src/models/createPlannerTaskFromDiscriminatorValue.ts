import {PlannerTaskImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTaskImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTaskImpl();
}
