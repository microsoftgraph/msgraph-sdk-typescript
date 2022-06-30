import {SettingSource} from './settingSource';
import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingSourceImpl implements SettingSource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Not yet documented */
    private _displayName?: string | undefined;
    /** Not yet documented */
    private _id?: string | undefined;
    /** Not yet documented. Possible values are: deviceConfiguration, deviceIntent. */
    private _sourceType?: SettingSourceType | undefined;
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
     * Instantiates a new settingSource and sets the default values.
     * @param settingSourceParameterValue 
     */
    public constructor(settingSourceParameterValue?: SettingSource | undefined) {
        this._additionalData = settingSourceParameterValue?.additionalData ? settingSourceParameterValue?.additionalData! : {};
        this._displayName = settingSourceParameterValue?.displayName;
        this._id = settingSourceParameterValue?.id;
        this._sourceType = settingSourceParameterValue?.sourceType;
    };
    /**
     * Gets the displayName property value. Not yet documented
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Not yet documented
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "sourceType": n => { this.sourceType = n.getEnumValue<SettingSourceType>(SettingSourceType); },
        };
    };
    /**
     * Gets the id property value. Not yet documented
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Not yet documented
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        if(this.sourceType){
            writer.writeEnumValue<SettingSourceType>("sourceType", this.sourceType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceType property value. Not yet documented. Possible values are: deviceConfiguration, deviceIntent.
     * @returns a settingSourceType
     */
    public get sourceType() {
        return this._sourceType;
    };
    /**
     * Sets the sourceType property value. Not yet documented. Possible values are: deviceConfiguration, deviceIntent.
     * @param value Value to set for the sourceType property.
     */
    public set sourceType(value: SettingSourceType | undefined) {
        if(value) {
            this._sourceType = value;
        }
    };
}
