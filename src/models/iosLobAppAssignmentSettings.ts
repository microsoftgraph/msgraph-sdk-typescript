import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosLobAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** When TRUE, indicates that the app can be uninstalled by the user. When FALSE, indicates that the app cannot be uninstalled by the user. By default, this property is set to null which internally is treated as TRUE. */
    private _isRemovable?: boolean | undefined;
    /** When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune. By default, property is set to null which internally is treated as TRUE. */
    private _uninstallOnDeviceRemoval?: boolean | undefined;
    /** This is the unique identifier (Id) of the VPN Configuration to apply to the app. */
    private _vpnConfigurationId?: string | undefined;
    /**
     * Instantiates a new IosLobAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosLobAppAssignmentSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isRemovable": n => { this.isRemovable = n.getBooleanValue(); },
            "uninstallOnDeviceRemoval": n => { this.uninstallOnDeviceRemoval = n.getBooleanValue(); },
            "vpnConfigurationId": n => { this.vpnConfigurationId = n.getStringValue(); },
        };
    };
    /**
     * Gets the isRemovable property value. When TRUE, indicates that the app can be uninstalled by the user. When FALSE, indicates that the app cannot be uninstalled by the user. By default, this property is set to null which internally is treated as TRUE.
     * @returns a boolean
     */
    public get isRemovable() {
        return this._isRemovable;
    };
    /**
     * Sets the isRemovable property value. When TRUE, indicates that the app can be uninstalled by the user. When FALSE, indicates that the app cannot be uninstalled by the user. By default, this property is set to null which internally is treated as TRUE.
     * @param value Value to set for the isRemovable property.
     */
    public set isRemovable(value: boolean | undefined) {
        this._isRemovable = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        writer.writeBooleanValue("uninstallOnDeviceRemoval", this.uninstallOnDeviceRemoval);
        writer.writeStringValue("vpnConfigurationId", this.vpnConfigurationId);
    };
    /**
     * Gets the uninstallOnDeviceRemoval property value. When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune. By default, property is set to null which internally is treated as TRUE.
     * @returns a boolean
     */
    public get uninstallOnDeviceRemoval() {
        return this._uninstallOnDeviceRemoval;
    };
    /**
     * Sets the uninstallOnDeviceRemoval property value. When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune. By default, property is set to null which internally is treated as TRUE.
     * @param value Value to set for the uninstallOnDeviceRemoval property.
     */
    public set uninstallOnDeviceRemoval(value: boolean | undefined) {
        this._uninstallOnDeviceRemoval = value;
    };
    /**
     * Gets the vpnConfigurationId property value. This is the unique identifier (Id) of the VPN Configuration to apply to the app.
     * @returns a string
     */
    public get vpnConfigurationId() {
        return this._vpnConfigurationId;
    };
    /**
     * Sets the vpnConfigurationId property value. This is the unique identifier (Id) of the VPN Configuration to apply to the app.
     * @param value Value to set for the vpnConfigurationId property.
     */
    public set vpnConfigurationId(value: string | undefined) {
        this._vpnConfigurationId = value;
    };
}
