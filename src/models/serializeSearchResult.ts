import { type SearchResult } from './searchResult';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSearchResult(writer: SerializationWriter, searchResult: SearchResult | undefined = {} as SearchResult) : void {
        writer.writeStringValue("@odata.type", searchResult.odataType);
        writer.writeStringValue("onClickTelemetryUrl", searchResult.onClickTelemetryUrl);
        writer.writeAdditionalData(searchResult.additionalData);
}
