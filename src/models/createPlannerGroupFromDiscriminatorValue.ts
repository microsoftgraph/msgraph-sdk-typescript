import {PlannerGroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerGroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerGroupImpl();
}
