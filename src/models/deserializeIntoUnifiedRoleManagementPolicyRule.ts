import {createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUnifiedRoleManagementPolicyRuleTarget} from './serializeUnifiedRoleManagementPolicyRuleTarget';
import type {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyRule: UnifiedRoleManagementPolicyRule | undefined = {} as UnifiedRoleManagementPolicyRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleManagementPolicyRule),
        "target": n => { unifiedRoleManagementPolicyRule.target = n.getObjectValue<UnifiedRoleManagementPolicyRuleTarget>(createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue); },
    }
}
