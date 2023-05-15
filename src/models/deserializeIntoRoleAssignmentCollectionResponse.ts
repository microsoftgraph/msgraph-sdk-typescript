import {createRoleAssignmentFromDiscriminatorValue} from './createRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RoleAssignment} from './roleAssignment';
import {RoleAssignmentCollectionResponse} from './roleAssignmentCollectionResponse';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleAssignmentCollectionResponse(roleAssignmentCollectionResponse: RoleAssignmentCollectionResponse | undefined = {} as RoleAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roleAssignmentCollectionResponse),
        "value": n => { roleAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<RoleAssignment>(createRoleAssignmentFromDiscriminatorValue); },
    }
}
