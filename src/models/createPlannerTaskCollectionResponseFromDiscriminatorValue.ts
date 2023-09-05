import { deserializeIntoPlannerTaskCollectionResponse } from './deserializeIntoPlannerTaskCollectionResponse';
import { type PlannerTaskCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerTaskCollectionResponse;
}
