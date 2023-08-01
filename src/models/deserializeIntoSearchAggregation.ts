import {createSearchBucketFromDiscriminatorValue} from './createSearchBucketFromDiscriminatorValue';
import type {SearchAggregation} from './searchAggregation';
import type {SearchBucket} from './searchBucket';
import {serializeSearchBucket} from './serializeSearchBucket';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAggregation(searchAggregation: SearchAggregation | undefined = {} as SearchAggregation) : Record<string, (node: ParseNode) => void> {
    return {
        "buckets": n => { searchAggregation.buckets = n.getCollectionOfObjectValues<SearchBucket>(createSearchBucketFromDiscriminatorValue); },
        "field": n => { searchAggregation.field = n.getStringValue(); },
        "@odata.type": n => { searchAggregation.odataType = n.getStringValue(); },
    }
}
