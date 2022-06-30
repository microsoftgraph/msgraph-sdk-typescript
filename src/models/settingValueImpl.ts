import {SettingValue} from './settingValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingValueImpl implements SettingValue {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the setting (as defined by the directorySettingTemplate). */
    private _name?: string | undefined;
    /** Value of the setting. */
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new settingValue and sets the default values.
     * @param settingValueParameterValue 
     */
    public constructor(settingValueParameterValue?: SettingValue | undefined) {
        this._additionalData = settingValueParameterValue?.additionalData ? settingValueParameterValue?.additionalData! : {};
        this._name = settingValueParameterValue?.name;
        this._value = settingValueParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the setting (as defined by the directorySettingTemplate).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the setting (as defined by the directorySettingTemplate).
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
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.value){
            writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. Value of the setting.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value of the setting.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        if(value) {
            this._value = value;
        }
    };
}
