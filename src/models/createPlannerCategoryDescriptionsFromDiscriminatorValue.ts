import { deserializeIntoPlannerCategoryDescriptions } from './deserializeIntoPlannerCategoryDescriptions';
import { type PlannerCategoryDescriptions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerCategoryDescriptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerCategoryDescriptions;
}
