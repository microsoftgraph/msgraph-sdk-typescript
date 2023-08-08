import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import type {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import type {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAssignment(writer: SerializationWriter, unifiedRoleManagementPolicyAssignment: UnifiedRoleManagementPolicyAssignment | undefined = {} as UnifiedRoleManagementPolicyAssignment) : void {
        serializeEntity(writer, unifiedRoleManagementPolicyAssignment)
        writer.writeObjectValue<UnifiedRoleManagementPolicy>("policy", unifiedRoleManagementPolicyAssignment.policy, serializeUnifiedRoleManagementPolicy);
        writer.writeStringValue("policyId", unifiedRoleManagementPolicyAssignment.policyId);
        writer.writeStringValue("roleDefinitionId", unifiedRoleManagementPolicyAssignment.roleDefinitionId);
        writer.writeStringValue("scopeId", unifiedRoleManagementPolicyAssignment.scopeId);
        writer.writeStringValue("scopeType", unifiedRoleManagementPolicyAssignment.scopeType);
}
