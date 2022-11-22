import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetVersionItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The unique identifier for the item. */
    private _itemId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The title of the item. */
    private _title?: string | undefined;
    /** The version ID of the item. */
    private _versionId?: string | undefined;
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
     * Instantiates a new documentSetVersionItem and sets the default values.
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
            "itemId": n => { this.itemId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "versionId": n => { this.versionId = n.getStringValue(); },
        };
    };
    /**
     * Gets the itemId property value. The unique identifier for the item.
     * @returns a string
     */
    public get itemId() {
        return this._itemId;
    };
    /**
     * Sets the itemId property value. The unique identifier for the item.
     * @param value Value to set for the itemId property.
     */
    public set itemId(value: string | undefined) {
        this._itemId = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("itemId", this.itemId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("versionId", this.versionId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the title property value. The title of the item.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title of the item.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the versionId property value. The version ID of the item.
     * @returns a string
     */
    public get versionId() {
        return this._versionId;
    };
    /**
     * Sets the versionId property value. The version ID of the item.
     * @param value Value to set for the versionId property.
     */
    public set versionId(value: string | undefined) {
        this._versionId = value;
    };
}
