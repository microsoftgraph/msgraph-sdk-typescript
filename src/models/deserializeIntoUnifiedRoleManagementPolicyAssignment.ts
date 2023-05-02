import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAssignment(unifiedRoleManagementPolicyAssignment: UnifiedRoleManagementPolicyAssignment | undefined = {} as UnifiedRoleManagementPolicyAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleManagementPolicyAssignment),
        "policy": n => { unifiedRoleManagementPolicyAssignment.policy = n.getObjectValue<UnifiedRoleManagementPolicy>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
        "policyId": n => { unifiedRoleManagementPolicyAssignment.policyId = n.getStringValue(); },
        "roleDefinitionId": n => { unifiedRoleManagementPolicyAssignment.roleDefinitionId = n.getStringValue(); },
        "scopeId": n => { unifiedRoleManagementPolicyAssignment.scopeId = n.getStringValue(); },
        "scopeType": n => { unifiedRoleManagementPolicyAssignment.scopeType = n.getStringValue(); },
    }
}
