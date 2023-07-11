import {Entity} from './entity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAppHealthDeviceModelPerformance extends Entity, Parsable {
    /**
     * The number of active devices for the model. Valid values 0 to 2147483647. Supports: $filter, $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    activeDeviceCount?: number | undefined;
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
     * The application health score of the device model. Valid values 0 to 100. Supports: $filter, $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    modelAppHealthScore?: number | undefined;
}
