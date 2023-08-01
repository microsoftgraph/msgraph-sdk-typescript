import type {SearchQuery} from './searchQuery';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchQuery(writer: SerializationWriter, searchQuery: SearchQuery | undefined = {} as SearchQuery) : void {
        writer.writeStringValue("@odata.type", searchQuery.odataType);
        writer.writeStringValue("queryString", searchQuery.queryString);
        writer.writeStringValue("queryTemplate", searchQuery.queryTemplate);
        writer.writeAdditionalData(searchQuery.additionalData);
}
