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
    private _assetTagTemplate?: string | undefined;
    /** A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements. */
    private _homeScreenDockIcons?: IosHomeScreenItem[] | undefined;
    /** A list of pages on the Home Screen. This collection can contain a maximum of 500 elements. */
    private _homeScreenPages?: IosHomeScreenPage[] | undefined;
    /** A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later. */
    private _lockScreenFootnote?: string | undefined;
    /** Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements. */
    private _notificationSettings?: IosNotificationSettings[] | undefined;
    /**
     * Gets the assetTagTemplate property value. Asset tag information for the device, displayed on the login window and lock screen.
     * @returns a string
     */
    public get assetTagTemplate() {
        return this._assetTagTemplate;
    };
    /**
     * Sets the assetTagTemplate property value. Asset tag information for the device, displayed on the login window and lock screen.
     * @param value Value to set for the assetTagTemplate property.
     */
    public set assetTagTemplate(value: string | undefined) {
        if(value) {
            this._assetTagTemplate = value;
        }
    };
    /**
     * Instantiates a new IosDeviceFeaturesConfiguration and sets the default values.
     * @param iosDeviceFeaturesConfigurationParameterValue 
     */
    public constructor(iosDeviceFeaturesConfigurationParameterValue?: IosDeviceFeaturesConfiguration | undefined) {
        super(iosDeviceFeaturesConfigurationParameterValue);
        this._assetTagTemplate = iosDeviceFeaturesConfigurationParameterValue?.assetTagTemplate;
        this._homeScreenDockIcons = iosDeviceFeaturesConfigurationParameterValue?.homeScreenDockIcons;
        this._homeScreenPages = iosDeviceFeaturesConfigurationParameterValue?.homeScreenPages;
        this._lockScreenFootnote = iosDeviceFeaturesConfigurationParameterValue?.lockScreenFootnote;
        this._notificationSettings = iosDeviceFeaturesConfigurationParameterValue?.notificationSettings;
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
     * Gets the homeScreenDockIcons property value. A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
     * @returns a IosHomeScreenItemInterface
     */
    public get homeScreenDockIcons() {
        return this._homeScreenDockIcons;
    };
    /**
     * Sets the homeScreenDockIcons property value. A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the homeScreenDockIcons property.
     */
    public set homeScreenDockIcons(value: IosHomeScreenItem[] | undefined) {
        if(value) {
            const homeScreenDockIconsArrValue: IosHomeScreenItemImpl[] = [];
            this.homeScreenDockIcons?.forEach(element => {
                homeScreenDockIconsArrValue.push((element instanceof IosHomeScreenItemImpl? element as IosHomeScreenItemImpl:new IosHomeScreenItemImpl(element)));
            });
            this._homeScreenDockIcons = homeScreenDockIconsArrValue;
        }
    };
    /**
     * Gets the homeScreenPages property value. A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
     * @returns a IosHomeScreenPageInterface
     */
    public get homeScreenPages() {
        return this._homeScreenPages;
    };
    /**
     * Sets the homeScreenPages property value. A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the homeScreenPages property.
     */
    public set homeScreenPages(value: IosHomeScreenPage[] | undefined) {
        if(value) {
            const homeScreenPagesArrValue: IosHomeScreenPageImpl[] = [];
            this.homeScreenPages?.forEach(element => {
                homeScreenPagesArrValue.push((element instanceof IosHomeScreenPageImpl? element as IosHomeScreenPageImpl:new IosHomeScreenPageImpl(element)));
            });
            this._homeScreenPages = homeScreenPagesArrValue;
        }
    };
    /**
     * Gets the lockScreenFootnote property value. A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later.
     * @returns a string
     */
    public get lockScreenFootnote() {
        return this._lockScreenFootnote;
    };
    /**
     * Sets the lockScreenFootnote property value. A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later.
     * @param value Value to set for the lockScreenFootnote property.
     */
    public set lockScreenFootnote(value: string | undefined) {
        if(value) {
            this._lockScreenFootnote = value;
        }
    };
    /**
     * Gets the notificationSettings property value. Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements.
     * @returns a IosNotificationSettingsInterface
     */
    public get notificationSettings() {
        return this._notificationSettings;
    };
    /**
     * Sets the notificationSettings property value. Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements.
     * @param value Value to set for the notificationSettings property.
     */
    public set notificationSettings(value: IosNotificationSettings[] | undefined) {
        if(value) {
            const notificationSettingsArrValue: IosNotificationSettingsImpl[] = [];
            this.notificationSettings?.forEach(element => {
                notificationSettingsArrValue.push((element instanceof IosNotificationSettingsImpl? element as IosNotificationSettingsImpl:new IosNotificationSettingsImpl(element)));
            });
            this._notificationSettings = notificationSettingsArrValue;
        }
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
        if(this.homeScreenDockIcons && this.homeScreenDockIcons.length != 0){        const homeScreenDockIconsArrValue: IosHomeScreenItemImpl[] = [];
        this.homeScreenDockIcons?.forEach(element => {
            homeScreenDockIconsArrValue.push((element instanceof IosHomeScreenItemImpl? element as IosHomeScreenItemImpl:new IosHomeScreenItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IosHomeScreenItemImpl>("homeScreenDockIcons", homeScreenDockIconsArrValue);
        }
        if(this.homeScreenPages && this.homeScreenPages.length != 0){        const homeScreenPagesArrValue: IosHomeScreenPageImpl[] = [];
        this.homeScreenPages?.forEach(element => {
            homeScreenPagesArrValue.push((element instanceof IosHomeScreenPageImpl? element as IosHomeScreenPageImpl:new IosHomeScreenPageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IosHomeScreenPageImpl>("homeScreenPages", homeScreenPagesArrValue);
        }
        if(this.lockScreenFootnote){
            writer.writeStringValue("lockScreenFootnote", this.lockScreenFootnote);
        }
        if(this.notificationSettings && this.notificationSettings.length != 0){        const notificationSettingsArrValue: IosNotificationSettingsImpl[] = [];
        this.notificationSettings?.forEach(element => {
            notificationSettingsArrValue.push((element instanceof IosNotificationSettingsImpl? element as IosNotificationSettingsImpl:new IosNotificationSettingsImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IosNotificationSettingsImpl>("notificationSettings", notificationSettingsArrValue);
        }
    };
}
