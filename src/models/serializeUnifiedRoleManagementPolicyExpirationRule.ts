import { serializeUnifiedRoleManagementPolicyRule } from './serializeUnifiedRoleManagementPolicyRule';
import { type UnifiedRoleManagementPolicyExpirationRule } from './unifiedRoleManagementPolicyExpirationRule';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyExpirationRule(writer: SerializationWriter, unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {} as UnifiedRoleManagementPolicyExpirationRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyExpirationRule)
        writer.writeBooleanValue("isExpirationRequired", unifiedRoleManagementPolicyExpirationRule.isExpirationRequired);
        writer.writeDurationValue("maximumDuration", unifiedRoleManagementPolicyExpirationRule.maximumDuration);
}
