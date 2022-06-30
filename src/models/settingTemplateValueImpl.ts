import {SettingTemplateValue} from './settingTemplateValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingTemplateValueImpl implements SettingTemplateValue {
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new settingTemplateValue and sets the default values.
     * @param settingTemplateValueParameterValue 
     */
    public constructor(settingTemplateValueParameterValue?: SettingTemplateValue | undefined) {
        this._additionalData = settingTemplateValueParameterValue?.additionalData ? settingTemplateValueParameterValue?.additionalData! : {};
        this._defaultValue = settingTemplateValueParameterValue?.defaultValue;
        this._description = settingTemplateValueParameterValue?.description;
        this._name = settingTemplateValueParameterValue?.name;
        this._type = settingTemplateValueParameterValue?.type;
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
        if(value) {
            this._defaultValue = value;
        }
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
        if(value) {
            this._description = value;
        }
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
        if(value) {
            this._name = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.defaultValue){
            writer.writeStringValue("defaultValue", this.defaultValue);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.type){
            writer.writeStringValue("type", this.type);
        }
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
        if(value) {
            this._type = value;
        }
    };
}
