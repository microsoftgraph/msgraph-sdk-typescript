import {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {BucketAggregationRange} from './bucketAggregationRange';
import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {serializeBucketAggregationRange} from './serializeBucketAggregationRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationDefinition(bucketAggregationDefinition: BucketAggregationDefinition | undefined = {} as BucketAggregationDefinition, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isDescending", bucketAggregationDefinition.isDescending);
        writer.writeNumberValue("minimumCount", bucketAggregationDefinition.minimumCount);
        writer.writeStringValue("@odata.type", bucketAggregationDefinition.odataType);
        writer.writeStringValue("prefixFilter", bucketAggregationDefinition.prefixFilter);
        writer.writeCollectionOfObjectValues<BucketAggregationRange>("ranges", bucketAggregationDefinition.ranges, serializeBucketAggregationRange);
        writer.writeEnumValue<BucketAggregationSortProperty>("sortBy", bucketAggregationDefinition.sortBy);
        writer.writeAdditionalData(bucketAggregationDefinition.additionalData);
}
