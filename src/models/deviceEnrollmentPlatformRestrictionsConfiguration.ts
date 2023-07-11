import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration, Parsable {
    /**
     * Android restrictions based on platform, platform operating system version, and device ownership
     */
    androidRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /**
     * Ios restrictions based on platform, platform operating system version, and device ownership
     */
    iosRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /**
     * Mac restrictions based on platform, platform operating system version, and device ownership
     */
    macOSRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /**
     * Windows mobile restrictions based on platform, platform operating system version, and device ownership
     */
    windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /**
     * Windows restrictions based on platform, platform operating system version, and device ownership
     */
    windowsRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
}
