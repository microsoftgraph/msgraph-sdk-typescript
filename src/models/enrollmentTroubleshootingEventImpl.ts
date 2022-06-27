import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {EnrollmentTroubleshootingEvent} from './enrollmentTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EnrollmentTroubleshootingEventImpl extends DeviceManagementTroubleshootingEventImpl implements EnrollmentTroubleshootingEvent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Azure AD device identifier. */
    public deviceId?: string | undefined;
    /** Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile. */
    public enrollmentType?: DeviceEnrollmentType | undefined;
    /** Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation, userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced, clientDisconnected, userAbandonment. */
    public failureCategory?: DeviceEnrollmentFailureReason | undefined;
    /** Detailed failure reason. */
    public failureReason?: string | undefined;
    /** Device identifier created or collected by Intune. */
    public managedDeviceIdentifier?: string | undefined;
    /** Operating System. */
    public operatingSystem?: string | undefined;
    /** OS Version. */
    public osVersion?: string | undefined;
    /** Identifier for the user that tried to enroll the device. */
    public userId?: string | undefined;
    /**
     * Instantiates a new EnrollmentTroubleshootingEvent and sets the default values.
     * @param enrollmentTroubleshootingEventParameterValue 
     */
    public constructor(enrollmentTroubleshootingEventParameterValue?: EnrollmentTroubleshootingEvent | undefined) {
        super(enrollmentTroubleshootingEventParameterValue);
        this.additionalData = enrollmentTroubleshootingEventParameterValue?.additionalData ? enrollmentTroubleshootingEventParameterValue?.additionalData! : {};
        this.deviceId = enrollmentTroubleshootingEventParameterValue?.deviceId;
        this.enrollmentType = enrollmentTroubleshootingEventParameterValue?.enrollmentType;
        this.failureCategory = enrollmentTroubleshootingEventParameterValue?.failureCategory;
        this.failureReason = enrollmentTroubleshootingEventParameterValue?.failureReason;
        this.managedDeviceIdentifier = enrollmentTroubleshootingEventParameterValue?.managedDeviceIdentifier;
        this.operatingSystem = enrollmentTroubleshootingEventParameterValue?.operatingSystem;
        this.osVersion = enrollmentTroubleshootingEventParameterValue?.osVersion;
        this.userId = enrollmentTroubleshootingEventParameterValue?.userId;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
