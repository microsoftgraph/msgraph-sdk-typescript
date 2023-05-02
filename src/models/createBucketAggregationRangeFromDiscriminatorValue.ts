import {deserializeIntoBucketAggregationRange} from './deserializeIntoBucketAggregationRange';
import {BucketAggregationRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBucketAggregationRange;
}
