import {Entity} from './entity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsModelScores extends Entity, Parsable {
    /**
     * Indicates a score calculated from application health data to indicate when a device is having problems running one or more applications. Valid values range from 0-100. Value -1 means associated score is unavailable. A higher score indicates a healthier device. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    appReliabilityScore?: number | undefined;
    /**
     * Indicates a calulated score indicating the health of the device's battery. Valid values range from 0-100. Value -1 means associated score is unavailable. A higher score indicates a healthier device. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    batteryHealthScore?: number | undefined;
    /**
     * Indicates a weighted average of the various scores. Valid values range from 0-100. Value -1 means associated score is unavailable. A higher score indicates a healthier device. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    endpointAnalyticsScore?: number | undefined;
    /**
     * The healthStatus property
     */
    healthStatus?: UserExperienceAnalyticsHealthState | undefined;
    /**
     * The manufacturer name of the device. Examples: Microsoft Corporation, HP, Lenovo. Supports: $select, $OrderBy. Read-only.
     */
    manufacturer?: string | undefined;
    /**
     * The model name of the device. Supports: $select, $OrderBy. Read-only.
     */
    model?: string | undefined;
    /**
     * Indicates unique devices count of given model in a consolidated report. Supports: $select, $OrderBy. Read-only. Valid values -9.22337203685478E+18 to 9.22337203685478E+18
     */
    modelDeviceCount?: number | undefined;
    /**
     * Indicates a weighted average of boot score and logon score used for measuring startup performance. Valid values range from 0-100. Value -1 means associated score is unavailable. A higher score indicates a healthier device. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    startupPerformanceScore?: number | undefined;
    /**
     * Indicates a weighted score of the work from anywhere on a device level. Valid values range from 0-100. Value -1 means associated score is unavailable. A higher score indicates a healthier device. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    workFromAnywhereScore?: number | undefined;
}
