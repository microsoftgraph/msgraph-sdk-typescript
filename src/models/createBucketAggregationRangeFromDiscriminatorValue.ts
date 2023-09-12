import { deserializeIntoBucketAggregationRange } from './deserializeIntoBucketAggregationRange';
import { type BucketAggregationRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBucketAggregationRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBucketAggregationRange;
}
