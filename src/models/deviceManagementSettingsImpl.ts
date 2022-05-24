import {DeviceManagementSettings} from './deviceManagementSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementSettingsImpl implements AdditionalDataHolder, DeviceManagementSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The number of days a device is allowed to go without checking in to remain compliant. */
    public deviceComplianceCheckinThresholdDays?: number | undefined;
    /** Is feature enabled or not for scheduled action for rule. */
    public isScheduledActionEnabled?: boolean | undefined;
    /** Device should be noncompliant when there is no compliance policy targeted when this is true */
    public secureByDefault?: boolean | undefined;
    /**
     * Instantiates a new deviceManagementSettings and sets the default values.
     * @param deviceManagementSettingsParameterValue 
     */
    public constructor(deviceManagementSettingsParameterValue?: DeviceManagementSettings | undefined) {
        this.additionalData = deviceManagementSettingsParameterValue?.additionalData ? deviceManagementSettingsParameterValue?.additionalData! : {}
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
        writer.writeNumberValue("deviceComplianceCheckinThresholdDays", this.deviceComplianceCheckinThresholdDays);
        }
        if(this.isScheduledActionEnabled){
        writer.writeBooleanValue("isScheduledActionEnabled", this.isScheduledActionEnabled);
        }
        if(this.secureByDefault){
        writer.writeBooleanValue("secureByDefault", this.secureByDefault);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
