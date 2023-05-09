import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyEnablementRule} from './unifiedRoleManagementPolicyEnablementRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyEnablementRule(writer: SerializationWriter, unifiedRoleManagementPolicyEnablementRule: UnifiedRoleManagementPolicyEnablementRule | undefined = {} as UnifiedRoleManagementPolicyEnablementRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyEnablementRule)
        writer.writeCollectionOfPrimitiveValues<string>("enabledRules", unifiedRoleManagementPolicyEnablementRule.enabledRules);
}
