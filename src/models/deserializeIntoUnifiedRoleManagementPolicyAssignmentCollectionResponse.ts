import {createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyAssignment} from './serializeUnifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from './unifiedRoleManagementPolicyAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse(unifiedRoleManagementPolicyAssignmentCollectionResponse: UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyAssignmentCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignment>(createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue); },
    }
}
