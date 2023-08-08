import type {RoleAssignment} from './roleAssignment';
import type {RoleAssignmentCollectionResponse} from './roleAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleAssignmentCollectionResponse(writer: SerializationWriter, roleAssignmentCollectionResponse: RoleAssignmentCollectionResponse | undefined = {} as RoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<RoleAssignment>("value", roleAssignmentCollectionResponse.value, serializeRoleAssignment);
}
