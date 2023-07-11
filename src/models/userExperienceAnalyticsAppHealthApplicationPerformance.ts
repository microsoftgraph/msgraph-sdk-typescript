import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthApplicationPerformance extends Entity, Parsable {
    /**
     * The health score of the application. Valid values 0 to 100. Supports: $filter, $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
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
     * The number of hangs for the application. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    appHangCount?: number | undefined;
    /**
     * The health score of the application. Valid values 0 to 100. Supports: $filter, $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    appHealthScore?: number | undefined;
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
}
