import {ComplianceStatus} from './complianceStatus';
import {EntityImpl} from './index';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class IosUpdateDeviceStatusImpl extends EntityImpl implements IosUpdateDeviceStatus {
    /** The DateTime when device compliance grace period expires */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus. */
    private _deviceDisplayName?: string | undefined;
    /** The device id that is being reported. */
    private _deviceId?: string | undefined;
    /** The device model that is being reported */
    private _deviceModel?: string | undefined;
    /** The installation status of the policy report. Possible values are: success, available, idle, unknown, mdmClientCrashed, timeout, downloading, downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower, downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower, installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError, updateError, deviceOsHigherThanDesiredOsVersion, updateScanFailed. */
    private _installStatus?: IosUpdatesInstallStatus | undefined;
    /** Last modified date time of the policy report. */
    private _lastReportedDateTime?: Date | undefined;
    /** The device version that is being reported. */
    private _osVersion?: string | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    private _status?: ComplianceStatus | undefined;
    /** The User id that is being reported. */
    private _userId?: string | undefined;
    /** The User Name that is being reported */
    private _userName?: string | undefined;
    /** UserPrincipalName. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        if(value) {
            this._complianceGracePeriodExpirationDateTime = value;
        }
    };
    /**
     * Instantiates a new iosUpdateDeviceStatus and sets the default values.
     * @param iosUpdateDeviceStatusParameterValue 
     */
    public constructor(iosUpdateDeviceStatusParameterValue?: IosUpdateDeviceStatus | undefined) {
        super(iosUpdateDeviceStatusParameterValue);
        this._complianceGracePeriodExpirationDateTime = iosUpdateDeviceStatusParameterValue?.complianceGracePeriodExpirationDateTime;
        this._deviceDisplayName = iosUpdateDeviceStatusParameterValue?.deviceDisplayName;
        this._deviceId = iosUpdateDeviceStatusParameterValue?.deviceId;
        this._deviceModel = iosUpdateDeviceStatusParameterValue?.deviceModel;
        this._installStatus = iosUpdateDeviceStatusParameterValue?.installStatus;
        this._lastReportedDateTime = iosUpdateDeviceStatusParameterValue?.lastReportedDateTime;
        this._osVersion = iosUpdateDeviceStatusParameterValue?.osVersion;
        this._status = iosUpdateDeviceStatusParameterValue?.status;
        this._userId = iosUpdateDeviceStatusParameterValue?.userId;
        this._userName = iosUpdateDeviceStatusParameterValue?.userName;
        this._userPrincipalName = iosUpdateDeviceStatusParameterValue?.userPrincipalName;
    };
    /**
     * Gets the deviceDisplayName property value. Device name of the DevicePolicyStatus.
     * @returns a string
     */
    public get deviceDisplayName() {
        return this._deviceDisplayName;
    };
    /**
     * Sets the deviceDisplayName property value. Device name of the DevicePolicyStatus.
     * @param value Value to set for the deviceDisplayName property.
     */
    public set deviceDisplayName(value: string | undefined) {
        if(value) {
            this._deviceDisplayName = value;
        }
    };
    /**
     * Gets the deviceId property value. The device id that is being reported.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. The device id that is being reported.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        if(value) {
            this._deviceId = value;
        }
    };
    /**
     * Gets the deviceModel property value. The device model that is being reported
     * @returns a string
     */
    public get deviceModel() {
        return this._deviceModel;
    };
    /**
     * Sets the deviceModel property value. The device model that is being reported
     * @param value Value to set for the deviceModel property.
     */
    public set deviceModel(value: string | undefined) {
        if(value) {
            this._deviceModel = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "complianceGracePeriodExpirationDateTime": n => { this.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
            "deviceDisplayName": n => { this.deviceDisplayName = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceModel": n => { this.deviceModel = n.getStringValue(); },
            "installStatus": n => { this.installStatus = n.getEnumValue<IosUpdatesInstallStatus>(IosUpdatesInstallStatus); },
            "lastReportedDateTime": n => { this.lastReportedDateTime = n.getDateValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the installStatus property value. The installation status of the policy report. Possible values are: success, available, idle, unknown, mdmClientCrashed, timeout, downloading, downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower, downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower, installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError, updateError, deviceOsHigherThanDesiredOsVersion, updateScanFailed.
     * @returns a iosUpdatesInstallStatus
     */
    public get installStatus() {
        return this._installStatus;
    };
    /**
     * Sets the installStatus property value. The installation status of the policy report. Possible values are: success, available, idle, unknown, mdmClientCrashed, timeout, downloading, downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower, downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower, installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError, updateError, deviceOsHigherThanDesiredOsVersion, updateScanFailed.
     * @param value Value to set for the installStatus property.
     */
    public set installStatus(value: IosUpdatesInstallStatus | undefined) {
        if(value) {
            this._installStatus = value;
        }
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
     * Gets the osVersion property value. The device version that is being reported.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. The device version that is being reported.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        if(value) {
            this._osVersion = value;
        }
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
        if(this.deviceId){
            writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceModel){
            writer.writeStringValue("deviceModel", this.deviceModel);
        }
        if(this.installStatus){
            writer.writeEnumValue<IosUpdatesInstallStatus>("installStatus", this.installStatus);
        }
        if(this.lastReportedDateTime){
            writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        }
        if(this.osVersion){
            writer.writeStringValue("osVersion", this.osVersion);
        }
        if(this.status){
            writer.writeEnumValue<ComplianceStatus>("status", this.status);
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        if(this.userName){
            writer.writeStringValue("userName", this.userName);
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
     * Gets the userId property value. The User id that is being reported.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The User id that is being reported.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
    /**
     * Gets the userName property value. The User Name that is being reported
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. The User Name that is being reported
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        if(value) {
            this._userName = value;
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
