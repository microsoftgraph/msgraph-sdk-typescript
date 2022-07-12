import {DeviceConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration implements Parsable {
    /** Indicates whether or not to uninstall a fixed list of built-in Windows apps. */
    private _uninstallBuiltInApps?: boolean | undefined;
    /**
     * Instantiates a new Windows10EnterpriseModernAppManagementConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "uninstallBuiltInApps": n => { this.uninstallBuiltInApps = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("uninstallBuiltInApps", this.uninstallBuiltInApps);
    };
    /**
     * Gets the uninstallBuiltInApps property value. Indicates whether or not to uninstall a fixed list of built-in Windows apps.
     * @returns a boolean
     */
    public get uninstallBuiltInApps() {
        return this._uninstallBuiltInApps;
    };
    /**
     * Sets the uninstallBuiltInApps property value. Indicates whether or not to uninstall a fixed list of built-in Windows apps.
     * @param value Value to set for the uninstallBuiltInApps property.
     */
    public set uninstallBuiltInApps(value: boolean | undefined) {
        this._uninstallBuiltInApps = value;
    };
}
