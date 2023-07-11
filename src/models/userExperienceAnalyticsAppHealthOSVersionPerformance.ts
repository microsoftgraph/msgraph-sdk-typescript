import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthOSVersionPerformance extends Entity, Parsable {
    /**
     * The number of active devices for the OS version. Valid values 0 to 2147483647. Supports: $filter, $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    activeDeviceCount?: number | undefined;
    /**
     * The mean time to failure for the application in minutes. Valid values 0 to 2147483647. Supports: $filter, $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    meanTimeToFailureInMinutes?: number | undefined;
    /**
     * The OS build number installed on the device. Supports: $select, $OrderBy. Read-only.
     */
    osBuildNumber?: string | undefined;
    /**
     * The OS version installed on the device. Supports: $select, $OrderBy. Read-only.
     */
    osVersion?: string | undefined;
    /**
     * The application health score of the OS version. Valid values 0 to 100. Supports: $filter, $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    osVersionAppHealthScore?: number | undefined;
}
