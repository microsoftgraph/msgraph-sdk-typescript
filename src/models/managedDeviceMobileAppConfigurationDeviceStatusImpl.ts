import {ComplianceStatus} from './complianceStatus';
import {EntityImpl} from './index';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties, inherited properties and actions for an MDM mobile app configuration status for a device. */
export class ManagedDeviceMobileAppConfigurationDeviceStatusImpl extends EntityImpl implements ManagedDeviceMobileAppConfigurationDeviceStatus, Parsable {
    /** The DateTime when device compliance grace period expires */
    public complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus. */
    public deviceDisplayName?: string | undefined;
    /** The device model that is being reported */
    public deviceModel?: string | undefined;
    /** Last modified date time of the policy report. */
    public lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    public status?: ComplianceStatus | undefined;
    /** The User Name that is being reported */
    public userName?: string | undefined;
    /** UserPrincipalName. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new managedDeviceMobileAppConfigurationDeviceStatus and sets the default values.
     * @param managedDeviceMobileAppConfigurationDeviceStatusParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationDeviceStatusParameterValue?: ManagedDeviceMobileAppConfigurationDeviceStatus | undefined) {
        super();
        this.complianceGracePeriodExpirationDateTime = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.complianceGracePeriodExpirationDateTime ;
        this.deviceDisplayName = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.deviceDisplayName ;
        this.deviceModel = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.deviceModel ;
        this.lastReportedDateTime = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.lastReportedDateTime ;
        this.status = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.status ;
        this.userName = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.userName ;
        this.userPrincipalName = managedDeviceMobileAppConfigurationDeviceStatusParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "complianceGracePeriodExpirationDateTime": n => { this.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
            "deviceDisplayName": n => { this.deviceDisplayName = n.getStringValue(); },
            "deviceModel": n => { this.deviceModel = n.getStringValue(); },
            "lastReportedDateTime": n => { this.lastReportedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "userName": n => { this.userName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.complianceGracePeriodExpirationDateTime){
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        }
        if(this.deviceDisplayName){
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        }
        if(this.deviceModel){
        writer.writeStringValue("deviceModel", this.deviceModel);
        }
        if(this.lastReportedDateTime){
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        }
        if(this.status){
        writer.writeEnumValue<ComplianceStatus>("status", this.status);
        }
        if(this.userName){
        writer.writeStringValue("userName", this.userName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
