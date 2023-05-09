import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './unifiedRoleManagementPolicyAuthenticationContextRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAuthenticationContextRule(writer: SerializationWriter, unifiedRoleManagementPolicyAuthenticationContextRule: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined = {} as UnifiedRoleManagementPolicyAuthenticationContextRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyAuthenticationContextRule)
        writer.writeStringValue("claimValue", unifiedRoleManagementPolicyAuthenticationContextRule.claimValue);
        writer.writeBooleanValue("isEnabled", unifiedRoleManagementPolicyAuthenticationContextRule.isEnabled);
}
