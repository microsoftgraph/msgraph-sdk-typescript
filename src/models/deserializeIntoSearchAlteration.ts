import {AlteredQueryToken} from './alteredQueryToken';
import {createAlteredQueryTokenFromDiscriminatorValue} from './createAlteredQueryTokenFromDiscriminatorValue';
import {SearchAlteration} from './searchAlteration';
import {serializeAlteredQueryToken} from './serializeAlteredQueryToken';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAlteration(searchAlteration: SearchAlteration | undefined = {} as SearchAlteration) : Record<string, (node: ParseNode) => void> {
    return {
        "alteredHighlightedQueryString": n => { searchAlteration.alteredHighlightedQueryString = n.getStringValue(); },
        "alteredQueryString": n => { searchAlteration.alteredQueryString = n.getStringValue(); },
        "alteredQueryTokens": n => { searchAlteration.alteredQueryTokens = n.getCollectionOfObjectValues<AlteredQueryToken>(createAlteredQueryTokenFromDiscriminatorValue); },
        "@odata.type": n => { searchAlteration.odataType = n.getStringValue(); },
    }
}
