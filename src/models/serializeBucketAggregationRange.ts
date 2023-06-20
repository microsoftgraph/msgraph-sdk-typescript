import {BucketAggregationRange} from './bucketAggregationRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationRange(bucketAggregationRange: BucketAggregationRange | undefined = {} as BucketAggregationRange, writer: SerializationWriter) : void {
        writer.writeStringValue("from", bucketAggregationRange.from);
        writer.writeStringValue("@odata.type", bucketAggregationRange.odataType);
        writer.writeStringValue("to", bucketAggregationRange.to);
        writer.writeAdditionalData(bucketAggregationRange.additionalData);
}
