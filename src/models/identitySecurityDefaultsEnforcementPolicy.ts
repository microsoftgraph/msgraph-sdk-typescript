import {PolicyBase} from './policyBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentitySecurityDefaultsEnforcementPolicy extends Partial<Parsable>, PolicyBase {
    /** If set to true, Azure Active Directory security defaults is enabled for the tenant. */
    isEnabled?: boolean | undefined;
}
