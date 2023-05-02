import {deserializeIntoPlannerChecklistItems} from './deserializeIntoPlannerChecklistItems';
import {PlannerChecklistItems} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerChecklistItemsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerChecklistItems;
}
