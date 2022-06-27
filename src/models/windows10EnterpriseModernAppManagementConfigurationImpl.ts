import {DeviceConfigurationImpl} from './index';
import {Windows10EnterpriseModernAppManagementConfiguration} from './windows10EnterpriseModernAppManagementConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EnterpriseModernAppManagementConfigurationImpl extends DeviceConfigurationImpl implements Windows10EnterpriseModernAppManagementConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether or not to uninstall a fixed list of built-in Windows apps. */
    public uninstallBuiltInApps?: boolean | undefined;
    /**
     * Instantiates a new Windows10EnterpriseModernAppManagementConfiguration and sets the default values.
     * @param windows10EnterpriseModernAppManagementConfigurationParameterValue 
     */
    public constructor(windows10EnterpriseModernAppManagementConfigurationParameterValue?: Windows10EnterpriseModernAppManagementConfiguration | undefined) {
        super(windows10EnterpriseModernAppManagementConfigurationParameterValue);
        this.additionalData = windows10EnterpriseModernAppManagementConfigurationParameterValue?.additionalData ? windows10EnterpriseModernAppManagementConfigurationParameterValue?.additionalData! : {};
        this.uninstallBuiltInApps = windows10EnterpriseModernAppManagementConfigurationParameterValue?.uninstallBuiltInApps;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
