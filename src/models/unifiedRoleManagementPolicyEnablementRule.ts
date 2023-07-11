import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyEnablementRule extends Parsable, UnifiedRoleManagementPolicyRule {
    /**
     * The collection of rules that are enabled for this policy rule. For example, MultiFactorAuthentication, Ticketing, and Justification.
     */
    enabledRules?: string[] | undefined;
}
