import {SearchResult} from './searchResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResult(searchResult: SearchResult | undefined = {} as SearchResult) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchResult.odataType = n.getStringValue(); },
        "onClickTelemetryUrl": n => { searchResult.onClickTelemetryUrl = n.getStringValue(); },
    }
}
