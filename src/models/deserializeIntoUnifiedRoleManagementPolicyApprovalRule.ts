import {ApprovalSettings} from './approvalSettings';
import {createApprovalSettingsFromDiscriminatorValue} from './createApprovalSettingsFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {serializeApprovalSettings} from './serializeApprovalSettings';
import {UnifiedRoleManagementPolicyApprovalRule} from './unifiedRoleManagementPolicyApprovalRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyApprovalRule(unifiedRoleManagementPolicyApprovalRule: UnifiedRoleManagementPolicyApprovalRule | undefined = {} as UnifiedRoleManagementPolicyApprovalRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyApprovalRule),
        "setting": n => { unifiedRoleManagementPolicyApprovalRule.setting = n.getObjectValue<ApprovalSettings>(createApprovalSettingsFromDiscriminatorValue); },
    }
}
