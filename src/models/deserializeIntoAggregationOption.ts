import {AggregationOption} from './aggregationOption';
import {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {createBucketAggregationDefinitionFromDiscriminatorValue} from './createBucketAggregationDefinitionFromDiscriminatorValue';
import {serializeBucketAggregationDefinition} from './serializeBucketAggregationDefinition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAggregationOption(aggregationOption: AggregationOption | undefined = {} as AggregationOption) : Record<string, (node: ParseNode) => void> {
    return {
        "bucketDefinition": n => { aggregationOption.bucketDefinition = n.getObjectValue<BucketAggregationDefinition>(createBucketAggregationDefinitionFromDiscriminatorValue); },
        "field": n => { aggregationOption.field = n.getStringValue(); },
        "@odata.type": n => { aggregationOption.odataType = n.getStringValue(); },
        "size": n => { aggregationOption.size = n.getNumberValue(); },
    }
}
