import {SettingTemplateValue} from './settingTemplateValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingTemplateValueImpl implements AdditionalDataHolder, Parsable, SettingTemplateValue {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Default value for the setting. Read-only. */
    public defaultValue?: string | undefined;
    /** Description of the setting. Read-only. */
    public description?: string | undefined;
    /** Name of the setting. Read-only. */
    public name?: string | undefined;
    /** Type of the setting. Read-only. */
    public type?: string | undefined;
    /**
     * Instantiates a new settingTemplateValue and sets the default values.
     * @param settingTemplateValueParameterValue 
     */
    public constructor(settingTemplateValueParameterValue?: SettingTemplateValue | undefined) {
        this.additionalData = settingTemplateValueParameterValue?.additionalData ? settingTemplateValueParameterValue?.additionalData! : {}
        this.defaultValue = settingTemplateValueParameterValue?.defaultValue ;
        this.description = settingTemplateValueParameterValue?.description ;
        this.name = settingTemplateValueParameterValue?.name ;
        this.type = settingTemplateValueParameterValue?.type ;
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
}
