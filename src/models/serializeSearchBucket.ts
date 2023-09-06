import { type SearchBucket } from './searchBucket';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSearchBucket(writer: SerializationWriter, searchBucket: SearchBucket | undefined = {} as SearchBucket) : void {
        writer.writeStringValue("aggregationFilterToken", searchBucket.aggregationFilterToken);
        writer.writeNumberValue("count", searchBucket.count);
        writer.writeStringValue("key", searchBucket.key);
        writer.writeStringValue("@odata.type", searchBucket.odataType);
        writer.writeAdditionalData(searchBucket.additionalData);
}
