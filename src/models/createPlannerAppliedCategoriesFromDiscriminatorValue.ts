import {PlannerAppliedCategoriesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAppliedCategoriesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerAppliedCategoriesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerAppliedCategoriesImpl();
}
