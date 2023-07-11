import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {Entity} from './entity';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicySettingStateSummary extends Entity, Parsable {
    /**
     * Number of compliant devices
     */
    compliantDeviceCount?: number | undefined;
    /**
     * Number of conflict devices
     */
    conflictDeviceCount?: number | undefined;
    /**
     * Not yet documented
     */
    deviceComplianceSettingStates?: DeviceComplianceSettingState[] | undefined;
    /**
     * Number of error devices
     */
    errorDeviceCount?: number | undefined;
    /**
     * Number of NonCompliant devices
     */
    nonCompliantDeviceCount?: number | undefined;
    /**
     * Number of not applicable devices
     */
    notApplicableDeviceCount?: number | undefined;
    /**
     * Supported platform types for policies.
     */
    platformType?: PolicyPlatformType | undefined;
    /**
     * Number of remediated devices
     */
    remediatedDeviceCount?: number | undefined;
    /**
     * The setting class name and property name.
     */
    setting?: string | undefined;
    /**
     * Name of the setting.
     */
    settingName?: string | undefined;
    /**
     * Number of unknown devices
     */
    unknownDeviceCount?: number | undefined;
}
