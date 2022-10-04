import {BucketAggregationRangeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationRangeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BucketAggregationRangeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BucketAggregationRangeCollectionResponse();
}
