import {PlannerUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerUserImpl();
}
