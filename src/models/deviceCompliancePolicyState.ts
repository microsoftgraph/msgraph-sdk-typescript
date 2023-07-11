import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {Entity} from './entity';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyState extends Entity, Parsable {
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
    settingStates?: DeviceCompliancePolicySettingState[] | undefined;
    /**
     * The state property
     */
    state?: ComplianceStatus | undefined;
    /**
     * The version of the policy
     */
    version?: number | undefined;
}
