import {MobileAppAssignmentSettingsImpl} from './index';
import {IosVppAppAssignmentSettings} from './iosVppAppAssignmentSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppAppAssignmentSettingsImpl extends MobileAppAssignmentSettingsImpl implements IosVppAppAssignmentSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether or not to use device licensing. */
    public useDeviceLicensing?: boolean | undefined;
    /** The VPN Configuration Id to apply for this app. */
    public vpnConfigurationId?: string | undefined;
    /**
     * Instantiates a new IosVppAppAssignmentSettings and sets the default values.
     * @param iosVppAppAssignmentSettingsParameterValue 
     */
    public constructor(iosVppAppAssignmentSettingsParameterValue?: IosVppAppAssignmentSettings | undefined) {
        super(iosVppAppAssignmentSettingsParameterValue);
        this.additionalData = iosVppAppAssignmentSettingsParameterValue?.additionalData ? iosVppAppAssignmentSettingsParameterValue?.additionalData! : {};
        this.useDeviceLicensing = iosVppAppAssignmentSettingsParameterValue?.useDeviceLicensing;
        this.vpnConfigurationId = iosVppAppAssignmentSettingsParameterValue?.vpnConfigurationId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "useDeviceLicensing": n => { this.useDeviceLicensing = n.getBooleanValue(); },
            "vpnConfigurationId": n => { this.vpnConfigurationId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.useDeviceLicensing){
            writer.writeBooleanValue("useDeviceLicensing", this.useDeviceLicensing);
        }
        if(this.vpnConfigurationId){
            writer.writeStringValue("vpnConfigurationId", this.vpnConfigurationId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
