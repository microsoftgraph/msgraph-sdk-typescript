import {AggregationOption} from './aggregationOption';
import {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {serializeBucketAggregationDefinition} from './serializeBucketAggregationDefinition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAggregationOption(aggregationOption: AggregationOption | undefined = {} as AggregationOption, writer: SerializationWriter) : void {
        writer.writeObjectValue<BucketAggregationDefinition>("bucketDefinition", aggregationOption.bucketDefinition, serializeBucketAggregationDefinition);
        writer.writeStringValue("field", aggregationOption.field);
        writer.writeStringValue("@odata.type", aggregationOption.odataType);
        writer.writeNumberValue("size", aggregationOption.size);
        writer.writeAdditionalData(aggregationOption.additionalData);
}
