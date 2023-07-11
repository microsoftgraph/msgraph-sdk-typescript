import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails extends Entity, Parsable {
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
     * The total number of devices that have reported one or more application crashes for this application and version. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    deviceCountWithCrashes?: number | undefined;
    /**
     * When TRUE, indicates the version of application is the latest version for that application that is in use. When FALSE, indicates the version is not the latest version. FALSE by default. Supports: $select, $OrderBy.
     */
    isLatestUsedVersion?: boolean | undefined;
    /**
     * When TRUE, indicates the version of application is the most used version for that application. When FALSE, indicates the version is not the most used version. FALSE by default. Supports: $select, $OrderBy. Read-only.
     */
    isMostUsedVersion?: boolean | undefined;
}
