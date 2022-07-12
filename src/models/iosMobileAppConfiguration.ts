import {AppConfigurationSettingItem, DeviceAppManagementMember1, ManagedDeviceMobileAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration implements Parsable {
    /** mdm app configuration Base64 binary. */
    private _encodedSettingXml?: string | undefined;
    /** app configuration setting items. */
    private _settings?: AppConfigurationSettingItem | DeviceAppManagementMember1[] | undefined;
    /**
     * Instantiates a new IosMobileAppConfiguration and sets the default values.
     */
    public constructor() {
        super();
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
        this._encodedSettingXml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "encodedSettingXml": n => { this.encodedSettingXml = n.getStringValue(); },
            "settings": n => { this.settings = n.getObjectValue<AppConfigurationSettingItem>(createAppConfigurationSettingItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("encodedSettingXml", this.encodedSettingXml);
        writer.writeObjectValue<AppConfigurationSettingItem>("settings", this.settings);
    };
    /**
     * Gets the settings property value. app configuration setting items.
     * @returns a deviceAppManagement
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. app configuration setting items.
     * @param value Value to set for the settings property.
     */
    public set settings(value: AppConfigurationSettingItem | DeviceAppManagementMember1[] | undefined) {
        this._settings = value;
    };
}
