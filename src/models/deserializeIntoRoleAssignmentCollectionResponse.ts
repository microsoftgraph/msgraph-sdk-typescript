import { createRoleAssignmentFromDiscriminatorValue } from './createRoleAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type RoleAssignment } from './roleAssignment';
import { type RoleAssignmentCollectionResponse } from './roleAssignmentCollectionResponse';
import { serializeRoleAssignment } from './serializeRoleAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleAssignmentCollectionResponse(roleAssignmentCollectionResponse: RoleAssignmentCollectionResponse | undefined = {} as RoleAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roleAssignmentCollectionResponse),
        "value": n => { roleAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<RoleAssignment>(createRoleAssignmentFromDiscriminatorValue); },
    }
}
