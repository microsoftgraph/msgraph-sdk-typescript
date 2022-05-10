import {DeviceManagementSettings} from './deviceManagementSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementSettingsImpl implements AdditionalDataHolder, DeviceManagementSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The number of days a device is allowed to go without checking in to remain compliant.  */
    deviceComplianceCheckinThresholdDays?: number | undefined;
    /** Is feature enabled or not for scheduled action for rule.  */
    isScheduledActionEnabled?: boolean | undefined;
    /** Device should be noncompliant when there is no compliance policy targeted when this is true  */
    secureByDefault?: boolean | undefined;
    /**
     * Instantiates a new deviceManagementSettings and sets the default values.
     * @param deviceManagementSettingsParameterValue 
     */
    public constructor(deviceManagementSettingsParameterValue?: DeviceManagementSettings | undefined) {
        this.additionalData = {};
        this.additionalData = deviceManagementSettingsParameterValue?.additionalData ? {} : deviceManagementSettingsParameterValue?.additionalData!
        this.deviceComplianceCheckinThresholdDays = deviceManagementSettingsParameterValue?.deviceComplianceCheckinThresholdDays ;
        this.isScheduledActionEnabled = deviceManagementSettingsParameterValue?.isScheduledActionEnabled ;
        this.secureByDefault = deviceManagementSettingsParameterValue?.secureByDefault ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceComplianceCheckinThresholdDays": n => { this.deviceComplianceCheckinThresholdDays = n.getNumberValue(); },
            "isScheduledActionEnabled": n => { this.isScheduledActionEnabled = n.getBooleanValue(); },
            "secureByDefault": n => { this.secureByDefault = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deviceComplianceCheckinThresholdDays){
        if(this.deviceComplianceCheckinThresholdDays)
        writer.writeNumberValue("deviceComplianceCheckinThresholdDays", this.deviceComplianceCheckinThresholdDays);
        }
        if(this.isScheduledActionEnabled){
        if(this.isScheduledActionEnabled)
        writer.writeBooleanValue("isScheduledActionEnabled", this.isScheduledActionEnabled);
        }
        if(this.secureByDefault){
        if(this.secureByDefault)
        writer.writeBooleanValue("secureByDefault", this.secureByDefault);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
