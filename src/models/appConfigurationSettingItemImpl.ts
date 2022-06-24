import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for App configuration setting item. */
export class AppConfigurationSettingItemImpl implements AppConfigurationSettingItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** app configuration key. */
    public appConfigKey?: string | undefined;
    /** app configuration key type. Possible values are: stringType, integerType, realType, booleanType, tokenType. */
    public appConfigKeyType?: MdmAppConfigKeyType | undefined;
    /** app configuration key value. */
    public appConfigKeyValue?: string | undefined;
    /**
     * Instantiates a new appConfigurationSettingItem and sets the default values.
     * @param appConfigurationSettingItemParameterValue 
     */
    public constructor(appConfigurationSettingItemParameterValue?: AppConfigurationSettingItem | undefined) {
        this.additionalData = appConfigurationSettingItemParameterValue?.additionalData ? appConfigurationSettingItemParameterValue?.additionalData! : {};
        this.appConfigKey = appConfigurationSettingItemParameterValue?.appConfigKey;
        this.appConfigKeyType = appConfigurationSettingItemParameterValue?.appConfigKeyType;
        this.appConfigKeyValue = appConfigurationSettingItemParameterValue?.appConfigKeyValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appConfigKey": n => { this.appConfigKey = n.getStringValue(); },
            "appConfigKeyType": n => { this.appConfigKeyType = n.getEnumValue<MdmAppConfigKeyType>(MdmAppConfigKeyType); },
            "appConfigKeyValue": n => { this.appConfigKeyValue = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appConfigKey){
            writer.writeStringValue("appConfigKey", this.appConfigKey);
        }
        if(this.appConfigKeyType){
            writer.writeEnumValue<MdmAppConfigKeyType>("appConfigKeyType", this.appConfigKeyType);
        }
        if(this.appConfigKeyValue){
            writer.writeStringValue("appConfigKeyValue", this.appConfigKeyValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
