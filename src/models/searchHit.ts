import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {Entity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchHit implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name of the content source which the externalItem is part of . */
    private _contentSource?: string | undefined;
    /** The internal identifier for the item. */
    private _hitId?: string | undefined;
    /** The rank or the order of the result. */
    private _rank?: number | undefined;
    /** The resource property */
    private _resource?: Entity | undefined;
    /** ID of the result template for rendering the search result. This ID must map to a display layout in the resultTemplates dictionary, included in the searchresponse as well. */
    private _resultTemplateId?: string | undefined;
    /** A summary of the result, if a summary is available. */
    private _summary?: string | undefined;
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
     * Instantiates a new searchHit and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contentSource property value. The name of the content source which the externalItem is part of .
     * @returns a string
     */
    public get contentSource() {
        return this._contentSource;
    };
    /**
     * Sets the contentSource property value. The name of the content source which the externalItem is part of .
     * @param value Value to set for the contentSource property.
     */
    public set contentSource(value: string | undefined) {
        this._contentSource = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentSource": n => { this.contentSource = n.getStringValue(); },
            "hitId": n => { this.hitId = n.getStringValue(); },
            "rank": n => { this.rank = n.getNumberValue(); },
            "resource": n => { this.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "resultTemplateId": n => { this.resultTemplateId = n.getStringValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
        };
    };
    /**
     * Gets the hitId property value. The internal identifier for the item.
     * @returns a string
     */
    public get hitId() {
        return this._hitId;
    };
    /**
     * Sets the hitId property value. The internal identifier for the item.
     * @param value Value to set for the hitId property.
     */
    public set hitId(value: string | undefined) {
        this._hitId = value;
    };
    /**
     * Gets the rank property value. The rank or the order of the result.
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. The rank or the order of the result.
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Gets the resource property value. The resource property
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. The resource property
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resultTemplateId property value. ID of the result template for rendering the search result. This ID must map to a display layout in the resultTemplates dictionary, included in the searchresponse as well.
     * @returns a string
     */
    public get resultTemplateId() {
        return this._resultTemplateId;
    };
    /**
     * Sets the resultTemplateId property value. ID of the result template for rendering the search result. This ID must map to a display layout in the resultTemplates dictionary, included in the searchresponse as well.
     * @param value Value to set for the resultTemplateId property.
     */
    public set resultTemplateId(value: string | undefined) {
        this._resultTemplateId = value;
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
        writer.writeStringValue("resultTemplateId", this.resultTemplateId);
        writer.writeStringValue("summary", this.summary);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the summary property value. A summary of the result, if a summary is available.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. A summary of the result, if a summary is available.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
}
