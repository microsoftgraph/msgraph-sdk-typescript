import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyExpirationRule} from './unifiedRoleManagementPolicyExpirationRule';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyExpirationRule(writer: SerializationWriter, unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {} as UnifiedRoleManagementPolicyExpirationRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyExpirationRule)
        writer.writeBooleanValue("isExpirationRequired", unifiedRoleManagementPolicyExpirationRule.isExpirationRequired);
        writer.writeDurationValue("maximumDuration", unifiedRoleManagementPolicyExpirationRule.maximumDuration);
}
