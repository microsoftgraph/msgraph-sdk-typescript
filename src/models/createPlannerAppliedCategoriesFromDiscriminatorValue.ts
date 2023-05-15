import {deserializeIntoPlannerAppliedCategories} from './deserializeIntoPlannerAppliedCategories';
import {PlannerAppliedCategories} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAppliedCategoriesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerAppliedCategories;
}
