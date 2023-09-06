import { deserializeIntoPlannerPlanCollectionResponse } from './deserializeIntoPlannerPlanCollectionResponse';
import { type PlannerPlanCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerPlanCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerPlanCollectionResponse;
}
