import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion extends Entity, Parsable {
    /**
     * The number of devices where the application has been active. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    activeDeviceCount?: number | undefined;
    /**
     * The number of crashes for the application. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    appCrashCount?: number | undefined;
    /**
     * The friendly name of the application. Possible values are: Outlook, Excel. Supports: $select, $OrderBy. Read-only.
     */
    appDisplayName?: string | undefined;
    /**
     * The name of the application. Possible values are: outlook.exe, excel.exe. Supports: $select, $OrderBy. Read-only.
     */
    appName?: string | undefined;
    /**
     * The publisher of the application. Supports: $select, $OrderBy. Read-only.
     */
    appPublisher?: string | undefined;
    /**
     * The total usage time of the application in minutes. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    appUsageDuration?: number | undefined;
    /**
     * The mean time to failure for the application in minutes. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    meanTimeToFailureInMinutes?: number | undefined;
    /**
     * The OS build number of the application. Supports: $select, $OrderBy. Read-only.
     */
    osBuildNumber?: string | undefined;
    /**
     * The OS version of the application. Supports: $select, $OrderBy. Read-only.
     */
    osVersion?: string | undefined;
}
