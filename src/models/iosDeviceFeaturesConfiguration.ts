import {createIosHomeScreenItemFromDiscriminatorValue} from './createIosHomeScreenItemFromDiscriminatorValue';
import {createIosHomeScreenPageFromDiscriminatorValue} from './createIosHomeScreenPageFromDiscriminatorValue';
import {createIosNotificationSettingsFromDiscriminatorValue} from './createIosNotificationSettingsFromDiscriminatorValue';
import {AppleDeviceFeaturesConfigurationBase, IosHomeScreenItem, IosHomeScreenPage, IosNotificationSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase implements Parsable {
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
        this._assetTagTemplate = value;
    };
    /**
     * Instantiates a new IosDeviceFeaturesConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosDeviceFeaturesConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assetTagTemplate": n => { this.assetTagTemplate = n.getStringValue(); },
            "homeScreenDockIcons": n => { this.homeScreenDockIcons = n.getCollectionOfObjectValues<IosHomeScreenItem>(createIosHomeScreenItemFromDiscriminatorValue); },
            "homeScreenPages": n => { this.homeScreenPages = n.getCollectionOfObjectValues<IosHomeScreenPage>(createIosHomeScreenPageFromDiscriminatorValue); },
            "lockScreenFootnote": n => { this.lockScreenFootnote = n.getStringValue(); },
            "notificationSettings": n => { this.notificationSettings = n.getCollectionOfObjectValues<IosNotificationSettings>(createIosNotificationSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the homeScreenDockIcons property value. A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
     * @returns a iosHomeScreenItem
     */
    public get homeScreenDockIcons() {
        return this._homeScreenDockIcons;
    };
    /**
     * Sets the homeScreenDockIcons property value. A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the homeScreenDockIcons property.
     */
    public set homeScreenDockIcons(value: IosHomeScreenItem[] | undefined) {
        this._homeScreenDockIcons = value;
    };
    /**
     * Gets the homeScreenPages property value. A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
     * @returns a iosHomeScreenPage
     */
    public get homeScreenPages() {
        return this._homeScreenPages;
    };
    /**
     * Sets the homeScreenPages property value. A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the homeScreenPages property.
     */
    public set homeScreenPages(value: IosHomeScreenPage[] | undefined) {
        this._homeScreenPages = value;
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
        this._lockScreenFootnote = value;
    };
    /**
     * Gets the notificationSettings property value. Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements.
     * @returns a iosNotificationSettings
     */
    public get notificationSettings() {
        return this._notificationSettings;
    };
    /**
     * Sets the notificationSettings property value. Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements.
     * @param value Value to set for the notificationSettings property.
     */
    public set notificationSettings(value: IosNotificationSettings[] | undefined) {
        this._notificationSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assetTagTemplate", this.assetTagTemplate);
        writer.writeCollectionOfObjectValues<IosHomeScreenItem>("homeScreenDockIcons", this.homeScreenDockIcons);
        writer.writeCollectionOfObjectValues<IosHomeScreenPage>("homeScreenPages", this.homeScreenPages);
        writer.writeStringValue("lockScreenFootnote", this.lockScreenFootnote);
        writer.writeCollectionOfObjectValues<IosNotificationSettings>("notificationSettings", this.notificationSettings);
    };
}
