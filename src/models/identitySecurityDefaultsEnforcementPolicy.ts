import { type PolicyBase } from './policyBase';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IdentitySecurityDefaultsEnforcementPolicy extends Parsable, PolicyBase {
    /**
     * If set to true, Azure Active Directory security defaults is enabled for the tenant.
     */
    isEnabled?: boolean | undefined;
}
