import { ComplianceStatus } from './complianceStatus';
import { type DeviceConfigurationSettingState } from './deviceConfigurationSettingState';
import { type Entity } from './entity';
import { PolicyPlatformType } from './policyPlatformType';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
