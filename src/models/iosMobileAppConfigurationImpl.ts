import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {createAppConfigurationSettingItemFromDiscriminatorValue} from './createAppConfigurationSettingItemFromDiscriminatorValue';
import {AppConfigurationSettingItemImpl, ManagedDeviceMobileAppConfigurationImpl} from './index';
import {IosMobileAppConfiguration} from './iosMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosMobileAppConfigurationImpl extends ManagedDeviceMobileAppConfigurationImpl implements IosMobileAppConfiguration {
    /** mdm app configuration Base64 binary. */
    public encodedSettingXml?: string | undefined;
    /** app configuration setting items. */
    public settings?: AppConfigurationSettingItem[] | undefined;
    /**
     * Instantiates a new IosMobileAppConfiguration and sets the default values.
     * @param iosMobileAppConfigurationParameterValue 
     */
    public constructor(iosMobileAppConfigurationParameterValue?: IosMobileAppConfiguration | undefined) {
        super(iosMobileAppConfigurationParameterValue);
        this.encodedSettingXml = iosMobileAppConfigurationParameterValue?.encodedSettingXml;
        this.settings = iosMobileAppConfigurationParameterValue?.settings;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "encodedSettingXml": n => { this.encodedSettingXml = n.getStringValue(); },
            "settings": n => { this.settings = n.getCollectionOfObjectValues<AppConfigurationSettingItemImpl>(createAppConfigurationSettingItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.encodedSettingXml){
            writer.writeStringValue("encodedSettingXml", this.encodedSettingXml);
        }
        if(this.settings && this.settings.length != 0){        const settingsArrValue: AppConfigurationSettingItemImpl[] = []; this.settings?.forEach(element => {settingsArrValue.push(new AppConfigurationSettingItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppConfigurationSettingItemImpl>("settings", settingsArrValue);
        }
    };
}
