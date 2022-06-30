import {DeviceConfigurationImpl} from './index';
import {Windows10EnterpriseModernAppManagementConfiguration} from './windows10EnterpriseModernAppManagementConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EnterpriseModernAppManagementConfigurationImpl extends DeviceConfigurationImpl implements Windows10EnterpriseModernAppManagementConfiguration {
    /** Indicates whether or not to uninstall a fixed list of built-in Windows apps. */
    private _uninstallBuiltInApps?: boolean | undefined;
    /**
     * Instantiates a new Windows10EnterpriseModernAppManagementConfiguration and sets the default values.
     * @param windows10EnterpriseModernAppManagementConfigurationParameterValue 
     */
    public constructor(windows10EnterpriseModernAppManagementConfigurationParameterValue?: Windows10EnterpriseModernAppManagementConfiguration | undefined) {
        super(windows10EnterpriseModernAppManagementConfigurationParameterValue);
        this._uninstallBuiltInApps = windows10EnterpriseModernAppManagementConfigurationParameterValue?.uninstallBuiltInApps;
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
        if(this.uninstallBuiltInApps){
            writer.writeBooleanValue("uninstallBuiltInApps", this.uninstallBuiltInApps);
        }
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
        if(value) {
            this._uninstallBuiltInApps = value;
        }
    };
}
