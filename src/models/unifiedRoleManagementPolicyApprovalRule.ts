import {ApprovalSettings} from './approvalSettings';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyApprovalRule extends Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** The settings for approval of the role assignment. */
    setting?: ApprovalSettings | undefined;
}
