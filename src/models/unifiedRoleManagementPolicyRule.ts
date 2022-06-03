import {Entity} from './entity';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyRule extends Entity, Partial<Parsable> {
    /** The target for the policy rule. */
    target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
}
