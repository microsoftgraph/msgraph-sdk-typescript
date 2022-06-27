import {Entity} from './entity';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyRule extends Entity, Partial<Parsable> {
    /** Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne). */
    target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
}
