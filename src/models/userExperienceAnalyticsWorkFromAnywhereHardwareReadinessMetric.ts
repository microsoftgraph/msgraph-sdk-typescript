import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric extends Entity, Parsable {
    /**
     * The percentage of devices for which OS check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    osCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which processor hardware 64-bit architecture check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    processor64BitCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which processor hardware core count check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    processorCoreCountCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which processor hardware family check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    processorFamilyCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which processor hardware speed check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    processorSpeedCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which RAM hardware check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    ramCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which secure boot hardware check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    secureBootCheckFailedPercentage?: number | undefined;
    /**
     * The percentage of devices for which storage hardware check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    storageCheckFailedPercentage?: number | undefined;
    /**
     * The count of total devices in an organization. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    totalDeviceCount?: number | undefined;
    /**
     * The percentage of devices for which Trusted Platform Module (TPM) hardware check has failed. Valid values 0 to 100. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    tpmCheckFailedPercentage?: number | undefined;
    /**
     * The count of devices in an organization eligible for windows upgrade. Valid values 0 to 2147483647. Supports: $select, $OrderBy. Read-only. Valid values -2147483648 to 2147483647
     */
    upgradeEligibleDeviceCount?: number | undefined;
}
