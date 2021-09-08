import {SearchHitsContainer} from './searchHitsContainer';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Query implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A collection of search results.  */
    private _hitsContainers?: SearchHitsContainer[] | undefined;
    /** Contains the search terms sent in the initial search query.  */
    private _searchTerms?: string[] | undefined;
    /**
     * Instantiates a new query and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the hitsContainers property value. A collection of search results.
     * @returns a searchHitsContainer
     */
    public get hitsContainers() {
        return this._hitsContainers;
    };
    /**
     * Gets the searchTerms property value. Contains the search terms sent in the initial search query.
     * @returns a string
     */
    public get searchTerms() {
        return this._searchTerms;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["hitsContainers", (o, n) => { (o as unknown as Query).hitsContainers = n.getCollectionOfObjectValues<SearchHitsContainer>(SearchHitsContainer); }],
            ["searchTerms", (o, n) => { (o as unknown as Query).searchTerms = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SearchHitsContainer>("hitsContainers", this.hitsContainers);
        writer.writeCollectionOfPrimitiveValues<string>("searchTerms", this.searchTerms);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the hitsContainers property value. A collection of search results.
     * @param value Value to set for the hitsContainers property.
     */
    public set hitsContainers(value: SearchHitsContainer[] | undefined) {
        this._hitsContainers = value;
    };
    /**
     * Sets the searchTerms property value. Contains the search terms sent in the initial search query.
     * @param value Value to set for the searchTerms property.
     */
    public set searchTerms(value: string[] | undefined) {
        this._searchTerms = value;
    };
}
