import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAuthenticationContextRule extends Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** The value of the authentication context claim. */
    claimValue?: string | undefined;
    /** Whether this rule is enabled. */
    isEnabled?: boolean | undefined;
}
