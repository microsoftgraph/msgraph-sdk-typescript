import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent, Partial<Parsable> {
    /** Azure AD device identifier. */
    deviceId?: string | undefined;
    /** Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile. */
    enrollmentType?: DeviceEnrollmentType | undefined;
    /** Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation, userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced, clientDisconnected, userAbandonment. */
    failureCategory?: DeviceEnrollmentFailureReason | undefined;
    /** Detailed failure reason. */
    failureReason?: string | undefined;
    /** Device identifier created or collected by Intune. */
    managedDeviceIdentifier?: string | undefined;
    /** Operating System. */
    operatingSystem?: string | undefined;
    /** OS Version. */
    osVersion?: string | undefined;
    /** Identifier for the user that tried to enroll the device. */
    userId?: string | undefined;
}
