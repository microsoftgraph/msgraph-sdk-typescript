import {Entity} from './entity';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';

export interface UnifiedRoleManagementPolicyRule extends Entity{
    /** The target for the policy rule. */
    target?:UnifiedRoleManagementPolicyRuleTarget | undefined;
}
