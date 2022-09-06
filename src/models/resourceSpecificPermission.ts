import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceSpecificPermission implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Describes the level of access that the resource-specific permission represents. */
    private _description?: string | undefined;
    /** The display name for the resource-specific permission. */
    private _displayName?: string | undefined;
    /** The unique identifier for the resource-specific application permission. */
    private _id?: string | undefined;
    /** Indicates whether the permission is enabled. */
    private _isEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The value of the permission. */
    private _value?: string | undefined;
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
     * Instantiates a new resourceSpecificPermission and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.resourceSpecificPermission";
    };
    /**
     * Gets the description property value. Describes the level of access that the resource-specific permission represents.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Describes the level of access that the resource-specific permission represents.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name for the resource-specific permission.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the resource-specific permission.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The unique identifier for the resource-specific application permission.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The unique identifier for the resource-specific application permission.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the isEnabled property value. Indicates whether the permission is enabled.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether the permission is enabled.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
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
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value of the permission.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value of the permission.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
