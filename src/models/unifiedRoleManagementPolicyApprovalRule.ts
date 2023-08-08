import type {ApprovalSettings} from './approvalSettings';
import type {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyApprovalRule extends Parsable, UnifiedRoleManagementPolicyRule {
    /**
     * The settings for approval of the role assignment.
     */
    setting?: ApprovalSettings | undefined;
}
