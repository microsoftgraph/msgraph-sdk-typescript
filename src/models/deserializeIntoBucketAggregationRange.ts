import { type BucketAggregationRange } from './bucketAggregationRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBucketAggregationRange(bucketAggregationRange: BucketAggregationRange | undefined = {} as BucketAggregationRange) : Record<string, (node: ParseNode) => void> {
    return {
        "from": n => { bucketAggregationRange.from = n.getStringValue(); },
        "@odata.type": n => { bucketAggregationRange.odataType = n.getStringValue(); },
        "to": n => { bucketAggregationRange.to = n.getStringValue(); },
    }
}
