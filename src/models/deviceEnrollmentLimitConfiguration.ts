import type {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration, Parsable {
    /**
     * The maximum number of devices that a user can enroll
     */
    limit?: number | undefined;
}
