import {createIosHomeScreenItemFromDiscriminatorValue} from './createIosHomeScreenItemFromDiscriminatorValue';
import {createIosHomeScreenPageFromDiscriminatorValue} from './createIosHomeScreenPageFromDiscriminatorValue';
import {createIosNotificationSettingsFromDiscriminatorValue} from './createIosNotificationSettingsFromDiscriminatorValue';
import {AppleDeviceFeaturesConfigurationBaseImpl, IosHomeScreenItemImpl, IosHomeScreenPageImpl, IosNotificationSettingsImpl} from './index';
import {IosDeviceFeaturesConfiguration} from './iosDeviceFeaturesConfiguration';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {IosNotificationSettings} from './iosNotificationSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosDeviceFeaturesConfigurationImpl extends AppleDeviceFeaturesConfigurationBaseImpl implements IosDeviceFeaturesConfiguration {
    /** Asset tag information for the device, displayed on the login window and lock screen. */
    public assetTagTemplate?: string | undefined;
    /** A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements. */
    public homeScreenDockIcons?: IosHomeScreenItem[] | undefined;
    /** A list of pages on the Home Screen. This collection can contain a maximum of 500 elements. */
    public homeScreenPages?: IosHomeScreenPage[] | undefined;
    /** A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later. */
    public lockScreenFootnote?: string | undefined;
    /** Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements. */
    public notificationSettings?: IosNotificationSettings[] | undefined;
    /**
     * Instantiates a new IosDeviceFeaturesConfiguration and sets the default values.
     * @param iosDeviceFeaturesConfigurationParameterValue 
     */
    public constructor(iosDeviceFeaturesConfigurationParameterValue?: IosDeviceFeaturesConfiguration | undefined) {
        super(iosDeviceFeaturesConfigurationParameterValue);
        this.assetTagTemplate = iosDeviceFeaturesConfigurationParameterValue?.assetTagTemplate;
        this.homeScreenDockIcons = iosDeviceFeaturesConfigurationParameterValue?.homeScreenDockIcons;
        this.homeScreenPages = iosDeviceFeaturesConfigurationParameterValue?.homeScreenPages;
        this.lockScreenFootnote = iosDeviceFeaturesConfigurationParameterValue?.lockScreenFootnote;
        this.notificationSettings = iosDeviceFeaturesConfigurationParameterValue?.notificationSettings;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assetTagTemplate": n => { this.assetTagTemplate = n.getStringValue(); },
            "homeScreenDockIcons": n => { this.homeScreenDockIcons = n.getCollectionOfObjectValues<IosHomeScreenItemImpl>(createIosHomeScreenItemFromDiscriminatorValue); },
            "homeScreenPages": n => { this.homeScreenPages = n.getCollectionOfObjectValues<IosHomeScreenPageImpl>(createIosHomeScreenPageFromDiscriminatorValue); },
            "lockScreenFootnote": n => { this.lockScreenFootnote = n.getStringValue(); },
            "notificationSettings": n => { this.notificationSettings = n.getCollectionOfObjectValues<IosNotificationSettingsImpl>(createIosNotificationSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assetTagTemplate){
            writer.writeStringValue("assetTagTemplate", this.assetTagTemplate);
        }
        if(this.homeScreenDockIcons && this.homeScreenDockIcons.length != 0){        const homeScreenDockIconsArrValue: IosHomeScreenItemImpl[] = []; this.homeScreenDockIcons?.forEach(element => {homeScreenDockIconsArrValue.push(new IosHomeScreenItemImpl(element));});
            writer.writeCollectionOfObjectValues<IosHomeScreenItemImpl>("homeScreenDockIcons", homeScreenDockIconsArrValue);
        }
        if(this.homeScreenPages && this.homeScreenPages.length != 0){        const homeScreenPagesArrValue: IosHomeScreenPageImpl[] = []; this.homeScreenPages?.forEach(element => {homeScreenPagesArrValue.push(new IosHomeScreenPageImpl(element));});
            writer.writeCollectionOfObjectValues<IosHomeScreenPageImpl>("homeScreenPages", homeScreenPagesArrValue);
        }
        if(this.lockScreenFootnote){
            writer.writeStringValue("lockScreenFootnote", this.lockScreenFootnote);
        }
        if(this.notificationSettings && this.notificationSettings.length != 0){        const notificationSettingsArrValue: IosNotificationSettingsImpl[] = []; this.notificationSettings?.forEach(element => {notificationSettingsArrValue.push(new IosNotificationSettingsImpl(element));});
            writer.writeCollectionOfObjectValues<IosNotificationSettingsImpl>("notificationSettings", notificationSettingsArrValue);
        }
    };
}
