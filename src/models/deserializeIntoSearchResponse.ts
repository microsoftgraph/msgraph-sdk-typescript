import {AlterationResponse} from './alterationResponse';
import {createAlterationResponseFromDiscriminatorValue} from './createAlterationResponseFromDiscriminatorValue';
import {createResultTemplateDictionaryFromDiscriminatorValue} from './createResultTemplateDictionaryFromDiscriminatorValue';
import {createSearchHitsContainerFromDiscriminatorValue} from './createSearchHitsContainerFromDiscriminatorValue';
import {ResultTemplateDictionary} from './resultTemplateDictionary';
import {SearchHitsContainer} from './searchHitsContainer';
import {SearchResponse} from './searchResponse';
import {serializeAlterationResponse} from './serializeAlterationResponse';
import {serializeResultTemplateDictionary} from './serializeResultTemplateDictionary';
import {serializeSearchHitsContainer} from './serializeSearchHitsContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResponse(searchResponse: SearchResponse | undefined = {} as SearchResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "hitsContainers": n => { searchResponse.hitsContainers = n.getCollectionOfObjectValues<SearchHitsContainer>(createSearchHitsContainerFromDiscriminatorValue); },
        "@odata.type": n => { searchResponse.odataType = n.getStringValue(); },
        "queryAlterationResponse": n => { searchResponse.queryAlterationResponse = n.getObjectValue<AlterationResponse>(createAlterationResponseFromDiscriminatorValue); },
        "resultTemplates": n => { searchResponse.resultTemplates = n.getObjectValue<ResultTemplateDictionary>(createResultTemplateDictionaryFromDiscriminatorValue); },
        "searchTerms": n => { searchResponse.searchTerms = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
