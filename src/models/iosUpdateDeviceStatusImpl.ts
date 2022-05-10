import {ComplianceStatus} from './complianceStatus';
import {EntityImpl} from './index';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosUpdateDeviceStatusImpl extends EntityImpl implements IosUpdateDeviceStatus, Parsable {
    /** The DateTime when device compliance grace period expires  */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Device name of the DevicePolicyStatus.  */
    deviceDisplayName?: string | undefined;
    /** The device id that is being reported.  */
    deviceId?: string | undefined;
    /** The device model that is being reported  */
    deviceModel?: string | undefined;
    /** The installation status of the policy report. Possible values are: success, available, idle, unknown, mdmClientCrashed, timeout, downloading, downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower, downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower, installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError, updateError, deviceOsHigherThanDesiredOsVersion, updateScanFailed.  */
    installStatus?: IosUpdatesInstallStatus | undefined;
    /** Last modified date time of the policy report.  */
    lastReportedDateTime?: Date | undefined;
    /** The device version that is being reported.  */
    osVersion?: string | undefined;
    /** Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.  */
    status?: ComplianceStatus | undefined;
    /** The User id that is being reported.  */
    userId?: string | undefined;
    /** The User Name that is being reported  */
    userName?: string | undefined;
    /** UserPrincipalName.  */
    userPrincipalName?: string | undefined;
    /**
     * Instantiates a new iosUpdateDeviceStatus and sets the default values.
     * @param iosUpdateDeviceStatusParameterValue 
     */
    public constructor(iosUpdateDeviceStatusParameterValue?: IosUpdateDeviceStatus | undefined) {
        super();
        this.complianceGracePeriodExpirationDateTime = iosUpdateDeviceStatusParameterValue?.complianceGracePeriodExpirationDateTime ;
        this.deviceDisplayName = iosUpdateDeviceStatusParameterValue?.deviceDisplayName ;
        this.deviceId = iosUpdateDeviceStatusParameterValue?.deviceId ;
        this.deviceModel = iosUpdateDeviceStatusParameterValue?.deviceModel ;
        this.installStatus = iosUpdateDeviceStatusParameterValue?.installStatus ;
        this.lastReportedDateTime = iosUpdateDeviceStatusParameterValue?.lastReportedDateTime ;
        this.osVersion = iosUpdateDeviceStatusParameterValue?.osVersion ;
        this.status = iosUpdateDeviceStatusParameterValue?.status ;
        this.userId = iosUpdateDeviceStatusParameterValue?.userId ;
        this.userName = iosUpdateDeviceStatusParameterValue?.userName ;
        this.userPrincipalName = iosUpdateDeviceStatusParameterValue?.userPrincipalName ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.complianceGracePeriodExpirationDateTime){
        if(this.complianceGracePeriodExpirationDateTime)
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        }
        if(this.deviceDisplayName){
        if(this.deviceDisplayName)
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        }
        if(this.deviceId){
        if(this.deviceId)
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceModel){
        if(this.deviceModel)
        writer.writeStringValue("deviceModel", this.deviceModel);
        }
        if(this.installStatus){
        if(this.installStatus)
        writer.writeEnumValue<IosUpdatesInstallStatus>("installStatus", this.installStatus);
        }
        if(this.lastReportedDateTime){
        if(this.lastReportedDateTime)
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        }
        if(this.osVersion){
        if(this.osVersion)
        writer.writeStringValue("osVersion", this.osVersion);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<ComplianceStatus>("status", this.status);
        }
        if(this.userId){
        if(this.userId)
        writer.writeStringValue("userId", this.userId);
        }
        if(this.userName){
        if(this.userName)
        writer.writeStringValue("userName", this.userName);
        }
        if(this.userPrincipalName){
        if(this.userPrincipalName)
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
