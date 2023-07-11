import {Entity} from './entity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDevicePerformance extends Entity, Parsable {
    /**
     * The number of application crashes for the device. Valid values 0 to 2147483647. Supports: $filter, $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    appCrashCount?: number | undefined;
    /**
     * The number of application hangs for the device. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    appHangCount?: number | undefined;
    /**
     * The number of distinct application crashes for the device. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    crashedAppCount?: number | undefined;
    /**
     * The application health score of the device. Valid values 0 to 100. Supports: $filter, $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    deviceAppHealthScore?: number | undefined;
    /**
     * The name of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceDisplayName?: string | undefined;
    /**
     * The Intune device id of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceId?: string | undefined;
    /**
     * The manufacturer name of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceManufacturer?: string | undefined;
    /**
     * The model name of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceModel?: string | undefined;
    /**
     * The healthStatus property
     */
    healthStatus?: UserExperienceAnalyticsHealthState | undefined;
    /**
     * The mean time to failure for the application in minutes. Valid values 0 to 2147483647. Supports: $filter, $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    meanTimeToFailureInMinutes?: number | undefined;
    /**
     * The date and time when the statistics were last computed. The value cannot be modified and is automatically populated when the statistics are computed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2022 would look like this: '2022-01-01T00:00:00Z'. Returned by default. Read-only.
     */
    processedDateTime?: Date | undefined;
}
