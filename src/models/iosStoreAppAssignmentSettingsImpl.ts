import {MobileAppAssignmentSettingsImpl} from './index';
import {IosStoreAppAssignmentSettings} from './iosStoreAppAssignmentSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosStoreAppAssignmentSettingsImpl extends MobileAppAssignmentSettingsImpl implements IosStoreAppAssignmentSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The VPN Configuration Id to apply for this app. */
    public vpnConfigurationId?: string | undefined;
    /**
     * Instantiates a new IosStoreAppAssignmentSettings and sets the default values.
     * @param iosStoreAppAssignmentSettingsParameterValue 
     */
    public constructor(iosStoreAppAssignmentSettingsParameterValue?: IosStoreAppAssignmentSettings | undefined) {
        super(iosStoreAppAssignmentSettingsParameterValue);
        this.additionalData = iosStoreAppAssignmentSettingsParameterValue?.additionalData ? iosStoreAppAssignmentSettingsParameterValue?.additionalData! : {};
        this.vpnConfigurationId = iosStoreAppAssignmentSettingsParameterValue?.vpnConfigurationId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.vpnConfigurationId){
            writer.writeStringValue("vpnConfigurationId", this.vpnConfigurationId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
