import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDevicePerformanceDetails extends Entity, Parsable {
    /**
     * The friendly name of the application for which the event occurred. Possible values are: outlook.exe, excel.exe. Supports: $select, $OrderBy. Read-only.
     */
    appDisplayName?: string | undefined;
    /**
     * The publisher of the application. Supports: $select, $OrderBy. Read-only.
     */
    appPublisher?: string | undefined;
    /**
     * The version of the application. Possible values are: 1.0.0.1, 75.65.23.9. Supports: $select, $OrderBy. Read-only.
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
     * The time the event occurred. The value cannot be modified and is automatically populated when the statistics are computed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2022 would look like this: '2022-01-01T00:00:00Z'. Returned by default. Read-only.
     */
    eventDateTime?: Date | undefined;
    /**
     * The type of the event. Supports: $select, $OrderBy. Read-only.
     */
    eventType?: string | undefined;
}
