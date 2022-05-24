import {AlterationResponse} from './alterationResponse';
import {createAlterationResponseFromDiscriminatorValue} from './createAlterationResponseFromDiscriminatorValue';
import {createResultTemplateDictionaryFromDiscriminatorValue} from './createResultTemplateDictionaryFromDiscriminatorValue';
import {createSearchHitsContainerFromDiscriminatorValue} from './createSearchHitsContainerFromDiscriminatorValue';
import {AlterationResponseImpl, ResultTemplateDictionaryImpl, SearchHitsContainerImpl} from './index';
import {ResultTemplateDictionary} from './resultTemplateDictionary';
import {SearchHitsContainer} from './searchHitsContainer';
import {SearchResponse} from './searchResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchResponseImpl implements AdditionalDataHolder, Parsable, SearchResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A collection of search results. */
    public hitsContainers?: SearchHitsContainer[] | undefined;
    /** Provides details of query alteration response for spelling correction. */
    public queryAlterationResponse?: AlterationResponse | undefined;
    /** A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates. */
    public resultTemplates?: ResultTemplateDictionary | undefined;
    /** Contains the search terms sent in the initial search query. */
    public searchTerms?: string[] | undefined;
    /**
     * Instantiates a new searchResponse and sets the default values.
     * @param searchResponseParameterValue 
     */
    public constructor(searchResponseParameterValue?: SearchResponse | undefined) {
        this.additionalData = searchResponseParameterValue?.additionalData ? searchResponseParameterValue?.additionalData! : {}
        this.hitsContainers = searchResponseParameterValue?.hitsContainers ;
        this.queryAlterationResponse = searchResponseParameterValue?.queryAlterationResponse ;
        this.resultTemplates = searchResponseParameterValue?.resultTemplates ;
        this.searchTerms = searchResponseParameterValue?.searchTerms ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hitsContainers": n => { this.hitsContainers = n.getCollectionOfObjectValues<SearchHitsContainerImpl>(createSearchHitsContainerFromDiscriminatorValue); },
            "queryAlterationResponse": n => { this.queryAlterationResponse = n.getObjectValue<AlterationResponseImpl>(createAlterationResponseFromDiscriminatorValue); },
            "resultTemplates": n => { this.resultTemplates = n.getObjectValue<ResultTemplateDictionaryImpl>(createResultTemplateDictionaryFromDiscriminatorValue); },
            "searchTerms": n => { this.searchTerms = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hitsContainers && this.hitsContainers.length != 0){        const hitsContainersArrValue: SearchHitsContainerImpl[] = []; this.hitsContainers?.forEach(element => {hitsContainersArrValue.push(new SearchHitsContainerImpl(element));});
        writer.writeCollectionOfObjectValues<SearchHitsContainerImpl>("hitsContainers", hitsContainersArrValue);
        }
        if(this.queryAlterationResponse){
        writer.writeObjectValue<AlterationResponseImpl>("queryAlterationResponse", new AlterationResponseImpl(this.queryAlterationResponse));
        }
        if(this.resultTemplates){
        writer.writeObjectValue<ResultTemplateDictionaryImpl>("resultTemplates", new ResultTemplateDictionaryImpl(this.resultTemplates));
        }
        if(this.searchTerms){
        writer.writeCollectionOfPrimitiveValues<string>("searchTerms", this.searchTerms);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
