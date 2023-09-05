import { type SearchResult } from './searchResult';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResult(searchResult: SearchResult | undefined = {} as SearchResult) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchResult.odataType = n.getStringValue(); },
        "onClickTelemetryUrl": n => { searchResult.onClickTelemetryUrl = n.getStringValue(); },
    }
}
