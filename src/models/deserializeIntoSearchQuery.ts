import { type SearchQuery } from './searchQuery';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchQuery(searchQuery: SearchQuery | undefined = {} as SearchQuery) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchQuery.odataType = n.getStringValue(); },
        "queryString": n => { searchQuery.queryString = n.getStringValue(); },
        "queryTemplate": n => { searchQuery.queryTemplate = n.getStringValue(); },
    }
}
