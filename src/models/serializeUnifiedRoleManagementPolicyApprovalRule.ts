import {ApprovalSettings} from './approvalSettings';
import {serializeApprovalSettings} from './serializeApprovalSettings';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyApprovalRule} from './unifiedRoleManagementPolicyApprovalRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyApprovalRule(writer: SerializationWriter, unifiedRoleManagementPolicyApprovalRule: UnifiedRoleManagementPolicyApprovalRule | undefined = {} as UnifiedRoleManagementPolicyApprovalRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyApprovalRule)
        writer.writeObjectValue<ApprovalSettings>("setting", unifiedRoleManagementPolicyApprovalRule.setting, serializeApprovalSettings);
}
