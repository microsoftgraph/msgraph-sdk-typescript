import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCompliancePolicy extends DeviceCompliancePolicy, Parsable {
    /**
     * Require that devices have enabled device threat protection.
     */
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Device threat protection levels for the Device Threat Protection API.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /**
     * Corresponds to the 'Block all incoming connections' option.
     */
    firewallBlockAllIncoming?: boolean | undefined;
    /**
     * Whether the firewall should be enabled or not.
     */
    firewallEnabled?: boolean | undefined;
    /**
     * Corresponds to 'Enable stealth mode.'
     */
    firewallEnableStealthMode?: boolean | undefined;
    /**
     * Maximum MacOS version.
     */
    osMaximumVersion?: string | undefined;
    /**
     * Minimum MacOS version.
     */
    osMinimumVersion?: string | undefined;
    /**
     * Indicates whether or not to block simple passwords.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * Number of days before the password expires. Valid values 1 to 65535
     */
    passwordExpirationDays?: number | undefined;
    /**
     * The number of character sets required in the password.
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * Minimum length of password. Valid values 4 to 14
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before a password is required.
     */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /**
     * Number of previous passwords to block. Valid values 1 to 24
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Whether or not to require a password.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Require encryption on Mac OS devices.
     */
    storageRequireEncryption?: boolean | undefined;
    /**
     * Require that devices have enabled system integrity protection.
     */
    systemIntegrityProtectionEnabled?: boolean | undefined;
}
