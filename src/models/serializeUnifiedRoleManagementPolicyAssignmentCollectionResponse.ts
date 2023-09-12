import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleManagementPolicyAssignment } from './serializeUnifiedRoleManagementPolicyAssignment';
import { type UnifiedRoleManagementPolicyAssignment } from './unifiedRoleManagementPolicyAssignment';
import { type UnifiedRoleManagementPolicyAssignmentCollectionResponse } from './unifiedRoleManagementPolicyAssignmentCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAssignmentCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyAssignmentCollectionResponse: UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignment>("value", unifiedRoleManagementPolicyAssignmentCollectionResponse.value, serializeUnifiedRoleManagementPolicyAssignment);
}
