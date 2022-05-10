import {PlannerTaskDetailsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTaskDetailsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTaskDetailsImpl();
}
