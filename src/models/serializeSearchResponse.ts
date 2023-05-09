import {AlterationResponse} from './alterationResponse';
import {ResultTemplateDictionary} from './resultTemplateDictionary';
import {SearchHitsContainer} from './searchHitsContainer';
import {SearchResponse} from './searchResponse';
import {serializeAlterationResponse} from './serializeAlterationResponse';
import {serializeResultTemplateDictionary} from './serializeResultTemplateDictionary';
import {serializeSearchHitsContainer} from './serializeSearchHitsContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchResponse(writer: SerializationWriter, searchResponse: SearchResponse | undefined = {} as SearchResponse) : void {
        writer.writeCollectionOfObjectValues<SearchHitsContainer>("hitsContainers", searchResponse.hitsContainers, serializeSearchHitsContainer);
        writer.writeStringValue("@odata.type", searchResponse.odataType);
        writer.writeObjectValue<AlterationResponse>("queryAlterationResponse", searchResponse.queryAlterationResponse, serializeAlterationResponse);
        writer.writeObjectValue<ResultTemplateDictionary>("resultTemplates", searchResponse.resultTemplates, serializeResultTemplateDictionary);
        writer.writeCollectionOfPrimitiveValues<string>("searchTerms", searchResponse.searchTerms);
        writer.writeAdditionalData(searchResponse.additionalData);
}
