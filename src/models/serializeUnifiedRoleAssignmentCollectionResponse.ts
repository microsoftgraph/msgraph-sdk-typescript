import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignment} from './serializeUnifiedRoleAssignment';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleAssignmentCollectionResponse} from './unifiedRoleAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentCollectionResponse: UnifiedRoleAssignmentCollectionResponse | undefined = {} as UnifiedRoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignment>("value", unifiedRoleAssignmentCollectionResponse.value, serializeUnifiedRoleAssignment);
}
