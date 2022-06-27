import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends Partial<AdditionalDataHolder>, DeviceEnrollmentConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Android restrictions based on platform, platform operating system version, and device ownership */
    androidRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Ios restrictions based on platform, platform operating system version, and device ownership */
    iosRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Mac restrictions based on platform, platform operating system version, and device ownership */
    macOSRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Windows mobile restrictions based on platform, platform operating system version, and device ownership */
    windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Windows restrictions based on platform, platform operating system version, and device ownership */
    windowsRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
}
