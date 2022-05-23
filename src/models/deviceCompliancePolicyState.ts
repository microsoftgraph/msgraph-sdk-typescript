import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {Entity} from './entity';
import {PolicyPlatformType} from './policyPlatformType';

export interface DeviceCompliancePolicyState extends Entity{
    /** The name of the policy for this policyBase */
    displayName?:string | undefined;
    /** Platform type that the policy applies to */
    platformType?:PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds */
    settingCount?:number | undefined;
    /** The settingStates property */
    settingStates?:DeviceCompliancePolicySettingState[] | undefined;
    /** The compliance state of the policy */
    state?:ComplianceStatus | undefined;
    /** The version of the policy */
    version?:number | undefined;
}
