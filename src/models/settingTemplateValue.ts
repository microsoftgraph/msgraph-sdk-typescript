import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingTemplateValue implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Default value for the setting. Read-only. */
    private _defaultValue?: string | undefined;
    /** Description of the setting. Read-only. */
    private _description?: string | undefined;
    /** Name of the setting. Read-only. */
    private _name?: string | undefined;
    /** Type of the setting. Read-only. */
    private _type?: string | undefined;
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
     * Instantiates a new settingTemplateValue and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the defaultValue property value. Default value for the setting. Read-only.
     * @returns a string
     */
    public get defaultValue() {
        return this._defaultValue;
    };
    /**
     * Sets the defaultValue property value. Default value for the setting. Read-only.
     * @param value Value to set for the defaultValue property.
     */
    public set defaultValue(value: string | undefined) {
        this._defaultValue = value;
    };
    /**
     * Gets the description property value. Description of the setting. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the setting. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "defaultValue": n => { this.defaultValue = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the setting. Read-only.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the setting. Read-only.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("defaultValue", this.defaultValue);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Type of the setting. Read-only.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of the setting. Read-only.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
