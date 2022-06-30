import {AppConfigurationSettingItem} from './appConfigurationSettingItem';
import {createAppConfigurationSettingItemFromDiscriminatorValue} from './createAppConfigurationSettingItemFromDiscriminatorValue';
import {AppConfigurationSettingItemImpl, ManagedDeviceMobileAppConfigurationImpl} from './index';
import {IosMobileAppConfiguration} from './iosMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosMobileAppConfigurationImpl extends ManagedDeviceMobileAppConfigurationImpl implements IosMobileAppConfiguration {
    /** mdm app configuration Base64 binary. */
    private _encodedSettingXml?: string | undefined;
    /** app configuration setting items. */
    private _settings?: AppConfigurationSettingItem[] | undefined;
    /**
     * Instantiates a new IosMobileAppConfiguration and sets the default values.
     * @param iosMobileAppConfigurationParameterValue 
     */
    public constructor(iosMobileAppConfigurationParameterValue?: IosMobileAppConfiguration | undefined) {
        super(iosMobileAppConfigurationParameterValue);
        this._encodedSettingXml = iosMobileAppConfigurationParameterValue?.encodedSettingXml;
        this._settings = iosMobileAppConfigurationParameterValue?.settings;
    };
    /**
     * Gets the encodedSettingXml property value. mdm app configuration Base64 binary.
     * @returns a binary
     */
    public get encodedSettingXml() {
        return this._encodedSettingXml;
    };
    /**
     * Sets the encodedSettingXml property value. mdm app configuration Base64 binary.
     * @param value Value to set for the encodedSettingXml property.
     */
    public set encodedSettingXml(value: string | undefined) {
        if(value) {
            this._encodedSettingXml = value;
        }
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
        if(this.settings && this.settings.length != 0){        const settingsArrValue: AppConfigurationSettingItemImpl[] = [];
        this.settings?.forEach(element => {
            settingsArrValue.push((element instanceof AppConfigurationSettingItemImpl? element:new AppConfigurationSettingItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppConfigurationSettingItemImpl>("settings", settingsArrValue);
        }
    };
    /**
     * Gets the settings property value. app configuration setting items.
     * @returns a AppConfigurationSettingItemInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. app configuration setting items.
     * @param value Value to set for the settings property.
     */
    public set settings(value: AppConfigurationSettingItem[] | undefined) {
        if(value) {
            const settingsArrValue: AppConfigurationSettingItemImpl[] = [];
            this.settings?.forEach(element => {
                settingsArrValue.push((element instanceof AppConfigurationSettingItemImpl? element:new AppConfigurationSettingItemImpl(element)));
            });
            this._settings = settingsArrValue;
        }
    };
}
