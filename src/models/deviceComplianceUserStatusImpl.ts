import {ComplianceStatus} from './complianceStatus';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceUserStatusImpl extends EntityImpl implements DeviceComplianceUserStatus, Parsable {
    /** Devices count for that user.  */
    devicesCount?: number | undefined;
    /** Last modified date time of the policy report.  */
    lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.  */
    status?: ComplianceStatus | undefined;
    /** User name of the DevicePolicyStatus.  */
    userDisplayName?: string | undefined;
    /** UserPrincipalName.  */
    userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deviceComplianceUserStatus and sets the default values.
     * @param deviceComplianceUserStatusParameterValue 
     */
    public constructor(deviceComplianceUserStatusParameterValue?: DeviceComplianceUserStatus | undefined) {
        super();
        this.devicesCount = deviceComplianceUserStatusParameterValue?.devicesCount ;
        this.lastReportedDateTime = deviceComplianceUserStatusParameterValue?.lastReportedDateTime ;
        this.status = deviceComplianceUserStatusParameterValue?.status ;
        this.userDisplayName = deviceComplianceUserStatusParameterValue?.userDisplayName ;
        this.userPrincipalName = deviceComplianceUserStatusParameterValue?.userPrincipalName ;
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
        if(this.devicesCount)
        writer.writeNumberValue("devicesCount", this.devicesCount);
        }
        if(this.lastReportedDateTime){
        if(this.lastReportedDateTime)
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<ComplianceStatus>("status", this.status);
        }
        if(this.userDisplayName){
        if(this.userDisplayName)
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userPrincipalName){
        if(this.userPrincipalName)
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
