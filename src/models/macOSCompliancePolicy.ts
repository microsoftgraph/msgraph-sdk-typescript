import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCompliancePolicy extends Partial<AdditionalDataHolder>, DeviceCompliancePolicy, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Require that devices have enabled device threat protection. */
    deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Corresponds to the 'Block all incoming connections' option. */
    firewallBlockAllIncoming?: boolean | undefined;
    /** Whether the firewall should be enabled or not. */
    firewallEnabled?: boolean | undefined;
    /** Corresponds to 'Enable stealth mode.' */
    firewallEnableStealthMode?: boolean | undefined;
    /** Maximum MacOS version. */
    osMaximumVersion?: string | undefined;
    /** Minimum MacOS version. */
    osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple passwords. */
    passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 65535 */
    passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of password. Valid values 4 to 14 */
    passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require encryption on Mac OS devices. */
    storageRequireEncryption?: boolean | undefined;
    /** Require that devices have enabled system integrity protection. */
    systemIntegrityProtectionEnabled?: boolean | undefined;
}
