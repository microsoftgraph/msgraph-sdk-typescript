import {PlannerUserIdsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerUserIdsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerUserIdsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerUserIdsImpl();
}
