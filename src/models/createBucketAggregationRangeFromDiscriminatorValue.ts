import {BucketAggregationRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : BucketAggregationRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BucketAggregationRangeImpl();
}
