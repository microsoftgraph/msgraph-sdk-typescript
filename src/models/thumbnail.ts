import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Thumbnail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The content stream for the thumbnail. */
    private _content?: string | undefined;
    /** The height of the thumbnail, in pixels. */
    private _height?: number | undefined;
    private _odataType?: string | undefined;
    /** The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested. */
    private _sourceItemId?: string | undefined;
    /** The URL used to fetch the thumbnail content. */
    private _url?: string | undefined;
    /** The width of the thumbnail, in pixels. */
    private _width?: number | undefined;
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
     * Instantiates a new thumbnail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the content property value. The content stream for the thumbnail.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content stream for the thumbnail.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "content": n => { this.content = n.getStringValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sourceItemId": n => { this.sourceItemId = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. The height of the thumbnail, in pixels.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. The height of the thumbnail, in pixels.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("content", this.content);
        writer.writeNumberValue("height", this.height);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("sourceItemId", this.sourceItemId);
        writer.writeStringValue("url", this.url);
        writer.writeNumberValue("width", this.width);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceItemId property value. The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested.
     * @returns a string
     */
    public get sourceItemId() {
        return this._sourceItemId;
    };
    /**
     * Sets the sourceItemId property value. The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested.
     * @param value Value to set for the sourceItemId property.
     */
    public set sourceItemId(value: string | undefined) {
        this._sourceItemId = value;
    };
    /**
     * Gets the url property value. The URL used to fetch the thumbnail content.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The URL used to fetch the thumbnail content.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
    /**
     * Gets the width property value. The width of the thumbnail, in pixels.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. The width of the thumbnail, in pixels.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
