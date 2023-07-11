import {Entity} from './entity';
import {UserExperienceAnalyticsOperatingSystemRestartCategory} from './userExperienceAnalyticsOperatingSystemRestartCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDeviceStartupHistory extends Entity, Parsable {
    /**
     * The device core boot time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    coreBootTimeInMs?: number | undefined;
    /**
     * The device core login time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    coreLoginTimeInMs?: number | undefined;
    /**
     * The Intune device id of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceId?: string | undefined;
    /**
     * The impact of device feature updates on boot time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    featureUpdateBootTimeInMs?: number | undefined;
    /**
     * The impact of device group policy client on boot time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    groupPolicyBootTimeInMs?: number | undefined;
    /**
     * The impact of device group policy client on login time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    groupPolicyLoginTimeInMs?: number | undefined;
    /**
     * When TRUE, indicates the device boot record is associated with feature updates. When FALSE, indicates the device boot record is not associated with feature updates. Supports: $select, $OrderBy. Read-only.
     */
    isFeatureUpdate?: boolean | undefined;
    /**
     * When TRUE, indicates the device login is the first login after a reboot. When FALSE, indicates the device login is not the first login after a reboot. Supports: $select, $OrderBy. Read-only.
     */
    isFirstLogin?: boolean | undefined;
    /**
     * The user experience analytics device boot record's operating system version. Supports: $select, $OrderBy. Read-only.
     */
    operatingSystemVersion?: string | undefined;
    /**
     * The time for desktop to become responsive during login process in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    responsiveDesktopTimeInMs?: number | undefined;
    /**
     * Operating System restart category.
     */
    restartCategory?: UserExperienceAnalyticsOperatingSystemRestartCategory | undefined;
    /**
     * OS restart fault bucket. The fault bucket is used to find additional information about a system crash. Supports: $select, $OrderBy. Read-only.
     */
    restartFaultBucket?: string | undefined;
    /**
     * OS restart stop code. This shows the bug check code which can be used to look up the blue screen reason. Supports: $select, $OrderBy. Read-only.
     */
    restartStopCode?: string | undefined;
    /**
     * The device boot start time. The value cannot be modified and is automatically populated when the device performs a reboot. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2022 would look like this: '2022-01-01T00:00:00Z'. Returned by default. Read-only.
     */
    startTime?: Date | undefined;
    /**
     * The device total boot time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    totalBootTimeInMs?: number | undefined;
    /**
     * The device total login time in milliseconds. Supports: $select, $OrderBy. Read-only.
     */
    totalLoginTimeInMs?: number | undefined;
}
