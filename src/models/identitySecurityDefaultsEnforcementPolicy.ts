import {PolicyBase} from './policyBase';

export interface IdentitySecurityDefaultsEnforcementPolicy extends PolicyBase{
    /** If set to true, Azure Active Directory security defaults is enabled for the tenant. */
    isEnabled?:boolean | undefined;
}
