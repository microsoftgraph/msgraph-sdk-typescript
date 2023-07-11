import {Entity} from './entity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereModelPerformance extends Entity, Parsable {
    /**
     * The cloud identity score of the device model. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    cloudIdentityScore?: number | undefined;
    /**
     * The cloud management score of the device model. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    cloudManagementScore?: number | undefined;
    /**
     * The cloud provisioning score of the device model.  Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    cloudProvisioningScore?: number | undefined;
    /**
     * The healthStatus property
     */
    healthStatus?: UserExperienceAnalyticsHealthState | undefined;
    /**
     * The manufacturer name of the device. Supports: $select, $OrderBy. Read-only.
     */
    manufacturer?: string | undefined;
    /**
     * The model name of the device. Supports: $select, $OrderBy. Read-only.
     */
    model?: string | undefined;
    /**
     * The devices count for the model. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    modelDeviceCount?: number | undefined;
    /**
     * The window score of the device model. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    windowsScore?: number | undefined;
    /**
     * The work from anywhere score of the device model. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    workFromAnywhereScore?: number | undefined;
}
