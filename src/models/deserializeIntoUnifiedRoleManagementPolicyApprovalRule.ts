import { type ApprovalSettings } from './approvalSettings';
import { createApprovalSettingsFromDiscriminatorValue } from './createApprovalSettingsFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleManagementPolicyRule } from './deserializeIntoUnifiedRoleManagementPolicyRule';
import { serializeApprovalSettings } from './serializeApprovalSettings';
import { type UnifiedRoleManagementPolicyApprovalRule } from './unifiedRoleManagementPolicyApprovalRule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyApprovalRule(unifiedRoleManagementPolicyApprovalRule: UnifiedRoleManagementPolicyApprovalRule | undefined = {} as UnifiedRoleManagementPolicyApprovalRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyApprovalRule),
        "setting": n => { unifiedRoleManagementPolicyApprovalRule.setting = n.getObjectValue<ApprovalSettings>(createApprovalSettingsFromDiscriminatorValue); },
    }
}
