import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {EnrollmentTroubleshootingEvent} from './enrollmentTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EnrollmentTroubleshootingEventImpl extends DeviceManagementTroubleshootingEventImpl implements EnrollmentTroubleshootingEvent {
    /** Azure AD device identifier. */
    private _deviceId?: string | undefined;
    /** Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile. */
    private _enrollmentType?: DeviceEnrollmentType | undefined;
    /** Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation, userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced, clientDisconnected, userAbandonment. */
    private _failureCategory?: DeviceEnrollmentFailureReason | undefined;
    /** Detailed failure reason. */
    private _failureReason?: string | undefined;
    /** Device identifier created or collected by Intune. */
    private _managedDeviceIdentifier?: string | undefined;
    /** Operating System. */
    private _operatingSystem?: string | undefined;
    /** OS Version. */
    private _osVersion?: string | undefined;
    /** Identifier for the user that tried to enroll the device. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new EnrollmentTroubleshootingEvent and sets the default values.
     * @param enrollmentTroubleshootingEventParameterValue 
     */
    public constructor(enrollmentTroubleshootingEventParameterValue?: EnrollmentTroubleshootingEvent | undefined) {
        super(enrollmentTroubleshootingEventParameterValue);
        this._deviceId = enrollmentTroubleshootingEventParameterValue?.deviceId;
        this._enrollmentType = enrollmentTroubleshootingEventParameterValue?.enrollmentType;
        this._failureCategory = enrollmentTroubleshootingEventParameterValue?.failureCategory;
        this._failureReason = enrollmentTroubleshootingEventParameterValue?.failureReason;
        this._managedDeviceIdentifier = enrollmentTroubleshootingEventParameterValue?.managedDeviceIdentifier;
        this._operatingSystem = enrollmentTroubleshootingEventParameterValue?.operatingSystem;
        this._osVersion = enrollmentTroubleshootingEventParameterValue?.osVersion;
        this._userId = enrollmentTroubleshootingEventParameterValue?.userId;
    };
    /**
     * Gets the deviceId property value. Azure AD device identifier.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Azure AD device identifier.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        if(value) {
            this._deviceId = value;
        }
    };
    /**
     * Gets the enrollmentType property value. Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile.
     * @returns a deviceEnrollmentType
     */
    public get enrollmentType() {
        return this._enrollmentType;
    };
    /**
     * Sets the enrollmentType property value. Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile.
     * @param value Value to set for the enrollmentType property.
     */
    public set enrollmentType(value: DeviceEnrollmentType | undefined) {
        if(value) {
            this._enrollmentType = value;
        }
    };
    /**
     * Gets the failureCategory property value. Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation, userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced, clientDisconnected, userAbandonment.
     * @returns a deviceEnrollmentFailureReason
     */
    public get failureCategory() {
        return this._failureCategory;
    };
    /**
     * Sets the failureCategory property value. Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation, userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced, clientDisconnected, userAbandonment.
     * @param value Value to set for the failureCategory property.
     */
    public set failureCategory(value: DeviceEnrollmentFailureReason | undefined) {
        if(value) {
            this._failureCategory = value;
        }
    };
    /**
     * Gets the failureReason property value. Detailed failure reason.
     * @returns a string
     */
    public get failureReason() {
        return this._failureReason;
    };
    /**
     * Sets the failureReason property value. Detailed failure reason.
     * @param value Value to set for the failureReason property.
     */
    public set failureReason(value: string | undefined) {
        if(value) {
            this._failureReason = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "enrollmentType": n => { this.enrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
            "failureCategory": n => { this.failureCategory = n.getEnumValue<DeviceEnrollmentFailureReason>(DeviceEnrollmentFailureReason); },
            "failureReason": n => { this.failureReason = n.getStringValue(); },
            "managedDeviceIdentifier": n => { this.managedDeviceIdentifier = n.getStringValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the managedDeviceIdentifier property value. Device identifier created or collected by Intune.
     * @returns a string
     */
    public get managedDeviceIdentifier() {
        return this._managedDeviceIdentifier;
    };
    /**
     * Sets the managedDeviceIdentifier property value. Device identifier created or collected by Intune.
     * @param value Value to set for the managedDeviceIdentifier property.
     */
    public set managedDeviceIdentifier(value: string | undefined) {
        if(value) {
            this._managedDeviceIdentifier = value;
        }
    };
    /**
     * Gets the operatingSystem property value. Operating System.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. Operating System.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        if(value) {
            this._operatingSystem = value;
        }
    };
    /**
     * Gets the osVersion property value. OS Version.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. OS Version.
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
        if(this.deviceId){
            writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.enrollmentType){
            writer.writeEnumValue<DeviceEnrollmentType>("enrollmentType", this.enrollmentType);
        }
        if(this.failureCategory){
            writer.writeEnumValue<DeviceEnrollmentFailureReason>("failureCategory", this.failureCategory);
        }
        if(this.failureReason){
            writer.writeStringValue("failureReason", this.failureReason);
        }
        if(this.managedDeviceIdentifier){
            writer.writeStringValue("managedDeviceIdentifier", this.managedDeviceIdentifier);
        }
        if(this.operatingSystem){
            writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.osVersion){
            writer.writeStringValue("osVersion", this.osVersion);
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
    };
    /**
     * Gets the userId property value. Identifier for the user that tried to enroll the device.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Identifier for the user that tried to enroll the device.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
}
