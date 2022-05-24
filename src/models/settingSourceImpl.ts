import {SettingSource} from './settingSource';
import {SettingSourceType} from './settingSourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingSourceImpl implements AdditionalDataHolder, Parsable, SettingSource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Not yet documented */
    public displayName?: string | undefined;
    /** Not yet documented */
    public id?: string | undefined;
    /** Not yet documented. Possible values are: deviceConfiguration, deviceIntent. */
    public sourceType?: SettingSourceType | undefined;
    /**
     * Instantiates a new settingSource and sets the default values.
     * @param settingSourceParameterValue 
     */
    public constructor(settingSourceParameterValue?: SettingSource | undefined) {
        this.additionalData = settingSourceParameterValue?.additionalData ? settingSourceParameterValue?.additionalData! : {}
        this.displayName = settingSourceParameterValue?.displayName ;
        this.id = settingSourceParameterValue?.id ;
        this.sourceType = settingSourceParameterValue?.sourceType ;
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
}
