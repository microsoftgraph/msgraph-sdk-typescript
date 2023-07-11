import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId extends Entity, Parsable {
    /**
     * The number of crashes for the app. Valid values -2147483648 to 2147483647
     */
    appCrashCount?: number | undefined;
    /**
     * The friendly name of the application.
     */
    appDisplayName?: string | undefined;
    /**
     * The name of the application.
     */
    appName?: string | undefined;
    /**
     * The publisher of the application.
     */
    appPublisher?: string | undefined;
    /**
     * The version of the application.
     */
    appVersion?: string | undefined;
    /**
     * The name of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceDisplayName?: string | undefined;
    /**
     * The Intune device id of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceId?: string | undefined;
    /**
     * The date and time when the statistics were last computed. The value cannot be modified and is automatically populated when the statistics are computed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2022 would look like this: '2022-01-01T00:00:00Z'. Returned by default. Read-only.
     */
    processedDateTime?: Date | undefined;
}
