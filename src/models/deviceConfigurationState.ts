import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {Entity} from './entity';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationState extends Entity, Parsable {
    /**
     * The name of the policy for this policyBase
     */
    displayName?: string | undefined;
    /**
     * Supported platform types for policies.
     */
    platformType?: PolicyPlatformType | undefined;
    /**
     * Count of how many setting a policy holds
     */
    settingCount?: number | undefined;
    /**
     * The settingStates property
     */
    settingStates?: DeviceConfigurationSettingState[] | undefined;
    /**
     * The state property
     */
    state?: ComplianceStatus | undefined;
    /**
     * The version of the policy
     */
    version?: number | undefined;
}
