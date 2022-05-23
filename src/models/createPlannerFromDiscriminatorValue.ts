import {PlannerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerImpl();
}
