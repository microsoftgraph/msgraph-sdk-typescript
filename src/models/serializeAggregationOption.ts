import type {AggregationOption} from './aggregationOption';
import type {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {serializeBucketAggregationDefinition} from './serializeBucketAggregationDefinition';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAggregationOption(writer: SerializationWriter, aggregationOption: AggregationOption | undefined = {} as AggregationOption) : void {
        writer.writeObjectValue<BucketAggregationDefinition>("bucketDefinition", aggregationOption.bucketDefinition, serializeBucketAggregationDefinition);
        writer.writeStringValue("field", aggregationOption.field);
        writer.writeStringValue("@odata.type", aggregationOption.odataType);
        writer.writeNumberValue("size", aggregationOption.size);
        writer.writeAdditionalData(aggregationOption.additionalData);
}
