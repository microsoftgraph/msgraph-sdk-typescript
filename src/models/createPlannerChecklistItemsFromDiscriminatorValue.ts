import {PlannerChecklistItemsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerChecklistItemsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerChecklistItemsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerChecklistItemsImpl();
}
