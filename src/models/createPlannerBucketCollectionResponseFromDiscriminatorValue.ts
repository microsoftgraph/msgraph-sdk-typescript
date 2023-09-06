import { deserializeIntoPlannerBucketCollectionResponse } from './deserializeIntoPlannerBucketCollectionResponse';
import { type PlannerBucketCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerBucketCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerBucketCollectionResponse;
}
