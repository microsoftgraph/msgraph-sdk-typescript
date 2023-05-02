import {RoleAssignment} from './roleAssignment';
import {RoleAssignmentCollectionResponse} from './roleAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleAssignmentCollectionResponse(writer: SerializationWriter, roleAssignmentCollectionResponse: RoleAssignmentCollectionResponse | undefined = {} as RoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<RoleAssignment>("value", roleAssignmentCollectionResponse.value, serializeRoleAssignment);
}
