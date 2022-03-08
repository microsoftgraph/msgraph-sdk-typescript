import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAppliedCategoriesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerAppliedCategories {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerAppliedCategories();
}
