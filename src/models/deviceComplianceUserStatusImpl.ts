import {ComplianceStatus} from './complianceStatus';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class DeviceComplianceUserStatusImpl extends EntityImpl implements DeviceComplianceUserStatus {
    /** Devices count for that user. */
    private _devicesCount?: number | undefined;
    /** Last modified date time of the policy report. */
    private _lastReportedDateTime?: Date | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    private _status?: ComplianceStatus | undefined;
    /** User name of the DevicePolicyStatus. */
    private _userDisplayName?: string | undefined;
    /** UserPrincipalName. */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deviceComplianceUserStatus and sets the default values.
     * @param deviceComplianceUserStatusParameterValue 
     */
    public constructor(deviceComplianceUserStatusParameterValue?: DeviceComplianceUserStatus | undefined) {
        super(deviceComplianceUserStatusParameterValue);
        this._devicesCount = deviceComplianceUserStatusParameterValue?.devicesCount;
        this._lastReportedDateTime = deviceComplianceUserStatusParameterValue?.lastReportedDateTime;
        this._status = deviceComplianceUserStatusParameterValue?.status;
        this._userDisplayName = deviceComplianceUserStatusParameterValue?.userDisplayName;
        this._userPrincipalName = deviceComplianceUserStatusParameterValue?.userPrincipalName;
    };
    /**
     * Gets the devicesCount property value. Devices count for that user.
     * @returns a integer
     */
    public get devicesCount() {
        return this._devicesCount;
    };
    /**
     * Sets the devicesCount property value. Devices count for that user.
     * @param value Value to set for the devicesCount property.
     */
    public set devicesCount(value: number | undefined) {
        if(value) {
            this._devicesCount = value;
        }
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
     * Gets the lastReportedDateTime property value. Last modified date time of the policy report.
     * @returns a Date
     */
    public get lastReportedDateTime() {
        return this._lastReportedDateTime;
    };
    /**
     * Sets the lastReportedDateTime property value. Last modified date time of the policy report.
     * @param value Value to set for the lastReportedDateTime property.
     */
    public set lastReportedDateTime(value: Date | undefined) {
        if(value) {
            this._lastReportedDateTime = value;
        }
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
    /**
     * Gets the status property value. Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @returns a complianceStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
     * @param value Value to set for the status property.
     */
    public set status(value: ComplianceStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the userDisplayName property value. User name of the DevicePolicyStatus.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. User name of the DevicePolicyStatus.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        if(value) {
            this._userDisplayName = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. UserPrincipalName.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. UserPrincipalName.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
