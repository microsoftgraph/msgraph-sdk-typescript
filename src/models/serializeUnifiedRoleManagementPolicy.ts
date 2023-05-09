import {Identity} from './identity';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicy(writer: SerializationWriter, unifiedRoleManagementPolicy: UnifiedRoleManagementPolicy | undefined = {} as UnifiedRoleManagementPolicy) : void {
        serializeEntity(writer, unifiedRoleManagementPolicy)
        writer.writeStringValue("description", unifiedRoleManagementPolicy.description);
        writer.writeStringValue("displayName", unifiedRoleManagementPolicy.displayName);
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>("effectiveRules", unifiedRoleManagementPolicy.effectiveRules, serializeUnifiedRoleManagementPolicyRule);
        writer.writeBooleanValue("isOrganizationDefault", unifiedRoleManagementPolicy.isOrganizationDefault);
        writer.writeObjectValue<Identity>("lastModifiedBy", unifiedRoleManagementPolicy.lastModifiedBy, serializeIdentity);
        writer.writeDateValue("lastModifiedDateTime", unifiedRoleManagementPolicy.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>("rules", unifiedRoleManagementPolicy.rules, serializeUnifiedRoleManagementPolicyRule);
        writer.writeStringValue("scopeId", unifiedRoleManagementPolicy.scopeId);
        writer.writeStringValue("scopeType", unifiedRoleManagementPolicy.scopeType);
}
