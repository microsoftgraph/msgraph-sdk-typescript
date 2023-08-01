import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleManagementPolicyRuleTarget} from './serializeUnifiedRoleManagementPolicyRuleTarget';
import type {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyRule(writer: SerializationWriter, unifiedRoleManagementPolicyRule: UnifiedRoleManagementPolicyRule | undefined = {} as UnifiedRoleManagementPolicyRule) : void {
        serializeEntity(writer, unifiedRoleManagementPolicyRule)
        writer.writeObjectValue<UnifiedRoleManagementPolicyRuleTarget>("target", unifiedRoleManagementPolicyRule.target, serializeUnifiedRoleManagementPolicyRuleTarget);
}
