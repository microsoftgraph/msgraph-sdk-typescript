import {DiskType} from './diskType';
import {Entity} from './entity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDevicePerformance extends Entity, Parsable {
    /**
     * Average (mean) number of Blue Screens per device in the last 30 days. Valid values 0 to 9999999
     */
    averageBlueScreens?: number | undefined;
    /**
     * Average (mean) number of Restarts per device in the last 30 days. Valid values 0 to 9999999
     */
    averageRestarts?: number | undefined;
    /**
     * Number of Blue Screens in the last 30 days. Valid values 0 to 9999999
     */
    blueScreenCount?: number | undefined;
    /**
     * The user experience analytics device boot score.
     */
    bootScore?: number | undefined;
    /**
     * The user experience analytics device core boot time in milliseconds.
     */
    coreBootTimeInMs?: number | undefined;
    /**
     * The user experience analytics device core login time in milliseconds.
     */
    coreLoginTimeInMs?: number | undefined;
    /**
     * User experience analytics summarized device count.
     */
    deviceCount?: number | undefined;
    /**
     * The user experience analytics device name.
     */
    deviceName?: string | undefined;
    /**
     * The diskType property
     */
    diskType?: DiskType | undefined;
    /**
     * The user experience analytics device group policy boot time in milliseconds.
     */
    groupPolicyBootTimeInMs?: number | undefined;
    /**
     * The user experience analytics device group policy login time in milliseconds.
     */
    groupPolicyLoginTimeInMs?: number | undefined;
    /**
     * The healthStatus property
     */
    healthStatus?: UserExperienceAnalyticsHealthState | undefined;
    /**
     * The user experience analytics device login score.
     */
    loginScore?: number | undefined;
    /**
     * The user experience analytics device manufacturer.
     */
    manufacturer?: string | undefined;
    /**
     * The user experience analytics device model.
     */
    model?: string | undefined;
    /**
     * The user experience analytics model level startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    modelStartupPerformanceScore?: number | undefined;
    /**
     * The user experience analytics device Operating System version.
     */
    operatingSystemVersion?: string | undefined;
    /**
     * The user experience analytics responsive desktop time in milliseconds.
     */
    responsiveDesktopTimeInMs?: number | undefined;
    /**
     * Number of Restarts in the last 30 days. Valid values 0 to 9999999
     */
    restartCount?: number | undefined;
    /**
     * The user experience analytics device startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    startupPerformanceScore?: number | undefined;
}
