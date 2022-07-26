import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessageViewpoint implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether the user archived the message. */
    private _isArchived?: boolean | undefined;
    /** Indicates whether the user marked the message as favorite. */
    private _isFavorited?: boolean | undefined;
    /** Indicates whether the user read the message. */
    private _isRead?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new serviceUpdateMessageViewpoint and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.serviceUpdateMessageViewpoint";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isArchived": n => { this.isArchived = n.getBooleanValue(); },
            "isFavorited": n => { this.isFavorited = n.getBooleanValue(); },
            "isRead": n => { this.isRead = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isArchived property value. Indicates whether the user archived the message.
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Sets the isArchived property value. Indicates whether the user archived the message.
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        this._isArchived = value;
    };
    /**
     * Gets the isFavorited property value. Indicates whether the user marked the message as favorite.
     * @returns a boolean
     */
    public get isFavorited() {
        return this._isFavorited;
    };
    /**
     * Sets the isFavorited property value. Indicates whether the user marked the message as favorite.
     * @param value Value to set for the isFavorited property.
     */
    public set isFavorited(value: boolean | undefined) {
        this._isFavorited = value;
    };
    /**
     * Gets the isRead property value. Indicates whether the user read the message.
     * @returns a boolean
     */
    public get isRead() {
        return this._isRead;
    };
    /**
     * Sets the isRead property value. Indicates whether the user read the message.
     * @param value Value to set for the isRead property.
     */
    public set isRead(value: boolean | undefined) {
        this._isRead = value;
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
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeBooleanValue("isFavorited", this.isFavorited);
        writer.writeBooleanValue("isRead", this.isRead);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
