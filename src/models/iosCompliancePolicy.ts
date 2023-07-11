import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosCompliancePolicy extends DeviceCompliancePolicy, Parsable {
    /**
     * Require that devices have enabled device threat protection .
     */
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Device threat protection levels for the Device Threat Protection API.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /**
     * Indicates whether or not to require a managed email profile.
     */
    managedEmailProfileRequired?: boolean | undefined;
    /**
     * Maximum IOS version.
     */
    osMaximumVersion?: string | undefined;
    /**
     * Minimum IOS version.
     */
    osMinimumVersion?: string | undefined;
    /**
     * Indicates whether or not to block simple passcodes.
     */
    passcodeBlockSimple?: boolean | undefined;
    /**
     * Number of days before the passcode expires. Valid values 1 to 65535
     */
    passcodeExpirationDays?: number | undefined;
    /**
     * The number of character sets required in the password.
     */
    passcodeMinimumCharacterSetCount?: number | undefined;
    /**
     * Minimum length of passcode. Valid values 4 to 14
     */
    passcodeMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before a passcode is required.
     */
    passcodeMinutesOfInactivityBeforeLock?: number | undefined;
    /**
     * Number of previous passcodes to block. Valid values 1 to 24
     */
    passcodePreviousPasscodeBlockCount?: number | undefined;
    /**
     * Indicates whether or not to require a passcode.
     */
    passcodeRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passcodeRequiredType?: RequiredPasswordType | undefined;
    /**
     * Devices must not be jailbroken or rooted.
     */
    securityBlockJailbrokenDevices?: boolean | undefined;
}
