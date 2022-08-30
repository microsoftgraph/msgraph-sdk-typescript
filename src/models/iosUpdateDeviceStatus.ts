import {ComplianceStatus} from './complianceStatus';
import {Entity} from './index';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosUpdateDeviceStatus extends Entity implements Parsable {
    /** The DateTime when device compliance grace period expires */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus. */
    private _deviceDisplayName?: string | undefined;
    /** The device id that is being reported. */
    private _deviceId?: string | undefined;
    /** The device model that is being reported */
    private _deviceModel?: string | undefined;
    /** The installStatus property */
    private _installStatus?: IosUpdatesInstallStatus | undefined;
    /** Last modified date time of the policy report. */
    private _lastReportedDateTime?: Date | undefined;
    /** The device version that is being reported. */
    private _osVersion?: string | undefined;
    /** The status property */
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
        this._complianceGracePeriodExpirationDateTime = value;
    };
    /**
     * Instantiates a new IosUpdateDeviceStatus and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosUpdateDeviceStatus";
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
        this._deviceDisplayName = value;
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
        this._deviceId = value;
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
        this._deviceModel = value;
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
     * Gets the installStatus property value. The installStatus property
     * @returns a iosUpdatesInstallStatus
     */
    public get installStatus() {
        return this._installStatus;
    };
    /**
     * Sets the installStatus property value. The installStatus property
     * @param value Value to set for the installStatus property.
     */
    public set installStatus(value: IosUpdatesInstallStatus | undefined) {
        this._installStatus = value;
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
        this._lastReportedDateTime = value;
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
        this._osVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceModel", this.deviceModel);
        writer.writeEnumValue<IosUpdatesInstallStatus>("installStatus", this.installStatus);
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeEnumValue<ComplianceStatus>("status", this.status);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userName", this.userName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the status property value. The status property
     * @returns a complianceStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: ComplianceStatus | undefined) {
        this._status = value;
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
        this._userId = value;
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
        this._userName = value;
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
        this._userPrincipalName = value;
    };
}
