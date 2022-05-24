import {SettingValue} from './settingValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingValueImpl implements AdditionalDataHolder, Parsable, SettingValue {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the setting (as defined by the directorySettingTemplate). */
    public name?: string | undefined;
    /** Value of the setting. */
    public value?: string | undefined;
    /**
     * Instantiates a new settingValue and sets the default values.
     * @param settingValueParameterValue 
     */
    public constructor(settingValueParameterValue?: SettingValue | undefined) {
        this.additionalData = settingValueParameterValue?.additionalData ? settingValueParameterValue?.additionalData! : {}
        this.name = settingValueParameterValue?.name ;
        this.value = settingValueParameterValue?.value ;
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
}
