import {WindowsInformationProtection} from './windowsInformationProtection';
import {WindowsInformationProtectionPinCharacterRequirements} from './windowsInformationProtectionPinCharacterRequirements';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionPolicy extends Parsable, WindowsInformationProtection {
    /**
     * Offline interval before app data is wiped (days)
     */
    daysWithoutContactBeforeUnenroll?: number | undefined;
    /**
     * Enrollment url for the MDM
     */
    mdmEnrollmentUrl?: string | undefined;
    /**
     * Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become PIN or password locked.   Range is an integer X where 0 <= X <= 999.
     */
    minutesOfInactivityBeforeDeviceLock?: number | undefined;
    /**
     * Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows 10, version 1511. Default is 0.
     */
    numberOfPastPinsRemembered?: number | undefined;
    /**
     * The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe functionality. Range is an integer X where 4 <= X <= 16 for desktop and 0 <= X <= 999 for mobile devices.
     */
    passwordMaximumAttemptCount?: number | undefined;
    /**
     * Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in Windows 10, version 1511. Default is 0.
     */
    pinExpirationDays?: number | undefined;
    /**
     * Pin Character Requirements
     */
    pinLowercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /**
     * Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number you can configure for this policy setting is 4. The largest number you can configure must be less than the number configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
     */
    pinMinimumLength?: number | undefined;
    /**
     * Pin Character Requirements
     */
    pinSpecialCharacters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /**
     * Pin Character Requirements
     */
    pinUppercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /**
     * New property in RS2, pending documentation
     */
    revokeOnMdmHandoffDisabled?: boolean | undefined;
    /**
     * Boolean value that sets Windows Hello for Business as a method for signing into Windows.
     */
    windowsHelloForBusinessBlocked?: boolean | undefined;
}
