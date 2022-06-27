import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {createAppConfigurationSettingItemFromDiscriminatorValue} from './createAppConfigurationSettingItemFromDiscriminatorValue';
import {AppConfigurationSettingItemImpl, ManagedDeviceMobileAppConfigurationImpl} from './index';
import {IosMobileAppConfiguration} from './iosMobileAppConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosMobileAppConfigurationImpl extends ManagedDeviceMobileAppConfigurationImpl implements IosMobileAppConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
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
        this.additionalData = iosMobileAppConfigurationParameterValue?.additionalData ? iosMobileAppConfigurationParameterValue?.additionalData! : {};
        this.encodedSettingXml = iosMobileAppConfigurationParameterValue?.encodedSettingXml;
        const settingsArrValue: AppConfigurationSettingItemImpl[] = []; iosMobileAppConfigurationParameterValue.settings?.forEach(element => {settingsArrValue.push(element instanceof AppConfigurationSettingItemImpl? element : new AppConfigurationSettingItemImpl(element));});
        this.settings = settingsArrValue;
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
        if(this.settings && this.settings.length != 0){        const settingsArrValue: AppConfigurationSettingItemImpl[] = []; this.settings?.forEach(element => {settingsArrValue.push(element instanceof AppConfigurationSettingItemImpl? element : new AppConfigurationSettingItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppConfigurationSettingItemImpl>("settings", settingsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
