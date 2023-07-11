import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {Enablement} from './enablement';
import {WindowsHelloForBusinessPinUsage} from './windowsHelloForBusinessPinUsage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentWindowsHelloForBusinessConfiguration extends DeviceEnrollmentConfiguration, Parsable {
    /**
     * Possible values of a property
     */
    enhancedBiometricsState?: Enablement | undefined;
    /**
     * Controls the period of time (in days) that a PIN can be used before the system requires the user to change it. This must be set between 0 and 730, inclusive. If set to 0, the user's PIN will never expire
     */
    pinExpirationInDays?: number | undefined;
    /**
     * Windows Hello for Business pin usage options
     */
    pinLowercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /**
     * Controls the maximum number of characters allowed for the Windows Hello for Business PIN. This value must be between 4 and 127, inclusive. This value must be greater than or equal to the value set for the minimum PIN.
     */
    pinMaximumLength?: number | undefined;
    /**
     * Controls the minimum number of characters required for the Windows Hello for Business PIN.  This value must be between 4 and 127, inclusive, and less than or equal to the value set for the maximum PIN.
     */
    pinMinimumLength?: number | undefined;
    /**
     * Controls the ability to prevent users from using past PINs. This must be set between 0 and 50, inclusive, and the current PIN of the user is included in that count. If set to 0, previous PINs are not stored. PIN history is not preserved through a PIN reset.
     */
    pinPreviousBlockCount?: number | undefined;
    /**
     * Windows Hello for Business pin usage options
     */
    pinSpecialCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /**
     * Windows Hello for Business pin usage options
     */
    pinUppercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /**
     * Controls the use of Remote Windows Hello for Business. Remote Windows Hello for Business provides the ability for a portable, registered device to be usable as a companion for desktop authentication. The desktop must be Azure AD joined and the companion device must have a Windows Hello for Business PIN.
     */
    remotePassportEnabled?: boolean | undefined;
    /**
     * Controls whether to require a Trusted Platform Module (TPM) for provisioning Windows Hello for Business. A TPM provides an additional security benefit in that data stored on it cannot be used on other devices. If set to False, all devices can provision Windows Hello for Business even if there is not a usable TPM.
     */
    securityDeviceRequired?: boolean | undefined;
    /**
     * Possible values of a property
     */
    state?: Enablement | undefined;
    /**
     * Controls the use of biometric gestures, such as face and fingerprint, as an alternative to the Windows Hello for Business PIN.  If set to False, biometric gestures are not allowed. Users must still configure a PIN as a backup in case of failures.
     */
    unlockWithBiometricsEnabled?: boolean | undefined;
}
