import {ApprovalSettings} from './approvalSettings';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyApprovalRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The settings for approval of the role assignment. */
    setting?: ApprovalSettings | undefined;
}
