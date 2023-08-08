import type {BucketAggregationDefinition} from './bucketAggregationDefinition';
import type {BucketAggregationRange} from './bucketAggregationRange';
import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {createBucketAggregationRangeFromDiscriminatorValue} from './createBucketAggregationRangeFromDiscriminatorValue';
import {serializeBucketAggregationRange} from './serializeBucketAggregationRange';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBucketAggregationDefinition(bucketAggregationDefinition: BucketAggregationDefinition | undefined = {} as BucketAggregationDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        "isDescending": n => { bucketAggregationDefinition.isDescending = n.getBooleanValue(); },
        "minimumCount": n => { bucketAggregationDefinition.minimumCount = n.getNumberValue(); },
        "@odata.type": n => { bucketAggregationDefinition.odataType = n.getStringValue(); },
        "prefixFilter": n => { bucketAggregationDefinition.prefixFilter = n.getStringValue(); },
        "ranges": n => { bucketAggregationDefinition.ranges = n.getCollectionOfObjectValues<BucketAggregationRange>(createBucketAggregationRangeFromDiscriminatorValue); },
        "sortBy": n => { bucketAggregationDefinition.sortBy = n.getEnumValue<BucketAggregationSortProperty>(BucketAggregationSortProperty); },
    }
}
