import type {BucketAggregationDefinition} from './bucketAggregationDefinition';
import type {BucketAggregationRange} from './bucketAggregationRange';
import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {serializeBucketAggregationRange} from './serializeBucketAggregationRange';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationDefinition(writer: SerializationWriter, bucketAggregationDefinition: BucketAggregationDefinition | undefined = {} as BucketAggregationDefinition) : void {
        writer.writeBooleanValue("isDescending", bucketAggregationDefinition.isDescending);
        writer.writeNumberValue("minimumCount", bucketAggregationDefinition.minimumCount);
        writer.writeStringValue("@odata.type", bucketAggregationDefinition.odataType);
        writer.writeStringValue("prefixFilter", bucketAggregationDefinition.prefixFilter);
        writer.writeCollectionOfObjectValues<BucketAggregationRange>("ranges", bucketAggregationDefinition.ranges, serializeBucketAggregationRange);
        writer.writeEnumValue<BucketAggregationSortProperty>("sortBy", bucketAggregationDefinition.sortBy);
        writer.writeAdditionalData(bucketAggregationDefinition.additionalData);
}
