import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent, Parsable {
    /**
     * Azure AD device identifier.
     */
    deviceId?: string | undefined;
    /**
     * Possible ways of adding a mobile device to management.
     */
    enrollmentType?: DeviceEnrollmentType | undefined;
    /**
     * Top level failure categories for enrollment.
     */
    failureCategory?: DeviceEnrollmentFailureReason | undefined;
    /**
     * Detailed failure reason.
     */
    failureReason?: string | undefined;
    /**
     * Device identifier created or collected by Intune.
     */
    managedDeviceIdentifier?: string | undefined;
    /**
     * Operating System.
     */
    operatingSystem?: string | undefined;
    /**
     * OS Version.
     */
    osVersion?: string | undefined;
    /**
     * Identifier for the user that tried to enroll the device.
     */
    userId?: string | undefined;
}
