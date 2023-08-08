import type {SearchAggregation} from './searchAggregation';
import type {SearchBucket} from './searchBucket';
import {serializeSearchBucket} from './serializeSearchBucket';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAggregation(writer: SerializationWriter, searchAggregation: SearchAggregation | undefined = {} as SearchAggregation) : void {
        writer.writeCollectionOfObjectValues<SearchBucket>("buckets", searchAggregation.buckets, serializeSearchBucket);
        writer.writeStringValue("field", searchAggregation.field);
        writer.writeStringValue("@odata.type", searchAggregation.odataType);
        writer.writeAdditionalData(searchAggregation.additionalData);
}
