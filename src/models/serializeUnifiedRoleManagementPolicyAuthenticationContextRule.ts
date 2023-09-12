import { serializeUnifiedRoleManagementPolicyRule } from './serializeUnifiedRoleManagementPolicyRule';
import { type UnifiedRoleManagementPolicyAuthenticationContextRule } from './unifiedRoleManagementPolicyAuthenticationContextRule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAuthenticationContextRule(writer: SerializationWriter, unifiedRoleManagementPolicyAuthenticationContextRule: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined = {} as UnifiedRoleManagementPolicyAuthenticationContextRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyAuthenticationContextRule)
        writer.writeStringValue("claimValue", unifiedRoleManagementPolicyAuthenticationContextRule.claimValue);
        writer.writeBooleanValue("isEnabled", unifiedRoleManagementPolicyAuthenticationContextRule.isEnabled);
}
