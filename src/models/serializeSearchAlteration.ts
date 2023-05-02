import {AlteredQueryToken} from './alteredQueryToken';
import {SearchAlteration} from './searchAlteration';
import {serializeAlteredQueryToken} from './serializeAlteredQueryToken';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAlteration(writer: SerializationWriter, searchAlteration: SearchAlteration | undefined = {} as SearchAlteration) : void {
        writer.writeStringValue("alteredHighlightedQueryString", searchAlteration.alteredHighlightedQueryString);
        writer.writeStringValue("alteredQueryString", searchAlteration.alteredQueryString);
        writer.writeCollectionOfObjectValues<AlteredQueryToken>("alteredQueryTokens", searchAlteration.alteredQueryTokens, serializeAlteredQueryToken);
        writer.writeStringValue("@odata.type", searchAlteration.odataType);
        writer.writeAdditionalData(searchAlteration.additionalData);
}
