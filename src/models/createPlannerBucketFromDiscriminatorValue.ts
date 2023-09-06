import { deserializeIntoPlannerBucket } from './deserializeIntoPlannerBucket';
import { type PlannerBucket } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerBucketFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerBucket;
}
