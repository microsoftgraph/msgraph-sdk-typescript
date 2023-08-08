import type {BucketAggregationRange} from './bucketAggregationRange';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationRange(writer: SerializationWriter, bucketAggregationRange: BucketAggregationRange | undefined = {} as BucketAggregationRange) : void {
        writer.writeStringValue("from", bucketAggregationRange.from);
        writer.writeStringValue("@odata.type", bucketAggregationRange.odataType);
        writer.writeStringValue("to", bucketAggregationRange.to);
        writer.writeAdditionalData(bucketAggregationRange.additionalData);
}
