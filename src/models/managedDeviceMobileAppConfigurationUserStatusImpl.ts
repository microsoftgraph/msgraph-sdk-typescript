import {ComplianceStatus} from './complianceStatus';
import {EntityImpl} from './index';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties, inherited properties and actions for an MDM mobile app configuration status for a user. */
export class ManagedDeviceMobileAppConfigurationUserStatusImpl extends EntityImpl implements ManagedDeviceMobileAppConfigurationUserStatus, Parsable {
    /** Devices count for that user. */
    public devicesCount?: number | undefined;
    /** Last modified date time of the policy report. */
    public lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    public status?: ComplianceStatus | undefined;
    /** User name of the DevicePolicyStatus. */
    public userDisplayName?: string | undefined;
    /** UserPrincipalName. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new managedDeviceMobileAppConfigurationUserStatus and sets the default values.
     * @param managedDeviceMobileAppConfigurationUserStatusParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationUserStatusParameterValue?: ManagedDeviceMobileAppConfigurationUserStatus | undefined) {
        super();
        this.devicesCount = managedDeviceMobileAppConfigurationUserStatusParameterValue?.devicesCount ;
        this.lastReportedDateTime = managedDeviceMobileAppConfigurationUserStatusParameterValue?.lastReportedDateTime ;
        this.status = managedDeviceMobileAppConfigurationUserStatusParameterValue?.status ;
        this.userDisplayName = managedDeviceMobileAppConfigurationUserStatusParameterValue?.userDisplayName ;
        this.userPrincipalName = managedDeviceMobileAppConfigurationUserStatusParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "devicesCount": n => { this.devicesCount = n.getNumberValue(); },
            "lastReportedDateTime": n => { this.lastReportedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
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
        if(this.devicesCount){
        writer.writeNumberValue("devicesCount", this.devicesCount);
        }
        if(this.lastReportedDateTime){
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        }
        if(this.status){
        writer.writeEnumValue<ComplianceStatus>("status", this.status);
        }
        if(this.userDisplayName){
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
