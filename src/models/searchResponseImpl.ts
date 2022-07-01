import {AlterationResponse} from './alterationResponse';
import {createAlterationResponseFromDiscriminatorValue} from './createAlterationResponseFromDiscriminatorValue';
import {createResultTemplateDictionaryFromDiscriminatorValue} from './createResultTemplateDictionaryFromDiscriminatorValue';
import {createSearchHitsContainerFromDiscriminatorValue} from './createSearchHitsContainerFromDiscriminatorValue';
import {AlterationResponseImpl, ResultTemplateDictionaryImpl, SearchHitsContainerImpl} from './index';
import {ResultTemplateDictionary} from './resultTemplateDictionary';
import {SearchHitsContainer} from './searchHitsContainer';
import {SearchResponse} from './searchResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchResponseImpl implements SearchResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** A collection of search results. */
    private _hitsContainers?: SearchHitsContainer[] | undefined;
    /** Provides details of query alteration response for spelling correction. */
    private _queryAlterationResponse?: AlterationResponse | undefined;
    /** A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates. */
    private _resultTemplates?: ResultTemplateDictionary | undefined;
    /** Contains the search terms sent in the initial search query. */
    private _searchTerms?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new searchResponse and sets the default values.
     * @param searchResponseParameterValue 
     */
    public constructor(searchResponseParameterValue?: SearchResponse | undefined) {
        this._additionalData = searchResponseParameterValue?.additionalData ? searchResponseParameterValue?.additionalData! : {};
        this._hitsContainers = searchResponseParameterValue?.hitsContainers;
        this._queryAlterationResponse = searchResponseParameterValue?.queryAlterationResponse;
        this._resultTemplates = searchResponseParameterValue?.resultTemplates;
        this._searchTerms = searchResponseParameterValue?.searchTerms;
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
     * Gets the hitsContainers property value. A collection of search results.
     * @returns a SearchHitsContainerInterface
     */
    public get hitsContainers() {
        return this._hitsContainers;
    };
    /**
     * Sets the hitsContainers property value. A collection of search results.
     * @param value Value to set for the hitsContainers property.
     */
    public set hitsContainers(value: SearchHitsContainer[] | undefined) {
        if(value) {
            const hitsContainersArrValue: SearchHitsContainerImpl[] = [];
            this.hitsContainers?.forEach(element => {
                hitsContainersArrValue.push((element instanceof SearchHitsContainerImpl? element as SearchHitsContainerImpl:new SearchHitsContainerImpl(element)));
            });
            this._hitsContainers = hitsContainersArrValue;
        }
    };
    /**
     * Gets the queryAlterationResponse property value. Provides details of query alteration response for spelling correction.
     * @returns a AlterationResponseInterface
     */
    public get queryAlterationResponse() {
        return this._queryAlterationResponse;
    };
    /**
     * Sets the queryAlterationResponse property value. Provides details of query alteration response for spelling correction.
     * @param value Value to set for the queryAlterationResponse property.
     */
    public set queryAlterationResponse(value: AlterationResponse | undefined) {
        if(value) {
            this._queryAlterationResponse = value instanceof AlterationResponseImpl? value as AlterationResponseImpl: new AlterationResponseImpl(value);
        }
    };
    /**
     * Gets the resultTemplates property value. A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     * @returns a ResultTemplateDictionaryInterface
     */
    public get resultTemplates() {
        return this._resultTemplates;
    };
    /**
     * Sets the resultTemplates property value. A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     * @param value Value to set for the resultTemplates property.
     */
    public set resultTemplates(value: ResultTemplateDictionary | undefined) {
        if(value) {
            this._resultTemplates = value instanceof ResultTemplateDictionaryImpl? value as ResultTemplateDictionaryImpl: new ResultTemplateDictionaryImpl(value);
        }
    };
    /**
     * Gets the searchTerms property value. Contains the search terms sent in the initial search query.
     * @returns a string
     */
    public get searchTerms() {
        return this._searchTerms;
    };
    /**
     * Sets the searchTerms property value. Contains the search terms sent in the initial search query.
     * @param value Value to set for the searchTerms property.
     */
    public set searchTerms(value: string[] | undefined) {
        if(value) {
            this._searchTerms = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hitsContainers && this.hitsContainers.length != 0){        const hitsContainersArrValue: SearchHitsContainerImpl[] = [];
        this.hitsContainers?.forEach(element => {
            hitsContainersArrValue.push((element instanceof SearchHitsContainerImpl? element as SearchHitsContainerImpl:new SearchHitsContainerImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SearchHitsContainerImpl>("hitsContainers", hitsContainersArrValue);
        }
        if(this.queryAlterationResponse){
            writer.writeObjectValue<AlterationResponseImpl>("queryAlterationResponse", (this.queryAlterationResponse instanceof AlterationResponseImpl? this.queryAlterationResponse as AlterationResponseImpl: new AlterationResponseImpl(this.queryAlterationResponse)));
        }
        if(this.resultTemplates){
            writer.writeObjectValue<ResultTemplateDictionaryImpl>("resultTemplates", (this.resultTemplates instanceof ResultTemplateDictionaryImpl? this.resultTemplates as ResultTemplateDictionaryImpl: new ResultTemplateDictionaryImpl(this.resultTemplates)));
        }
        if(this.searchTerms){
            writer.writeCollectionOfPrimitiveValues<string>("searchTerms", this.searchTerms);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
