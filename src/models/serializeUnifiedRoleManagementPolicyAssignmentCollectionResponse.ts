import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyAssignment} from './serializeUnifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from './unifiedRoleManagementPolicyAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAssignmentCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyAssignmentCollectionResponse: UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignment>("value", unifiedRoleManagementPolicyAssignmentCollectionResponse.value, serializeUnifiedRoleManagementPolicyAssignment);
}
