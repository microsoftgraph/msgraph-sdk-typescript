import {createAlterationResponseFromDiscriminatorValue} from './createAlterationResponseFromDiscriminatorValue';
import {createResultTemplateDictionaryFromDiscriminatorValue} from './createResultTemplateDictionaryFromDiscriminatorValue';
import {createSearchHitsContainerFromDiscriminatorValue} from './createSearchHitsContainerFromDiscriminatorValue';
import {AlterationResponse, ResultTemplateDictionary, SearchHitsContainer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A collection of search results. */
    private _hitsContainers?: SearchHitsContainer[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Provides information related to spelling corrections in the alteration response. */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new searchResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.searchResponse";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hitsContainers": n => { this.hitsContainers = n.getCollectionOfObjectValues<SearchHitsContainer>(createSearchHitsContainerFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "queryAlterationResponse": n => { this.queryAlterationResponse = n.getObjectValue<AlterationResponse>(createAlterationResponseFromDiscriminatorValue); },
            "resultTemplates": n => { this.resultTemplates = n.getObjectValue<ResultTemplateDictionary>(createResultTemplateDictionaryFromDiscriminatorValue); },
            "searchTerms": n => { this.searchTerms = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the hitsContainers property value. A collection of search results.
     * @returns a searchHitsContainer
     */
    public get hitsContainers() {
        return this._hitsContainers;
    };
    /**
     * Sets the hitsContainers property value. A collection of search results.
     * @param value Value to set for the hitsContainers property.
     */
    public set hitsContainers(value: SearchHitsContainer[] | undefined) {
        this._hitsContainers = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the queryAlterationResponse property value. Provides information related to spelling corrections in the alteration response.
     * @returns a alterationResponse
     */
    public get queryAlterationResponse() {
        return this._queryAlterationResponse;
    };
    /**
     * Sets the queryAlterationResponse property value. Provides information related to spelling corrections in the alteration response.
     * @param value Value to set for the queryAlterationResponse property.
     */
    public set queryAlterationResponse(value: AlterationResponse | undefined) {
        this._queryAlterationResponse = value;
    };
    /**
     * Gets the resultTemplates property value. A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     * @returns a resultTemplateDictionary
     */
    public get resultTemplates() {
        return this._resultTemplates;
    };
    /**
     * Sets the resultTemplates property value. A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     * @param value Value to set for the resultTemplates property.
     */
    public set resultTemplates(value: ResultTemplateDictionary | undefined) {
        this._resultTemplates = value;
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
        this._searchTerms = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SearchHitsContainer>("hitsContainers", this.hitsContainers);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<AlterationResponse>("queryAlterationResponse", this.queryAlterationResponse);
        writer.writeObjectValue<ResultTemplateDictionary>("resultTemplates", this.resultTemplates);
        writer.writeCollectionOfPrimitiveValues<string>("searchTerms", this.searchTerms);
        writer.writeAdditionalData(this.additionalData);
    };
}
