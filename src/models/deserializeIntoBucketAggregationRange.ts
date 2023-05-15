import {BucketAggregationRange} from './bucketAggregationRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBucketAggregationRange(bucketAggregationRange: BucketAggregationRange | undefined = {} as BucketAggregationRange) : Record<string, (node: ParseNode) => void> {
    return {
        "from": n => { bucketAggregationRange.from = n.getStringValue(); },
        "@odata.type": n => { bucketAggregationRange.odataType = n.getStringValue(); },
        "to": n => { bucketAggregationRange.to = n.getStringValue(); },
    }
}
