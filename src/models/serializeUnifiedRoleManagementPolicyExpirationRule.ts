import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyExpirationRule} from './unifiedRoleManagementPolicyExpirationRule';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyExpirationRule(writer: SerializationWriter, unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {} as UnifiedRoleManagementPolicyExpirationRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyExpirationRule)
        writer.writeBooleanValue("isExpirationRequired", unifiedRoleManagementPolicyExpirationRule.isExpirationRequired);
        writer.writeDurationValue("maximumDuration", unifiedRoleManagementPolicyExpirationRule.maximumDuration);
}
