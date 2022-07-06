import {createMobileAppInstallTimeSettingsFromDiscriminatorValue} from './createMobileAppInstallTimeSettingsFromDiscriminatorValue';
import {createWin32LobAppRestartSettingsFromDiscriminatorValue} from './createWin32LobAppRestartSettingsFromDiscriminatorValue';
import {MobileAppAssignmentSettings, MobileAppInstallTimeSettings, Win32LobAppRestartSettings} from './index';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** The delivery optimization priority for this app assignment. This setting is not supported in National Cloud environments. Possible values are: notConfigured, foreground. */
    private _deliveryOptimizationPriority?: Win32LobAppDeliveryOptimizationPriority | undefined;
    /** The install time settings to apply for this app assignment. */
    private _installTimeSettings?: MobileAppInstallTimeSettings | undefined;
    /** The notification status for this app assignment. Possible values are: showAll, showReboot, hideAll. */
    private _notifications?: Win32LobAppNotification | undefined;
    /** The reboot settings to apply for this app assignment. */
    private _restartSettings?: Win32LobAppRestartSettings | undefined;
    /**
     * Instantiates a new Win32LobAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deliveryOptimizationPriority property value. The delivery optimization priority for this app assignment. This setting is not supported in National Cloud environments. Possible values are: notConfigured, foreground.
     * @returns a win32LobAppDeliveryOptimizationPriority
     */
    public get deliveryOptimizationPriority() {
        return this._deliveryOptimizationPriority;
    };
    /**
     * Sets the deliveryOptimizationPriority property value. The delivery optimization priority for this app assignment. This setting is not supported in National Cloud environments. Possible values are: notConfigured, foreground.
     * @param value Value to set for the deliveryOptimizationPriority property.
     */
    public set deliveryOptimizationPriority(value: Win32LobAppDeliveryOptimizationPriority | undefined) {
        this._deliveryOptimizationPriority = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deliveryOptimizationPriority": n => { this.deliveryOptimizationPriority = n.getEnumValue<Win32LobAppDeliveryOptimizationPriority>(Win32LobAppDeliveryOptimizationPriority); },
            "installTimeSettings": n => { this.installTimeSettings = n.getObjectValue<MobileAppInstallTimeSettings>(createMobileAppInstallTimeSettingsFromDiscriminatorValue); },
            "notifications": n => { this.notifications = n.getEnumValue<Win32LobAppNotification>(Win32LobAppNotification); },
            "restartSettings": n => { this.restartSettings = n.getObjectValue<Win32LobAppRestartSettings>(createWin32LobAppRestartSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the installTimeSettings property value. The install time settings to apply for this app assignment.
     * @returns a mobileAppInstallTimeSettings
     */
    public get installTimeSettings() {
        return this._installTimeSettings;
    };
    /**
     * Sets the installTimeSettings property value. The install time settings to apply for this app assignment.
     * @param value Value to set for the installTimeSettings property.
     */
    public set installTimeSettings(value: MobileAppInstallTimeSettings | undefined) {
        this._installTimeSettings = value;
    };
    /**
     * Gets the notifications property value. The notification status for this app assignment. Possible values are: showAll, showReboot, hideAll.
     * @returns a win32LobAppNotification
     */
    public get notifications() {
        return this._notifications;
    };
    /**
     * Sets the notifications property value. The notification status for this app assignment. Possible values are: showAll, showReboot, hideAll.
     * @param value Value to set for the notifications property.
     */
    public set notifications(value: Win32LobAppNotification | undefined) {
        this._notifications = value;
    };
    /**
     * Gets the restartSettings property value. The reboot settings to apply for this app assignment.
     * @returns a win32LobAppRestartSettings
     */
    public get restartSettings() {
        return this._restartSettings;
    };
    /**
     * Sets the restartSettings property value. The reboot settings to apply for this app assignment.
     * @param value Value to set for the restartSettings property.
     */
    public set restartSettings(value: Win32LobAppRestartSettings | undefined) {
        this._restartSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<Win32LobAppDeliveryOptimizationPriority>("deliveryOptimizationPriority", this.deliveryOptimizationPriority);
        writer.writeObjectValue<MobileAppInstallTimeSettings>("installTimeSettings", this.installTimeSettings);
        writer.writeEnumValue<Win32LobAppNotification>("notifications", this.notifications);
        writer.writeObjectValue<Win32LobAppRestartSettings>("restartSettings", this.restartSettings);
    };
}
