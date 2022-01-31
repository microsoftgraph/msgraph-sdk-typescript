import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchHit implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The name of the content source which the externalItem is part of .  */
    private _contentSource?: string | undefined;
    /** The internal identifier for the item.  */
    private _hitId?: string | undefined;
    /** The rank or the order of the result.  */
    private _rank?: number | undefined;
    private _resource?: Entity | undefined;
    /** A summary of the result, if a summary is available.  */
    private _summary?: string | undefined;
    /**
     * Instantiates a new searchHit and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the contentSource property value. The name of the content source which the externalItem is part of .
     * @returns a string
     */
    public get contentSource() {
        return this._contentSource;
    };
    /**
     * Gets the hitId property value. The internal identifier for the item.
     * @returns a string
     */
    public get hitId() {
        return this._hitId;
    };
    /**
     * Gets the rank property value. The rank or the order of the result.
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Gets the resource property value. 
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Gets the summary property value. A summary of the result, if a summary is available.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contentSource", (o, n) => { (o as unknown as SearchHit).contentSource = n.getStringValue(); }],
            ["hitId", (o, n) => { (o as unknown as SearchHit).hitId = n.getStringValue(); }],
            ["rank", (o, n) => { (o as unknown as SearchHit).rank = n.getNumberValue(); }],
            ["resource", (o, n) => { (o as unknown as SearchHit).resource = n.getObjectValue<Entity>(Entity); }],
            ["summary", (o, n) => { (o as unknown as SearchHit).summary = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contentSource", this.contentSource);
        writer.writeStringValue("hitId", this.hitId);
        writer.writeNumberValue("rank", this.rank);
        writer.writeObjectValue<Entity>("resource", this.resource);
        writer.writeStringValue("summary", this.summary);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the contentSource property value. The name of the content source which the externalItem is part of .
     * @param value Value to set for the contentSource property.
     */
    public set contentSource(value: string | undefined) {
        this._contentSource = value;
    };
    /**
     * Sets the hitId property value. The internal identifier for the item.
     * @param value Value to set for the hitId property.
     */
    public set hitId(value: string | undefined) {
        this._hitId = value;
    };
    /**
     * Sets the rank property value. The rank or the order of the result.
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Sets the resource property value. 
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Sets the summary property value. A summary of the result, if a summary is available.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
}
