import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOsLobAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune. */
    private _uninstallOnDeviceRemoval?: boolean | undefined;
    /**
     * Instantiates a new MacOsLobAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.macOsLobAppAssignmentSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "uninstallOnDeviceRemoval": n => { this.uninstallOnDeviceRemoval = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("uninstallOnDeviceRemoval", this.uninstallOnDeviceRemoval);
    };
    /**
     * Gets the uninstallOnDeviceRemoval property value. When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune.
     * @returns a boolean
     */
    public get uninstallOnDeviceRemoval() {
        return this._uninstallOnDeviceRemoval;
    };
    /**
     * Sets the uninstallOnDeviceRemoval property value. When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune.
     * @param value Value to set for the uninstallOnDeviceRemoval property.
     */
    public set uninstallOnDeviceRemoval(value: boolean | undefined) {
        this._uninstallOnDeviceRemoval = value;
    };
}
