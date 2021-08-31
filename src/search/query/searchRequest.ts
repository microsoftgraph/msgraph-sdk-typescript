import {SearchQuery} from './searchQuery';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class SearchRequest implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.  */
    private _contentSources?: string[] | undefined;
    /** This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.  */
    private _enableTopResults?: boolean | undefined;
    /** One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.  */
    private _entityTypes?: EntityType[] | undefined;
    /** Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.  */
    private _fields?: string[] | undefined;
    /** Specifies the offset for the search results. Offset 0 returns the very first result. Optional.  */
    private _from?: number | undefined;
    private _query?: SearchQuery | undefined;
    /** The size of the page to be retrieved. Optional.  */
    private _size?: number | undefined;
    /**
     * Instantiates a new searchRequest and sets the default values.
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
     * Gets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
     * @returns a string
     */
    public get contentSources() {
        return this._contentSources;
    };
    /**
     * Gets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     * @returns a boolean
     */
    public get enableTopResults() {
        return this._enableTopResults;
    };
    /**
     * Gets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     * @returns a entityType
     */
    public get entityTypes() {
        return this._entityTypes;
    };
    /**
     * Gets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
     * @returns a string
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Gets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     * @returns a integer
     */
    public get from() {
        return this._from;
    };
    /**
     * Gets the query property value. 
     * @returns a searchQuery
     */
    public get query() {
        return this._query;
    };
    /**
     * Gets the size property value. The size of the page to be retrieved. Optional.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contentSources", (o, n) => { (o as unknown as SearchRequest).contentSources = n.getCollectionOfPrimitiveValues<string>(); }],
            ["enableTopResults", (o, n) => { (o as unknown as SearchRequest).enableTopResults = n.getBooleanValue(); }],
            ["entityTypes", (o, n) => { (o as unknown as SearchRequest).entityTypes = n.getCollectionOfPrimitiveValues<entityType>(); }],
            ["fields", (o, n) => { (o as unknown as SearchRequest).fields = n.getCollectionOfPrimitiveValues<string>(); }],
            ["from", (o, n) => { (o as unknown as SearchRequest).from = n.getNumberValue(); }],
            ["query", (o, n) => { (o as unknown as SearchRequest).query = n.getObjectValue<SearchQuery>(SearchQuery); }],
            ["size", (o, n) => { (o as unknown as SearchRequest).size = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("contentSources", this.contentSources);
        writer.writeBooleanValue("enableTopResults", this.enableTopResults);
        writer.writeCollectionOfPrimitiveValues<entityType>("entityTypes", this.entityTypes);
        writer.writeCollectionOfPrimitiveValues<string>("fields", this.fields);
        writer.writeNumberValue("from", this.from);
        writer.writeObjectValue<SearchQuery>("query", this.query);
        writer.writeNumberValue("size", this.size);
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
     * Sets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
     * @param value Value to set for the contentSources property.
     */
    public set contentSources(value: string[] | undefined) {
        this._contentSources = value;
    };
    /**
     * Sets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     * @param value Value to set for the enableTopResults property.
     */
    public set enableTopResults(value: boolean | undefined) {
        this._enableTopResults = value;
    };
    /**
     * Sets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     * @param value Value to set for the entityTypes property.
     */
    public set entityTypes(value: EntityType[] | undefined) {
        this._entityTypes = value;
    };
    /**
     * Sets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
     * @param value Value to set for the fields property.
     */
    public set fields(value: string[] | undefined) {
        this._fields = value;
    };
    /**
     * Sets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     * @param value Value to set for the from property.
     */
    public set from(value: number | undefined) {
        this._from = value;
    };
    /**
     * Sets the query property value. 
     * @param value Value to set for the query property.
     */
    public set query(value: SearchQuery | undefined) {
        this._query = value;
    };
    /**
     * Sets the size property value. The size of the page to be retrieved. Optional.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
