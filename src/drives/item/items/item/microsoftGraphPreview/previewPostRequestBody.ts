import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PreviewPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The page property */
    private _page?: string | undefined;
    /** The zoom property */
    private _zoom?: number | undefined;
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
     * Instantiates a new previewPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "page": n => { this.page = n.getStringValue(); },
            "zoom": n => { this.zoom = n.getNumberValue(); },
        };
    };
    /**
     * Gets the page property value. The page property
     * @returns a string
     */
    public get page() {
        return this._page;
    };
    /**
     * Sets the page property value. The page property
     * @param value Value to set for the page property.
     */
    public set page(value: string | undefined) {
        this._page = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("page", this.page);
        writer.writeNumberValue("zoom", this.zoom);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the zoom property value. The zoom property
     * @returns a double
     */
    public get zoom() {
        return this._zoom;
    };
    /**
     * Sets the zoom property value. The zoom property
     * @param value Value to set for the zoom property.
     */
    public set zoom(value: number | undefined) {
        this._zoom = value;
    };
}
